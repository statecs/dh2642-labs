// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookies,$cookieStore) {
  
  var numberOfGuest = $cookieStore.get('numberOfGuests') || 4;
  var dinnerMenu = [];
  
  this.loadMenu = function(dishIds){
    var parent = this;
    if(!(typeof(dishIds) === 'undefined')){
      $.each(dishIds, function(index, value){
        if(value != null){

          var dishToAdd = parent.Dish.get({id:value}, function(data){
            console.log("loadMenu: ", JSON.parse(data));
          });

          console.log("load menu (dishToadd): ", dishToAdd);
        }
      });
    }
  }
  //Sets number of guests in dinner party
  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
  }
    
  //Get number of guests in dinner party
  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }

  //Returns the dish that is on the menu for selected type 
  // Must handle empty list, or if type is not found
  this.getSelectedDish = function(type) {
    var result = $.grep(dinnerMenu, function(dish){
      return dish.type == type;
    });
    if(result.length == 0){
      console.log("Nothing in dinnermenu!");
    }
    else{
      return result[0];
    }
  }

  //Returns all the dishes on the menu (IMPROVEMENT: Add sorting by type)
  this.getFullMenu = function() {
    console.log(dinnerMenu);
    return dinnerMenu;
  }

  //Returns all ingredients for all the dishes on the menu. (IMPROVEMENT: Add quantity if ingridient matches)
  this.getAllIngredients = function() {
    //TODO Lab 2
    var allIngredients = [];
    $.each(dinnerMenu,function(index, dishFromMenu){
      $.each(dishFromMenu.Ingredients,function(index,ingredient) {
        allIngredients.push(ingredient);
      });
    });
    return allIngredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var totalMenuPrice = 0;     //To count total menu price 
    if(typeof(dinnerMenu) === 'object' && dinnerMenu != []){
      $.each(dinnerMenu,function(index, dishFromMenu){
        //For each ingridient, add price times number of guests
        //console.log(dishFromMenu);
        $.each(dishFromMenu.Ingredients,function(index,ingredient) {
          totalMenuPrice += Math.floor(ingredient.Quantity*numberOfGuest * 100) / 100;
        });
      });
    }
    return totalMenuPrice;
  }



  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dishToAdd) {

    console.log("addToDish, dishToAdd: ", dishToAdd);
    var notFound = true;          //To check if type is already in the menu
    var lastVal = $cookieStore.get('dinnerMenuId') || [];
    console.log("Lastval (before adding): ", lastVal);
    $.each(dinnerMenu,function(index) {
      //Check if dish of type found and replace it
      if(dinnerMenu[index].Category === dishToAdd.Category) {
        notFound = false;
        dinnerMenu[index] = dishToAdd;

        lastVal[index] = dishToAdd.RecipeID;
        console.log("LastVal: " , lastVal);
        //  $cookieStore.remove('dinnerMenuId');
    
      }
    });
    //If not found in menu, just add dish in the end
    if(notFound){
      dinnerMenu.push(dishToAdd);
      lastVal.push(dishToAdd.RecipeID);
      console.log("Lastval(notfound): ", lastVal);
      $cookieStore.remove('dinnerMenuId');
    }
    
    $cookieStore.put('dinnerMenuId', lastVal);
    console.log($cookieStore.get('dinnerMenuId'));
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(recipeId) {
    var indexToRemove = -1;     //Index of item to remove
    var lastVal = $cookieStore.get('dinnerMenuId') || [];
    $.each(dinnerMenu,function(index, dishFromMenu){
      //Check if 'id' is in dinnerMenu
      if(dishFromMenu.RecipeID == recipeId){
        indexToRemove = index;
      }
    });
    //Remove dish from menu if found
    if(indexToRemove != -1){
      dinnerMenu.splice(indexToRemove,1);
      lastVal.splice(indexToRemove,1);
      $cookieStore.put('dinnerMenuId', lastVal);
    }
  }

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'dvxjQjPAhbmCkz236n860N99N6441Zb2'});
  
  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxjQjPAhbmCkz236n860N99N6441Zb2'});

  //Maybe need to add .setSelectedDish() also?!?!

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  this.loadMenu($cookieStore.get('dinnerMenuId'));
  
  return this;

});