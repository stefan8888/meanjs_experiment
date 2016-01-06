'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.alerts = [
      {
        icon: 'glyphicon-user',
        colour: 'btn-success',
        total: '20,408',
        description: 'TOTAL CUSTOMERS'
      },

      {
        icon: 'glyphicon-calendar',
        colour: 'btn-primary',
        total: '8,382',
        description: 'UPCOMING EVENTS'
      }

    ];
  }
]);
