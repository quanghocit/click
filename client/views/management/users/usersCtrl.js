angular
.module('app')
.controller('ManagementUsers', ['$scope', function($scope) {
  $('.none').addClass("hidden");
  $('.users').removeClass("hidden");
  $('#add-menu').css("height", $('#grid-area').height()+9);

  /*Grid*/
  $scope.gridOptions = {
    rowHeight: 35,
    enableGridMenu: true,
    fastWatch: true
  };

  $scope.gridOptions.columnDefs = [
    { name: 'ID', field: 'id', headerCellClass: 'colorHeader2', pinnedLeft: true, width: 150},
    { name: 'NAME', field: 'name', headerCellClass: 'colorHeader2', width: 150},
    { name: 'USERNAME', field: 'username', headerCellClass: 'colorHeader2', width: 150},
    { name: 'EMAIL', field: 'email', headerCellClass: 'colorHeader2', width: 250},
    { name: 'PHONE', field: 'phone', headerCellClass: 'colorHeader2', width: 150},
    { name: 'STATUS', field: 'status', headerCellClass: 'colorHeader2', width: 150, pinnedRight: true}
  ];

  $scope.gridOptions.data = [
    {
      "id": "AD001",
      "name": "Admin Name 001",
      "username": "ad_001_16",
      "email": "andy.dang@gmail.com",
      "phone": "0987222222",
      "status": "Active"
    },
    {
      "id": "AD002",
      "name": "Admin Name 001",
      "username": "ad_001_16",
      "email": "andy.dang@gmail.com",
      "phone": "0987222222",
      "status": "Active"
    }
  ];

  $scope.divRegister = false;
  $scope.showRegister = function (){
    $scope.divRegister = true;
  };
  $scope.hideRegister = function (){
    $scope.divRegister = false;
  }

}]);
