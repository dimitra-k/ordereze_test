angular.module('pageApp.controllers', []).controller('AllPagesCtrl', function($scope, $state, popupService, $window, Page) {
  $scope.pages =Page.query(); //fetch all pages. Issues a GET to /api/pages

  $scope.deletePage = function(page) { // Delete a page. Issues a DELETE to /api/responsivePages/:id
    if (popupService.showPopup('Really delete this?')) {
      page.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('PageViewCtrl', function($scope, $stateParams, Page) {
  $scope.page = Page.get({ id: $stateParams.id }); //Get a single page.Issues a GET to /api/responsivePages/:id
}).controller('AddPageCtrl', function($scope, $state, $stateParams, Page) {
  $scope.page = new Page();  //create new page instance. Properties will be set via ng-model on UI

  $scope.addPage = function() { //create a new page. Issues a POST to /api/pages
    $scope.page.$save(function() {
      $state.go('pages'); // on success go back to home i.e. pages state.
    });
  };
}).controller('PageEditCtrl', function($scope, $state, $stateParams, Page) {
  $scope.updatePage = function() { //Update the edited page. Issues a PUT to /api/responsivePages/:id
    $scope.page.$update(function() {
      $state.go('pages'); // on success go back to home i.e. pages state.
    });
  };

  $scope.loadPage = function() { //Issues a GET request to /api/responsivePages/:id to get a page to update
    $scope.page = Page.get({ id: $stateParams.id });
  };

  $scope.loadPage(); // Load a page which can be edited on UI
});