
app.controller('RegistrationController', ['$scope','$http','$window','$timeout', function ($scope, $http,$window,$timeout) {
    $scope.user = {};

    $scope.registration=function () {
        $scope.user.login=$scope.login;
        $scope.user.password=$scope.password;
        $scope.user.email=$scope.email;
        $http.post('http://localhost:8080/user', $scope.user)
            .success(function (data, status, headers, config) {
                $scope.RegistrationData=data;
            })
    };
}]);