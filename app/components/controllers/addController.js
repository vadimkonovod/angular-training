(function(module) {

    var addController = function ($scope, catFactory, authService, $routeParams, $location) {

        var id = $routeParams.id;

        //for $http instead of $resource
/*      catFactory.getCatById(id).then(function(data) {
            $scope.cat = data;
        }, function() {});
*/
        //for $resource instead of $http
        if (id){
            $scope.cat = catFactory.getCatById(id);
        }

        $scope.addCat = function(cat) {

            var user = authService.getLogedUser();
            if(user != undefined) {
                cat.owner = user.name;
            }

            catFactory.addCat(cat);
            $location.url('/cats');
        };

        $scope.editCat = function(cat) {
            catFactory.editCat(cat);
            $location.url('/cats');
        };

    };

    module.controller("addController", addController);

}(angular.module("app")));