/*
@ file: cachefactory.js
@ description: file which contains the cache factory.
*/

(function () {
    angular.module('app')
         .factory('cache', ['$cacheFactory', function ($cacheFactory) {
            return $cacheFactory('cache');
          }]);
})();