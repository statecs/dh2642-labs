//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu

	var numberOfGuests = 0;
	var dinnerMenu = [];

	var currentDish = 1;

	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		numberOfGuests = num;
		this.notifyObservers();
	}

	// should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	// Must handle empty list, or if type is not found
	this.getSelectedDish = function(type) {
		return $(dinnerMenu).filter(function(index,dish) {
	  		return dish.type == type;
	  	});
	}

	//Returns all the dishes on the menu (IMPROVEMENT: Add sorting by type)
	this.getFullMenu = function() {
		return dinnerMenu;
	}

	//Returns all ingredients for all the dishes on the menu. (IMPROVEMENT: Add quantity if ingridient matches)
	this.getAllIngredients = function() {
		//TODO Lab 2
		var allIngredients = [];
		$.each(dinnerMenu,function(index, dishFromMenu){
			$.each(dishFromMenu.ingredients,function(index,ingredient) {
				allIngredients.push(ingredient);
			});
		});
		return allIngredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalMenuPrice = 0;			//To count total menu price	
		$.each(dinnerMenu,function(index, dishFromMenu){
			//For each ingridient, add price times number of guests
			$.each(dishFromMenu.ingredients,function(index,ingredient) {
				totalMenuPrice += ingredient.price * numberOfGuests;
			});
		});
		return totalMenuPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var notFound = true;			  	//To check if type is already in the menu
		var dishToAdd = this.getDish(id)	//Dish to add for the menu
		$.each(dinnerMenu,function(index) {
			//Check if dish of type found and replace it
			if(dinnerMenu[index].type === dishToAdd.type) {
				notFound = false;
				dinnerMenu[index] = dishToAdd;
			}
		});
		//If not found in menu, just add dish in the end
		if(notFound){
			dinnerMenu.push(dishToAdd);
		}
		this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var indexToRemove = -1;			//Index of item to remove
		$.each(dinnerMenu,function(index, dishFromMenu){
			//Check if 'id' is in dinnerMenu
			if(dishFromMenu.id === id){
				indexToRemove = index;
			}
		});
		//Remove dish from menu if found
		if(indexToRemove != -1){
			dinnerMenu.splice(indexToRemove,1);
		}
		this.notifyObservers();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				//match if equal
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	//set the id of the dish we are currently looking at
	this.setCurrentDish = function (id) {
		currentDish = id;
		notifyObservers();
	}

	//get the id of the dish we are currently looking at
	this.getCurrentDish = function () {
		return parseInt(currentDish);
	}

	/*****************************************  
	      Observable implementation    
	*****************************************/

	this._observers = [];

	this.addObserver = function(observer) 
	{
		this._observers.push(observer);
	}

	this.notifyObservers = function(arg) 
	{
		for(var i=0; i<this._observers.length; i++) 
		{
			this._observers[i].update(arg);
		}	
	}

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];
	/* Initial test for methods
	console.log(numberOfGuests);
	this.setNumberOfGuests(5);
	console.log("Setting numGuest to 5 = " + numberOfGuests); */
	
	/* Console for testing addDishToMenu
	console.log(this.getFullMenu());
	this.addDishToMenu(1);
	console.log(this.getFullMenu());
	this.addDishToMenu(2);
	console.log(this.getFullMenu()); */

	/* Console for testing removeDishFromMenu()
	console.log("Full menu = " + this.getFullMenu());
	this.addDishToMenu(1);
	console.log("Full menu = " + this.getFullMenu());
	this.addDishToMenu(100);
	console.log("Full menu = " + this.getFullMenu());
	this.removeDishFromMenu(1);
	console.log(this.getFullMenu());*/

	/* Console for testing getTotalMenuPrice
	console.log(this.getFullMenu());
	this.addDishToMenu(1);
	this.addDishToMenu(100);
	console.log(this.getFullMenu());
	console.log("Total price = " + this.getTotalMenuPrice());
	this.setNumberOfGuests(5);
	console.log("Total price (5 pers) = " + this.getTotalMenuPrice());*/

	/* Console for testing getAllIngredients
	console.log(this.getFullMenu());
	this.addDishToMenu(100);
	this.addDishToMenu(1);
	this.addDishToMenu(200);
	console.log(this.getFullMenu());
	console.log(this.getAllIngredients()); */
}