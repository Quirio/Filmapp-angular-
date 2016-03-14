/*
@ file: filmpopularcontroller.js
@ description: file which contains a filmpopular state controller.
*/

(function () {
    "use strict";
    angular.module('app').controller('filmpopularcontroller', filmpopularcontroller);

    filmpopularcontroller.$inject = ['$q', '$scope', '$state', 'apirequest'];
    function filmpopularcontroller($q, $scope, $state, apirequest) {
        // <editor-fold desc="Vars">

        $scope.popularfilms;

        // </editor-fold>

        // <editor-fold desc="Init">

        function init() {
            apirequest.getpopularfilms()
                .then(
                function (data) {
                    $scope.popularfilms = data;
                },
                function (data) {
                    console.log(data);
                });
        }

        // </editor-fold>

        // <editor-fold desc="Methods">
            $scope.todetails = function (id) {
                $state.go('detailsfilm', { "filmid": id });
            }
        // </editor-fold>

        // <editor-fold desc="Helpers">

        // </editor-fold>

        // <editor-fold desc="Events">

        // </editor-fold>

        init();

    }
})();