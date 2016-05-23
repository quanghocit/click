/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('Campaign', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.campaign').removeClass("hidden");

    $scope.showstep1 = true;
    $scope.next12 = false;
    $scope.showstep1_1 = false;
    $scope.showstep1_2 = false;
    $scope.showstep1_3 = false;
    $scope.showstep1_4 = false;
    $scope.showstep1_5 = false;
    $scope.showstep1_6 = false;

    $scope.next31 = false;

    $scope.next1_1 = function () {
      $scope.showstep1 = false;
      $scope.next12 = true;
      switch ($scope.option.step1) {
        case "option1":
          $scope.showstep1_1 = true;
          break;
        case "option2":
          $scope.showstep1_2 = true;
          break;
        case "option3":
          $scope.showstep1_3 = true;
          break;
        case "option4":
          $scope.showstep1_4 = true;
          break;
        case "option5":
          $scope.showstep1_5 = true;
          break;
        case "option6":
          $scope.showstep1_6 = true;
          break;
      }
      ;
    };

    $scope.back1 = function () {
      $scope.showstep1 = true;
      $scope.next12 = false;
      $scope.showstep1_1 = false;
      $scope.showstep1_2 = false;
      $scope.showstep1_3 = false;
      $scope.showstep1_4 = false;
      $scope.showstep1_5 = false;
      $scope.showstep1_6 = false;
    }
    $scope.next1_2 = function () {
      $('#campaign-icon').css('color','#45E252');
      $scope.next12 = false;
      $scope.showstep1_1 = false;
      $scope.showstep1_2 = false;
      $scope.showstep1_3 = false;
      $scope.showstep1_4 = false;
      $scope.showstep1_5 = false;
      $scope.showstep1_6 = false;
      $scope.next31 = true;
      $scope.step3 = true;
    }

    $scope.prebook = function () {

    }
  }]);
