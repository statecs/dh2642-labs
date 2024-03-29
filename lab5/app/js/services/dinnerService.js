// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookies,$cookieStore) {

    this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'dvxsO9JIQp0n0O389gZr2xzlq83P223F'});

     
      this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxsO9JIQp0n0O389gZr2xzlq83P223F'});
 

  var numberOfGuest = $cookieStore.get('numberOfGuests') || 4;
  var dinnerMenu = [];

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
    var notFound = true;                                             //To check if type is already in the menu
    var dinnerMenuIds = $cookieStore.get('dinnerMenuId') || [];      //The dinnerMenuIds from cookie to update
    console.log("dinnerMenuIds before adding): ", dinnerMenuIds);

    if($cookieStore.get('dinnerMenuId')){
      //Check if dish of type found and replace it
      $.each(dinnerMenu,function(index) {
        if(dinnerMenu[index].Category === dishToAdd.Category) {
          notFound = false;
          dinnerMenu[index] = dishToAdd;
          dinnerMenuIds[index] = dishToAdd.RecipeID;
          console.log("dinnerMenuIds after adding(found): " , dinnerMenuIds);
        }
      });
      //If not found, push it to the end of current menu
      if(notFound){
        dinnerMenu.push(dishToAdd);
        dinnerMenuIds.push(dishToAdd.RecipeID);
        console.log("dinnerMenuIds after adding(notfound): ", dinnerMenuIds);
      }

    }
    //This else condition maybe is unecessary? 
    else{
      //If cookie is empty, add item to the empty menu
      dinnerMenu.push(dishToAdd);
      dinnerMenuIds.push(dishToAdd.RecipeID);
      console.log("dinnerMenuIds after adding (Empty cookie): ", dinnerMenuIds);
    }
    //Finally, put the updated dinnerMenuIds in the cookie
    $cookieStore.put('dinnerMenuId', dinnerMenuIds);
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(recipeId) {
    var indexToRemove = -1;     //Index of item to remove
    var dinnerMenuIds = $cookieStore.get('dinnerMenuId') || [];
    $.each(dinnerMenu,function(index, dishFromMenu){
      //Check if 'id' is in dinnerMenu
      if(dishFromMenu.RecipeID == recipeId){
        indexToRemove = index;
      }
    });
    //Remove dish from menu if found
    if(indexToRemove != -1){
      dinnerMenu.splice(indexToRemove,1);
      dinnerMenuIds.splice(indexToRemove,1);
      $cookieStore.put('dinnerMenuId', dinnerMenuIds);
    }
  }


  //Maybe need to add .setSelectedDish() also?!?!

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
 
   var parent = this;

    
    if(typeof($cookieStore.get('dinnerMenuId')) === 'object'){
      var menuIds = $cookieStore.get('dinnerMenuId');
      console.log("Receating cookie, menuIds: ", menuIds, ", $cookieStore.get('dinnerMenuId'): ", $cookieStore.get('dinnerMenuId'));
      for(var i = 0; i < menuIds.length; i++){
         
          this.Dish.get({id:menuIds[i]},function(data){
            console.log("Recreating cookie, dish from cookie: ", data);
 
         //   parent.addDishToMenu(data);
            dinnerMenu.push(data);

          },function(data){
            
          });      
        
      }
    }
    else{
      console.log("No menu data, creating empty");
    }


  return this;

});