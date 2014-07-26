
var CodeKataNinjaApp = angular.module('CodeKataNinjaApp', ['ngRoute']);

CodeKataNinjaApp.config([
    '$interpolateProvider', function($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);


CodeKataNinjaApp.controller('KatalogController', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('https://api.github.com/repos/grahambrooks/katalog/contents/katalog.json').success(function (data) {
            $scope.katalog = JSON.parse(atob(data.content.replace(/\s/g, '')));
        });
    }
]);
