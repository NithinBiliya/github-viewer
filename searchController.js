(function() {
  angular.module("githubViewer")
    .controller("searchController", ["$interval","$location","$log",function($interval,$location,$log) {
      var vm=this;
      
      vm.username="angular";
      
      vm.counter=5;
      var decrementCounter=function() {
        vm.counter--;
        if(vm.counter<1) {
          vm.counter=null;
          vm.search(vm.username);
        }
      }
      
      vm.search=function(username) {
        if(vm.searchUser.$valid) {
          if(intervalPromise!=null) {
            $interval.cancel(intervalPromise);
            vm.counter=null;
          }
          $log.info("Searching with user - "+username);
          $location.path("/user/"+username);
        }
      }
      
      var intervalPromise=$interval(decrementCounter,1000,5);
    }]);
}());