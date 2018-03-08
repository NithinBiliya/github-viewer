(function() {
  angular.module("githubViewer")
    .controller("userController",["$routeParams","github","$log",function($routeParams,github,$log) {
      vm=this;
      vm.username=$routeParams.username;
      
      github.getUser(vm.username).then(function(data) {
        vm.user=data;
        $log.info("fetched user details");
        $log.info(vm.user);
      }, function(reason) {
        vm.error="Failed to fetch user details";
        $log.error("Failed to fetch user details - "+angular.toJson(reason));
      });
      
    }]);
}());