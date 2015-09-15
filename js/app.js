angular.module('pageApp', ['ui.router', 'ngResource', 'pageApp.controllers', 'pageApp.services']);

angular.module('pageApp').config(function($stateProvider) {
  $stateProvider.state('pages', { // state for showing all pages
    url: '/pages',
    templateUrl: 'partials/pages.html',
    controller: 'AllPagesCtrl'
  }).state('viewPage', { //state for showing single page
    url: '/pages/:id/view',
    templateUrl: 'partials/page-view.html',
    controller: 'PageViewCtrl'
  }).state('newPage', { //state for adding a new page
    url: '/pages/new',
    templateUrl: 'partials/page-add.html',
    controller: 'AddPageCtrl'
  }).state('editPage', { //state for updating a page
    url: '/pages/:id/edit',
    templateUrl: 'partials/page-edit.html',
    controller: 'PageEditCtrl'
  });
}).run(function($state) {
  $state.go('pages'); //make a transition to pages state when app starts
});