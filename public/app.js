var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'StudentsController',
            templateUrl: 'views/students.html'
        })
        .when('/students', {
            controller: 'StudentsController',
            templateUrl: 'views/students.html'
        })
        .when('/students/details/:id', {
            controller: 'StudentsController',
            templateUrl: 'views/student_details.html'
        })
        .when('/students/add', {
            controller: 'StudentsController',
            templateUrl: 'views/add_student.html'
        })
        .when('/students/edit/:id', {
            controller: 'StudentsController',
            templateUrl: 'views/edit_student.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});