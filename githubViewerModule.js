(function() {
  angular.module("githubViewer",["ngRoute"])
    .config(["$routeProvider",function($routeProvider) {
      $routeProvider
        .when("/main",{
          templateUrl: "search.html",
          controller: "searchController",
          controllerAs: "vm"
        })
        .when("/user/:username",{
          templateUrl: "user.html",
          controller: "userController",
          controllerAs: "vm"
        })
        .when("/repo/:username/:reponame",{
          templateUrl: "repo.html",
          controller: "repoController",
          controllerAs: "vm"
        })
        .otherwise({redirectTo:"/main"});
    }])
}());