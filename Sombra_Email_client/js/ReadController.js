app.controller('ReadController', ['$scope','$http','$window', function ($scope, $http,$window) {


    $scope.GetAllMessage=function (numb) {
        {
            $scope.infoButtonNumber=numb;

                $http({
                    method: 'GET',
                    url: 'http://localhost:8080/message',
                    withCredentials: true
                }).success(function (data) {
                    $scope.messages = data;
                });
            }
        };




}]);