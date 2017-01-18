angular
    .module("app", ["ngAnimate", "ngAria", "ngMaterial", "ngMdIcons"])
    .config(["$mdThemingProvider", function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    }])
    .controller("BottomSheetController", ["$scope", function ($scope) {

    }])
    .controller("TestController", ["$log", "$scope", "$mdSidenav", "$mdBottomSheet", function ($log, $scope, $mdSidenav, $mdBottomSheet) {
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
    }]);
