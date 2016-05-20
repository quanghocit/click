/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('Campaign', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.campaign').removeClass("hidden");
  }]);
