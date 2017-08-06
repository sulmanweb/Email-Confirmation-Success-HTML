angular.module('confirmation', ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        // English Variables
        $translateProvider.translations('en_US', {
            'APP_NAME': 'Work Chat',
            'THANKS': 'Thank You for Subscribing',
            'CONFIRM_SUCCESS_MESSAGE': 'Your email has been successfully confirmed. Thanks for using our services.',
            'FOOTER': 'Work Chat, Sulman Baig, Pakistan'
        });
        // Reference: https://goo.gl/QKuoWz
        $translateProvider.fallbackLanguage('en_US');
        // Reference: https://goo.gl/gyS5QP
        $translateProvider.determinePreferredLanguage();
        // Reference: https://goo.gl/IUFYbO
        $translateProvider.useSanitizeValueStrategy(null);
    }])
    .controller('ConfirmController', ['$scope', function ($scope) {

        $scope.init = function () {
            console.log("made by @sulmanweb");
        };

        $scope.init();
    }]);