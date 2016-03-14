/*
@ file: apirequest.js
@ description: factory which contains all of request with the api.
*/

(function () {
    angular.module('app').factory('apirequest', apirequest);

    apirequest.$injector = ['$http', '$q', 'cache'];
    function apirequest($http, $q, cache) {

        return {
            getpopularfilms: getpopularfilms,
            getdetailsfilms: getdetailsfilms,
            getcastfilms: getcastfilms
        };


        function getpopularfilms() {

            if(!cache.get("popularfilm")){
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'http://api.themoviedb.org/3/movie/popular?api_key=ce20301f40c96f2c3093691c6a1ecb8c',
                    cache: false,
                }).then(function success(response) {
                    cache.put('popularfilm', response.data);
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }

            else
                return cache.get("popularfilm");
        }

        function getdetailsfilms(filmid) {
            if (!cache.get("detailsfilm") && cache.get("detailsfilm")) {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'http://api.themoviedb.org/3/movie/'+ filmid +'?api_key=ce20301f40c96f2c3093691c6a1ecb8c',
                    cache: false,
                }).then(function success(response) {
                    cache.put('popularfilm', response.data);
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }

            else
                return cache.get("popularfilm");

        }

        function getcastfilms(filmid){
            if (!cache.get("detailsfilm")) {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'http://api.themoviedb.org/3/movie/'+ filmid +'?api_key=ce20301f40c96f2c3093691c6a1ecb8c',
                    cache: false,
                }).then(function success(response) {
                    cache.put('popularfilm', response.data);
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response.data);
                });

                return deferred.promise;
            }

            else
                return cache.get("popularfilm");

        }
        }
    }
})();