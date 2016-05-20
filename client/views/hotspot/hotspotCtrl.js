/**
 * Created by HocSoiCa on 5/20/2016.
 */
angular
  .module('app')
  .controller('Hotspot', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.hotspot').removeClass("hidden");
  }]);
