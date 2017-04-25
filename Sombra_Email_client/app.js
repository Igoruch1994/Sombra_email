
var app = angular.module('myApp', ['ngRoute']);



app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

app.config(function($routeProvider) {


    $routeProvider

        .when('/', {
            templateUrl : 'html/home.html',
            controller  : 'HomeController'
        })
        .when('/registration', {
            templateUrl : 'html/registration.html',
            controller  : 'RegistrationController'
        })
        .when('/read', {
            templateUrl : 'html/read.html',
            controller  : 'ReadController'
        })
        .when('/write', {
            templateUrl : 'html/write.html',
            controller  : 'WriteController'
        })
        .when('/login', {
            templateUrl : 'html/login.html'
        })
        .otherwise({redirectTo: '/'});

});




