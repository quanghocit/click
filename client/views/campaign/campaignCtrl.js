/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('Campaign', ['$scope', 'Location', function ($scope, Location) {
    $('.none').addClass("hidden");
    $('.campaign').removeClass("hidden");

    $scope.campaign = true;
    $scope.valueKPI = 1000;
    $scope.optionKPI = "Clicks";

    //step1
    $scope.showstep1 = true;
    $scope.next12 = false;
    //step2
    $scope.step2 = false;
    $scope.next21 = false;
    //step3
    $scope.step3 = false;
    $scope.next31 = false;

    $scope.showstep1_1 = false;
    $scope.showstep1_2 = false;
    $scope.showstep1_3 = false;
    $scope.showstep1_4 = false;
    $scope.showstep1_5 = false;
    $scope.showstep1_6 = false;

    $scope.next1_1 = function () {
      $scope.showstep1 = false;
      $scope.next12 = true;
      switch ($scope.optionStep1) {
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

    $scope.step3_2 = false;
    $scope.divLocation = false;
    $scope.gender = "All";
    $scope.optionStep1 = "option1";
    $scope.modalClick = function () {
      $scope.divLocation = true;
    };
    $scope.okLocation = function () {
      $scope.divLocation = false;
    };

    $scope.next1_2 = function () {
      $('#campaign-icon').css('color', '#45E252');
      $scope.next12 = false;
      $scope.showstep1_1 = false;
      $scope.showstep1_2 = false;
      $scope.showstep1_3 = false;
      $scope.showstep1_4 = false;
      $scope.showstep1_5 = false;
      $scope.showstep1_6 = false;
      $scope.next21 = true;
      $scope.step2 = true;

    };

    $scope.next2 = function () {
      $('#adset-icon').css('color', '#45E252');
      $scope.next21 = false;
      $scope.step2 = false;
      $scope.step3 = true;
      $scope.next31 = true;
      $scope.show3 = true;
      $scope.show31 = false;
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
    };

    $scope.back2 = function () {
      $scope.next21 = false;
      $scope.step2 = false;
      $scope.next12 = true;
      switch ($scope.optionStep1) {
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
      $('#campaign-icon').css('color', '#ffffff');
    };

    $scope.back3 = function () {
      $('#adset-icon').css('color', '#ffffff');
      $scope.next21 = true;
      $scope.step2 = true;
      $scope.step3 = false;
      $scope.next31 = false;
    };

    $scope.prebook = function () {
      $scope.show3 = false;
      $scope.show31 = true;
      $scope.preview = true;
      $scope.step3 = false;
    };

    $scope.editbook = function () {
      $scope.show3 = true;
      $scope.show31 = false;
      $scope.preview = false;
      $scope.step3 = true;
      $scope.next31 = true;
    };

    $scope.placebook = function () {
      $scope.finalstep = false;
      $scope.campaign = false;
      $scope.step3_2 = true;
      $scope.actionprocess = "Processing...";
    }

    $scope.ages = [];
    for (var i = 0; i < 45; i++) {
      $scope.ages.push({id: i + 1, label: i + 1});
    }
    ;
    $scope.times = [];
    for (var i = 0; i < 24; i++) {
      $scope.times.push({id: i + 1, label: i + 1 + ':00'});
    }
    ;
    $scope.agesfrom = $scope.ages[17];
    $scope.agesto = $scope.ages[22];

    var colHeight = $('.mainCampaign').height();
    $('.colCampaign').css('height', colHeight - 50);

    console.log(Location.find());
    $scope.locations = Location.find();

    $scope.city = function () {
      Location.findById({
        id: $scope.modelLocation
      }).$promise
        .then(function (data) {
          $scope.locaOfCity = JSON.parse(data.location).data;
        });
    };
    $scope.ulocaOfCity = [];

    $scope.selectItem = function (loc) {
      console.log("Remove" + loc);
      $scope.locaOfCity.splice($scope.locaOfCity.indexOf(loc), 1);
      $scope.ulocaOfCity.push(loc);
    };
    $scope.unselectItem = function (uloc) {
      console.log("Remove" + uloc);
      $scope.ulocaOfCity.splice($scope.ulocaOfCity.indexOf(uloc), 1);
      $scope.locaOfCity.push(uloc);
    };
    $scope.changeSearch = function () {
      console.log($scope.locaOfCity);
      console.log($scope.searchLocation);

      var result = _.filter($scope.locaOfCity, function(key) {
        return key.startsWith($scope.searchLocation);
      })

      console.log(result);
    };

  }]);
