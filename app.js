angular.module('confirmation', ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'APP_NAME': 'Work Chat',
            'THANKS': 'Thank You for Subscribing',
            'CONFIRM_SUCCESS_MESSAGE': 'Your email has been successfully confirmed. Thanks for using our services.',
            'FOOTER': 'Work Chat, Sulman Baig, Pakistan'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    }])
    .controller('ConfirmController', ['$scope', function ($scope) {

    }]);