angular
.module('app')
.controller('ManagementLocation', ['$scope', function($scope) {
  $('.none').addClass("hidden");
  $('.locations').removeClass("hidden");

  $scope.gridOptions = {
    rowHeight: 35,
    enableGridMenu: true,
    fastWatch: true
  };

  $scope.gridOptions.columnDefs = [
    { name: 'ID', field: 'id', headerCellClass: 'colorHeader', pinnedLeft: true, width: 100},
    { name: 'Location', field: 'location', headerCellClass: 'colorHeader', width: 200},
    { name: 'Add', field: 'add', headerCellClass: 'colorHeader', width: 200},
    { name: 'Category', field: 'category', headerCellClass: 'colorHeader', width: 150},
    { name: 'City', field: 'city', headerCellClass: 'colorHeader', width: 150},
    { name: 'No. of AP', field: 'number', headerCellClass: 'colorHeader', width: 150},
    { name: 'Reach', field: 'reach', headerCellClass: 'colorHeader', width: 150},
    { name: 'Click', field: 'click', headerCellClass: 'colorHeader', width: 150},
    { name: 'Vendor', field: 'vendor', headerCellClass: 'colorHeader', width: 150},
    {
      name: 'Status', field: 'status', headerCellClass: 'colorHeader', pinnedRight: true, width: 100,
      cellTemplate:'<label class="switch" style="margin-top:4%;margin-left:10%" ng-if="row.entity.status == 1"><input type="checkbox" checked><div class="slider round"></div></label>' +
      '<label class="switch" style="margin-top:4%;margin-left:10%" ng-if="row.entity.status == 0"><input type="checkbox"><div class="slider round"></div></label>'
    }
  ];

  $scope.gridOptions.data = [
    {
      "id": "00101",
      "location": "ĐH HUFLIT",
      "add": "155, Sư Vạn Hạnh",
      "category": "University",
      "city": "HCM",
      "number": "10",
      "reach": "50000",
      "click": "20000",
      "vendor": "Swifi",
      "status": 1
    },
    {
      "id": "00102",
      "location": "ĐH HUFLIT",
      "add": "155, Sư Vạn Hạnh",
      "category": "University",
      "city": "HCM",
      "number": "10",
      "reach": "50000",
      "click": "20000",
      "vendor": "Swifi",
      "status": 1
    },
    {
      "id": "00103",
      "location": "ĐH HUFLIT",
      "add": "155, Sư Vạn Hạnh",
      "category": "University",
      "city": "HCM",
      "number": "10",
      "reach": "50000",
      "click": "20000",
      "vendor": "Swifi",
      "status": 0
    },
    {
      "id": "00104",
      "location": "ĐH HUFLIT",
      "add": "155, Sư Vạn Hạnh",
      "category": "University",
      "city": "HCM",
      "number": "10",
      "reach": "50000",
      "click": "20000",
      "vendor": "Swifi",
      "status": 0
    }
  ];
}]);
