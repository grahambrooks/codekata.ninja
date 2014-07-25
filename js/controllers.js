/**
 * Created by graham on 7/24/14.
 */
var kataApp = angular.module('KatalogApp', ['ngRoute']);

kataApp.controller('KataCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('https://api.github.com/repos/grahambrooks/katalog/contents/katalog.json').success(function (data) {
            $scope.katalog = JSON.parse(atob(data.content.replace(/\s/g, '')));
        });
    }
]);