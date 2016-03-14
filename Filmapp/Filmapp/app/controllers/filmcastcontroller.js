/*
@ file: filmcastcontroller.js
@ description: file which contains a castfilm view controller.
*/

(function () {
    "use strict";
    angular.module('app').controller('filmcastcontroller', filmcastcontroller);

    filmcastcontroller.$inject = ['$q', '$scope', '$state', '$stateParams', 'apirequest'];
    function filmcastcontroller($q, $scope, $state, $stateParams, apirequest) {
        // <editor-fold desc="Vars">

        $scope.castfilms = [];

        // </editor-fold>

        // <editor-fold desc="Init">

        function init() {
            apirequest.getcastfilms($stateParams.filmid)
                .then(
                function (data) {
                    $scope.dcastfilms = data;
                },
                function (data) {
                    console.log(data);
                });
        }

        // </editor-fold>

        // <editor-fold desc="Methods">
        /* $scope.todetails = function (id) {
             $state.go('detailsfilm', { "filmid": id });
         }*/
        // </editor-fold>

        // <editor-fold desc="Helpers">

        // </editor-fold>

        // <editor-fold desc="Events">

        // </editor-fold>

        init();

    }
})();