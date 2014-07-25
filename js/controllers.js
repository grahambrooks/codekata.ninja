/**
 * Created by graham on 7/24/14.
 */
var kataApp = angular.module('KatalogApp', ['ngRoute']);

kataApp.controller('KataCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('https://raw.githubusercontent.com/grahambrooks/katalog/master/katalog.json').success(function (data) {
            window.alert(data);
            $scope.katalog = data;
        });
    }
]);