angular
  .module('app')
  .controller('HomeCtrl', ['$scope', 'Tracking', function ($scope, Tracking) {

  }])
  .controller('Report', ['$scope', 'Tracking', '$state', function ($scope, Tracking, $state) {

  }])
  .controller('DeleteReviewController', ['$scope', 'Tracking', '$state', '$stateParams',
    function ($scope, Tracking, $state, $stateParams) {

    }])
  .controller('EditReviewController', ['$scope', '$q', 'Tracking', '$stateParams', '$state',
    function ($scope, $q, Tracking, $stateParams, $state) {

    }]);
