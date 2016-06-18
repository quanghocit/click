angular
.module('app')
.controller('ManagementTrends', ['$scope', '$rootScope', function($scope, $rootScope) {
  $('.none').addClass("hidden");
  $('.trends').removeClass("hidden");

  /**Date Picker **/
  $scope.dates = {
    startDate: moment().subtract(7, 'days'),
    endDate: moment()
  };

  $scope.ranges = {
    'Today': [moment(), moment()],
    'One Week': [moment().subtract(7, 'd'), moment()],
    'Two Weeks': [moment().subtract(14, 'd'), moment()],
    'This Month': [moment().startOf('month'), moment()],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'Last Two Months': [moment().subtract(1, 'month').startOf('month'), moment()],
    'Last Three Months': [moment().subtract(2, 'month').startOf('month'), moment()]
  };

  $scope.ChangeTime = function() {
    console.log(moment($scope.dates.startDate).format("MMM DD YYYY") + '-' + moment($scope.dates.endDate).format("MMM DD YYYY"));
  }

  /*Grid*/
  $scope.gridOptions = {
    rowHeight: 35,
    enableGridMenu: true,
    fastWatch: true
  };

  $scope.gridOptions.columnDefs = [
    { name: 'ID', field: 'id', headerCellClass: 'colorHeader', pinnedLeft: true, width: 100},
    { name: 'Trends', field: 'trends', headerCellClass: 'colorHeader', width: 200},
    { name: 'Description', field: 'description', headerCellClass: 'colorHeader', width: 200},
    { name: 'Location', field: 'location', headerCellClass: 'colorHeader', width: 150},
    { name: 'City', field: 'city', headerCellClass: 'colorHeader', width: 150},
    { name: 'Date', field: 'date', headerCellClass: 'colorHeader', width: 150},
    {
      name: 'Status', field: 'status', headerCellClass: 'colorHeader', pinnedRight: true, width: 100,
      cellTemplate:'<label class="switch" style="margin-top:4%;margin-left:10%" ng-if="row.entity.status == 1"><input type="checkbox" checked><div class="slider round"></div></label>' +
      '<label class="switch" style="margin-top:4%;margin-left:10%" ng-if="row.entity.status == 0"><input type="checkbox"><div class="slider round"></div></label>'
    }
  ];

  $scope.gridOptions.data = [
    {
      "id": "00101",
      "trends": "Color Me Run",
      "description": "155, Sư Vạn Hạnh",
      "location": "University",
      "city": "HCM",
      "date": "10",
      "status": 1
    },
    {
      "id": "00102",
      "trends": "Color Me Run",
      "description": "155, Sư Vạn Hạnh",
      "location": "University",
      "city": "HCM",
      "date": "10",
      "status": 1
    },
    {
      "id": "00103",
      "trends": "Color Me Run",
      "description": "155, Sư Vạn Hạnh",
      "location": "University",
      "city": "HCM",
      "date": "10",
      "status": 0
    },
    {
      "id": "00104",
      "trends": "Color Me Run",
      "description": "155, Sư Vạn Hạnh",
      "location": "University",
      "city": "HCM",
      "date": "10",
      "status": 0
    }
  ];
}]);
