/*
@ file: app.js
@ description: file which contains the app module.
*/

(function () {
    angular.module('app', ['ui.router']);

    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('popularfilm', {
            url: '/',
            views: {
                'mainview': {
                    templateUrl: 'app/views/popularfilm.html',
                    controller: 'filmpopularcontroller'
                },
            }
        });

        $stateProvider.state('detailsfilm', {
            url: '/:filmid/details',
            views: {
                'mainview': {
                    templateUrl: 'app/views/detailsfilm.html',
                    controller: 'filmdetailscontroller'
                },

                'castview': {
                    templateUrl: 'app/views/detailsfilm.html',
                    controller: 'filmcastcontroller'
                }
            }
        });
    });
})();
