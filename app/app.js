'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('moviecat',['ngRoute','moviecat.movie_detail','moviecat.movieList','moviecat.directives.auto_focus']);
app.constant('AppConfig',{
    pageSize: 10,
    listApiAddress: 'http://api.douban.com/v2/movie/',
    detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
});
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])