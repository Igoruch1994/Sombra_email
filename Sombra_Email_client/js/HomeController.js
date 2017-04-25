
app.controller('HomeController', ['$scope','$http','$window', function ($scope, $http,$window) {
    $scope.currentUser=null;

    $http({
        method: 'GET',
        url:'http://localhost:8080/identifyUser',
        withCredentials: true
    }).success(function (data) {
        $scope.currentUser=data;
    });

    $scope.logout=function () {
        localStorage.setItem('currentUser',null);
        $http({
            method: 'GET',
            url:'http://localhost:8080/logout',
            withCredentials: true
        });
        $window.location.href = 'http://localhost:63343/Sombra_Email_client/index.html?_ijt=k6nb6cdt70sffqukbbv3uotv2g#/';
        $scope.reloadPage();
    };

    $scope.reloadPage = function(){$window.location.reload();};

}]);