angular.module('pageApp.services', []).factory('Page', function($resource) {
  return $resource('http://pagesmanagement.azurewebsites.net/api/ResponsivePages/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});