// Search controller that we use whenever we have a search inputs
// and search results

dinnerPlannerApp.controller('SearchCtrl',function($scope,$http,Dinner){

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.
  

 $scope.search = function(query) {
   $scope.status = "Searching...";
   Dinner.DishSearch.get({title_kw:query},function(data){
     $scope.dishes=data.Results;
     $scope.status = "Showing " + data.Results.length + " results";
     console.log(data);
   },function(data){
     $scope.status = "There was an error";
   });
 };
 //QUICKFIX - NEED TO LOAD ALL DISHES
 $scope.search("i");
});


