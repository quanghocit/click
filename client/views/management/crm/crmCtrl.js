/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('ManagementCRM', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.users').removeClass("hidden");

    $scope.gridUser = {
      rowHeight: 35,
      enableGridMenu: false,
      fastWatch: true,
    };

    $scope.gridUser.columnDefs = [
      { name: 'ID', field: 'id', enableColumnMenu: false, headerCellClass: 'colorHeader', pinnedLeft: true},
      { name: ' Name', field: 'name', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' FBid', field: 'fbid', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Email', field: 'email', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Phone', field: 'phone', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Sex', field: 'sex', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Age', field: 'age', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Address', field: 'address', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Device', field: 'device', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Income', field: 'income', enableColumnMenu: false, headerCellClass: 'colorHeader'},
      { name: ' Other', field: 'other', enableColumnMenu: false, headerCellClass: 'colorHeader'},
    ];

    $scope.gridUser.data = [
      {
        "id": "00101",
        "name": "Phuong Nguyen",
        "fbid": "uasd3ky",
        "email": "email@gmail.com",
        "phone": "+84909999999",
        "sex": "M",
        "age": "28",
        "address": "Quan 1, TP.HCM",
        "device": "Phone",
        "income": "$2000",
        "other": "Fashion, Sport"
      },
      {
        "id": "00102",
        "name": "Phuong Nguyen",
        "fbid": "uasd3ky",
        "email": "email@gmail.com",
        "phone": "+84909999999",
        "sex": "M",
        "age": "28",
        "address": "Quan 1, TP.HCM",
        "device": "Phone",
        "income": "$2000",
        "other": "Fashion, Sport"
      },
      {
        "id": "00103",
        "name": "Phuong Nguyen",
        "fbid": "uasd3ky",
        "email": "email@gmail.com",
        "phone": "+84909999999",
        "sex": "M",
        "age": "28",
        "address": "Quan 1, TP.HCM",
        "device": "Phone",
        "income": "$2000",
        "other": "Fashion, Sport"
      }
    ];
    var colHeight = $('.gridHeight').height();
    $("#gridHeight").css('height', colHeight - 70);

  }]);
