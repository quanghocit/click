angular
  .module('app', [
    'ui.router',
    'lbServices',
    'ngTouch',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.moveColumns',
    'ui.grid.expandable',
    'ui.grid.pinning',
    'ui.grid.resizeColumns'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('location', {
        url: '/location',
        templateUrl: 'views/location/location.html',
        controller: 'Location',
        authenticate: true
      })
      .state('users', {
        url: '/users',
        templateUrl: 'views/users/users.html',
        controller: 'Users'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'views/news/news.html',
        controller: 'News'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'views/calendar/calendar.html',
        controller: 'Calendar'
      })
      .state('campaign', {
        url: '/campaign',
        templateUrl: 'views/campaign/campaign.html',
        controller: 'Campaign'
      })
      .state('hotspots', {
        url: '/hotspots',
        templateUrl: 'views/hotspots/hotspots.html',
        controller: 'Hotspots'
      })
      .state('report', {
        url: '/report',
        templateUrl: 'views/report/report.html',
        controller: 'Report'
      })
      .state('management_location', {
        url: '/management_location',
        templateUrl: 'views/management/location/location.html',
        controller: 'ManagementLocation'
      })
      .state('management_home', {
        url: '/management_home',
        templateUrl: 'views/management/home/home.html',
        controller: 'ManagementHome'
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      });
    $urlRouterProvider.otherwise('location');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
    });
  }]);
