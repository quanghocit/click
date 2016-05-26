/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('News', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.news').removeClass("hidden");
  }]);
