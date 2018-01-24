var myApp = angular.module('myApp');

myApp.controller('StudentsController', ["$scope", "$http", "$location", "$routeParams", function ($scope, $http, $location, $routeParams) {

    $scope.getStudents = function(){
        $http({
            method: 'GET',
            url: '/api/students'
        }).then(function (success) {
            $scope.students = success.data;
        }, function(error){
            console.log(error);
        });
    }

    $scope.getStudent = function(){
        var id = $routeParams.id;
        $http({
            method: 'GET',
            url: '/api/students/'+id
        }).then(function (success) {
            $scope.student = success.data;
        }, function(error){
            console.log(error);
        });
    }

    $scope.addStudent = function(){
        $http({
            method: 'POST',
            url: '/api/students/',
            data: $scope.student
        }).then(function (success) {
            window.location.href = "#!/students";
        }, function(error){
            console.log(error);
        });
    }

    $scope.updateStudent = function(){
        var id = $routeParams.id;
        $http({
            method: 'PUT',
            url: '/api/students/'+id,
            data: $scope.student
        }).then(function (success) {
            console.log($scope.student, success)
            window.location.href = "#!/students";
        }, function(error){
            console.log(error);
        });
    }

    $scope.removeStudent = function(id){
        $http({
            method: 'DELETE',
            url: '/api/students/'+id
        }).then(function (success) {
            window.location.href = "#!/students";
        }, function(error){
            console.log(error);
        });
    }
}])