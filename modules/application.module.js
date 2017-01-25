angular
    .module("app", ["ngAnimate", "ngAria", "ngMaterial", "ngMdIcons"])
    .config(["$mdThemingProvider", function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    }])
    .controller("BottomSheetController", ["$scope", function ($scope) {

    }])
    .controller("TestController", ["$log", "$scope", "$mdSidenav", "$mdBottomSheet", "$mdDialog", "$mdMedia", function ($log, $scope, $mdSidenav, $mdBottomSheet, $mdDialog, $mdMedia) {
        $scope.mdMedia = $mdMedia;

        $scope.$watch(function() { return $mdMedia('xs'); }, function(xs) {
            $scope.xs = xs;
        });

        $scope.open = function () {
            $mdSidenav('left').open()
                .then(function () {
                    $log.debug("open LEFT is done");
                });
        };

        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };

        $scope.showBottomSheet = function() {
            $mdBottomSheet.show({
                templateUrl: 'templates/bottom-sheet.html',
                controller: 'BottomSheetController'
            });
        };


        $scope.showDialog = function(ev) {
            $mdDialog.show({
                controller: PopupController,
                templateUrl: "templates/popup.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    //$scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    //$scope.status = 'You cancelled the dialog.';
                });
        };


        function PopupController ($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        };
    }]);
