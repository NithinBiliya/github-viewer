(function() {
  angular.module("githubViewer")
    .controller("repoController",["$routeParams","github","$log",function($routeParams,github,$log) {
      vm=this;
      
      vm.username=$routeParams.username;
      vm.reponame=$routeParams.reponame;
      
      $log.info("inside repoController");
      
      github.getRepo(vm.username,vm.reponame).then(function(data) {
        vm.repo=data;
        $log.info("Fetched repo details");
        $log.info(vm.repo);
      },function(reason) {
        vm.error=reason;
        $log.error("Error fetching repo details");
        $log.error(reason);
      });
    }]);
}());