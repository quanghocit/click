/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('News', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.news').removeClass("hidden");

    $scope.gridReport = {
      rowHeight: 35,
      enableGridMenu: true,
      fastWatch: true
    };

    $scope.gridReport.columnDefs = [
      { name: 'Campaign', field: 'campaign', headerCellClass: 'colorHeader', pinnedLeft: true},
      { name: 'Client', field: 'client', headerCellClass: 'colorHeader'},
      { name: 'Advertiser', field: 'advertiser', headerCellClass: 'colorHeader'},
      { name: 'Type', field: 'type', headerCellClass: 'colorHeader'},
      { name: 'Location', field: 'location', headerCellClass: 'colorHeader'},
      { name: 'Schedule', field: 'schedule', headerCellClass: 'colorHeader'},
      { name: 'Performance', field: 'performance', headerCellClass: 'colorHeader'},
      { name: 'Action', field: 'action', headerCellClass: 'colorHeader'},
    ];

    $scope.gridReport.data = [
      {
        "campaign": "Yomost Summer",
        "client": "FCV",
        "advertiser": "Mindshare",
        "type": "CPC",
        "location": "Universities, Hồ Chí Minh",
        "schedule": "03/06/2016 - 10/06/2016",
        "performance": "20% KPI",
        "action": "Approved"
      },
      {
        "campaign": "Yomost Summer",
        "client": "FCV",
        "advertiser": "Mindshare",
        "type": "CPC",
        "location": "Universities, Hồ Chí Minh",
        "schedule": "03/06/2016 - 10/06/2016",
        "performance": "20% KPI",
        "action": "Approved"
      },
      {
        "campaign": "Yomost Summer",
        "client": "FCV",
        "advertiser": "Mindshare",
        "type": "CPC",
        "location": "Universities, Hồ Chí Minh",
        "schedule": "03/06/2016 - 10/06/2016",
        "performance": "20% KPI",
        "action": "Approved"
      },
      {
        "campaign": "Yomost Summer",
        "client": "FCV",
        "advertiser": "Mindshare",
        "type": "CPC",
        "location": "Universities, Hồ Chí Minh",
        "schedule": "03/06/2016 - 10/06/2016",
        "performance": "20% KPI",
        "action": "Approved"
      }
    ];
    var colHeight = $('.mainHotspot').height();
    $("#gridHeight").css('height', colHeight - 70);
  }]);
