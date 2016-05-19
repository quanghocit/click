angular
  .module('app')
  .controller('Location', ['$scope', 'Tracking', function ($scope, Tracking) {

  }])
  .controller('Users', ['$scope', 'Tracking', '$state', function ($scope, Tracking, $state) {

  }])
  .controller('News', ['$scope', 'Tracking', '$state', '$stateParams',
    function ($scope, Tracking, $state, $stateParams) {

    }])
  .controller('Calendar', ['$scope', '$q', 'Tracking', '$stateParams', '$state',
    function ($scope, $q, Tracking, $stateParams, $state) {

    }])
  .controller('Campaign', ['$scope', 'Tracking', '$state', '$stateParams',
    function ($scope, Tracking, $state, $stateParams) {

    }]);
