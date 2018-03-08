(function() {
  angular.module("githubViewer")
    .factory("github",["$http",function($http) {
      
      var getUser=function(username) {
        var user;
        return $http.get("https://api.github.com/users/"+username).then(function(response) {
          user=response.data;
          return $http.get(user.repos_url);
        }).then(function(response) {
          user.repos=response.data;
          return user;
        });
        // return $http.get("https://api.github.com/users/"+username).then(function(response) {
        //   return response.data;
        // });
      }
      
      var getRepo=function(username,reponame) {
        var repo;
        return $http.get("https://api.github.com/repos/"+username+"/"+reponame).then(function(response) {
          repo=response.data;
          return $http.get(repo.contributors_url);
        }).then(function(response) {
          repo.contributors=response.data;
          return repo;
        });
      }
      
      return {
        getUser: getUser,
        getRepo: getRepo
      }
    }]);
}());