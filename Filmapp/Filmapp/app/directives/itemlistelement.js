/*
@ file: itemlistelement.js
@ description: contains a directive which represents diferents items of movies or series list.
*/

(function () {
    controller.$inject = ['$scope', '$compile'];
    function controller($scope, $compile) {
        var html;
        

        $scope.itemSelected = function () {
            if ($.isFunction($scope.onclick)) {

                $scope.onclick({ id: $scope.item.id });

            }
        };

        $scope.$watch('item', function (value, old) {
            if (!value) {
                return;
            }

            switch ($scope.type) {
                case 'films':
                    html = $('<img  ng-src="https://image.tmdb.org/t/p/w370{{item.poster_path}}" ng-click="itemSelected()"  />');
                    break;
                case 'series':
                    //html = $(' <li class="list-group-item"  ng-click="itemSelected()"> {{num}} {{ item.Section }} {{ item.Capacity_books }} </li>');
                    break;

            }

            $("#desplegables").append(html);
            $compile(html)($scope);
        });
    }

    angular.module('app').directive('itemlistelement', itemlistelement);
    function itemlistelement() {
        return {
            restrict: 'E',
            template: '',
            controller: controller,
            scope: {
                onclick: '&',
                item: '=',
                id: '@',
                type: '@'
            },               
        };
    }
})();