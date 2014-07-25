/**
 * Created by graham on 7/24/14.
 */
var kataApp = angular.module('KatalogApp', ['ngRoute']);

kataApp.controller('KataCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
//        $.ajax({
//            url: "https://raw.githubusercontent.com/grahambrooks/katalog/master/katalog.json",
//            dataType: "jsonp",
//            jsonpCallback: "STRd6/md:v0.3.2",
//            success: function (data) {
//                window.alert(data);
//                $scope.katalog = data;
//
//            }
//        })
//
        $http.get('https://gist.githubusercontent.com/grahambrooks/60f9ce76f3a8f6ed2089/raw/3a152ebf4d55affe7e1870fea9cd5e040fa0f1db/gistfile1.js').success(function (data) {
//            window.alert(data);
            $scope.katalog = data;
        });
    }
]);