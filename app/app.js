(function () {
    "use strict";
    angular.module("app", ["ui.router", "ngResource", "ngCookies"])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/cats');
            $stateProvider
                .state('cats', {
                    url: '/cats',
                    templateUrl: 'templates/main.html'
                })
                .state('edit', {
                    url: '/edit/:id',
                    templateUrl: 'templates/edit.html',
                    controller: 'editCatController'
                })
                .state('new', {
                    url: '/new',
                    templateUrl: 'templates/new.html',
                    controller: 'newCatController'
                });
        }
    )

})();
