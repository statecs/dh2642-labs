// Search controller that we use whenever we have a search inputs
// and search results

dinnerPlannerApp.controller('SearchCtrl',function($scope,$http,Dinner){

  // TODO in Lab 5: you will need to implement a method that searchers for dishes
  // including the case while the search is still running.
  
load_recipes();
function load_recipes(){

  $http.get("http://api.bigoven.com/recipes?api_key=dvxjQjPAhbmCkz236n860N99N6441Zb2&pg=1&rpp=25").success(function(data){
  $scope.load_recipes=data.Results;


 $scope.search = function(query) {
   $scope.status = "Searching...";
   Dinner.DishSearch.get({title_kw:query},function(data){
     $scope.dishes=data.Results;
     $scope.status = "Showing " + data.Results.length + " results";
     console.log(data);
   },function(data){
     $scope.status = "There was an error";
   });
 }

})
}
});


