(function() {
  angular.module("githubViewer")
    .controller("searchController", ["$interval","$location","$log",function($interval,$location,$log) {
      vm=this;
      
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
        // TODO - add form validation to see mandatory fields
        
        if(intervalPromise!=null) {
          $interval.cancel(intervalPromise);
          vm.counter=null;
        }
        $log.info("Searching with user - "+vm.username);
        $location.path("/user/"+vm.username);
      }
      
      var intervalPromise=$interval(decrementCounter,1000,5);
    }]);
}());