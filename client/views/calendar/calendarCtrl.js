/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('Calendar', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.calendar').removeClass("hidden");



    $scope.divRegister = false;
    $scope.showRegister = function (){
      $scope.divRegister = true;
    };
    $scope.hideRegister = function (){
      $scope.divRegister = false;
    }

    $scope.gridCampaign = {
      rowHeight: 35,
      enableGridMenu: true,
      fastWatch: true
    };

    $scope.gridCampaign.columnDefs = [
      { name: 'ID', field: 'id', headerCellClass: 'colorHeader', pinnedLeft: true},
      { name: 'Hotspot Name', field: 'hotspotName', headerCellClass: 'colorHeader'},
      { name: 'Location', field: 'location', headerCellClass: 'colorHeader'},
      { name: 'Access Point', field: 'accessPoint', headerCellClass: 'colorHeader'},
      { name: 'Monthly Reach', field: 'reach', headerCellClass: 'colorHeader'},
      { name: 'Monthly Click', field: 'click', headerCellClass: 'colorHeader'},
      { name: 'CTR', field: 'ctr', headerCellClass: 'colorHeader'},
      { name: 'Vendor', field: 'vendor', headerCellClass: 'colorHeader'}
    ];

    $scope.gridCampaign.data = [
      {
        "id": "02141235",
        "hotspotName": "Hotspot_Name_001",
        "location": "Công Viên 23/09",
        "accessPoint": "12",
        "reach": "15000",
        "click": "1500",
        "ctr": "10",
        "vendor": "Vendor_Name",
      },
      {
        "id": "02141235",
        "hotspotName": "Hotspot_Name_001",
        "location": "Công Viên 23/09",
        "accessPoint": "12",
        "reach": "15000",
        "click": "1500",
        "ctr": "10",
        "vendor": "Vendor_Name",
      },
      {
        "id": "02141235",
        "hotspotName": "Hotspot_Name_001",
        "location": "Công Viên 23/09",
        "accessPoint": "12",
        "reach": "15000",
        "click": "1500",
        "ctr": "10",
        "vendor": "Vendor_Name",
      },
      {
        "id": "02141235",
        "hotspotName": "Hotspot_Name_001",
        "location": "Công Viên 23/09",
        "accessPoint": "12",
        "reach": "15000",
        "click": "1500",
        "ctr": "10",
        "vendor": "Vendor_Name",
      }
    ];
    var colHeight = $('.mainHotspot').height();
    $("#gridHeight").css('height', colHeight - 70);
  }]);
