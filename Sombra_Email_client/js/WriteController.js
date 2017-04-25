app.controller('WriteController', ['$scope','$http','$window', function ($scope, $http,$window) {

    $scope.sendMessages = function () {
        if ($scope.textMessage!=null) {
            $http({
                method: 'POST',
                url:'http://localhost:8080/message?email='+$scope.email,
                withCredentials: true,
                data: {
                    text: $scope.textMessage
                }
            }).success(function (data) {
                $window.alert("Success!");
                $scope.reloadPage();
            })
        }
    };

    $scope.reloadPage = function(){$window.location.reload();};

}]);