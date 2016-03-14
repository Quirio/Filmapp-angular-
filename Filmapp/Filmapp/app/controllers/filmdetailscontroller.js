/*
@ file: filmdetailscontroller.js
@ description: file which contains a detailsfilm state controller.
*/

(function () {
    "use strict";
    angular.module('app').controller('filmdetailscontroller', filmdetailscontroller);

    filmdetailscontroller.$inject = ['$q', '$scope', '$state', '$stateParams', 'apirequest'];
    function filmdetailscontroller($q, $scope, $state, $stateParams, apirequest) {
        // <editor-fold desc="Vars">

        $scope.detailsfilms = [];

        // </editor-fold>

        // <editor-fold desc="Init">

        function init() {
            apirequest.getdetailsfilms($stateParams.filmid)
                .then(
                function (data) {
                    $scope.detailsfilms = data;
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