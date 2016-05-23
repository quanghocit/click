/**
 * Created by HocSoiCa on 5/23/2016.
 */
angular
  .module('app')
  .controller('Report', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.report').removeClass("hidden");
  }]);
