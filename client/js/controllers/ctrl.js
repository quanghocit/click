angular
  .module('app')
  .controller('main', ['$scope', function ($scope) {
    $scope.currentuser = "Current User";
  }])
  .controller('HomeCtrl', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('li.active').removeClass("active");
    $('.home').addClass("active");
    $('.search-display').css('display','none');

    $('#Age').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Age Of Campaign'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y} - {point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Age',
        colorByPoint: true,
        data: [{
          name: 'Under 18',
          y: 500
        }, {
          name: 'From 18 to 24',
          y: 400,
        }, {
          name: 'From 25 to 34',
          y: 300
        }, {
          name: 'From 35 to 44',
          y: 200
        }, {
          name: 'Over 45',
          y: 100
        }]
      }]
    });
    $('#Gender').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Gender Of Campaign'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Gender',
        colorByPoint: true,
        data: [{
          name: 'Male',
          y: 8000
        }, {
          name: 'Female',
          y: 7000,
        }]
      }]
    });
    $('#Income').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Income Of Campaign'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y} - {point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Age',
        colorByPoint: true,
        data: [{
          name: 'Under 300$',
          y: 500
        }, {
          name: 'From 300$ to 600$',
          y: 400,
        }, {
          name: 'From 600$ to 1200$',
          y: 300
        }, {
          name: 'From 1200% to 44',
          y: 200
        }, {
          name: 'Over 45',
          y: 100
        }]
      }]
    });
  }])
  .controller('Report', ['$scope', 'Tracking', '$state', function ($scope, Tracking, $state) {
    $scope.time = {
      from: moment().subtract(14, 'd').format("YYYY-MM-DD HH:mm:ss"),
      to: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    $scope.selectedTimeText = moment($scope.time.from).format("MMM DD YYYY") + " - " + moment($scope.time.to).format("MMM DD YYYY");
    $('#daterangepicker').daterangepicker(
      {
        ranges: {
          'Today': [moment(), moment()],
          'One Week': [moment().subtract(7, 'd'), moment()],
          'Two Weeks': [moment().subtract(14, 'd'), moment()],
          'This Month': [moment().startOf('month'), moment()],
          'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')],
          'Last Two Months': [moment().subtract('month', 1).startOf('month'), moment()],
          'Last Three Months': [moment().subtract('month', 2).startOf('month'), moment()]
        },
        startDate: moment().subtract(14, 'd'),
        endDate: moment()
      },

      function (start, end) {
        $scope.time.from = start.startOf('day').format("YYYY-MM-DD HH:mm:ss");
        $scope.time.to = end.endOf('day').format("YYYY-MM-DD HH:mm:ss");
        $scope.selectedTimeText = moment($scope.time.from).format("MMM DD YYYY") + " - " + moment($scope.time.to).format("MMM DD YYYY");
      }
    );

    $scope.Search = '';

    $('.search-display').css('display','block');
    $('li.active').removeClass("active");
    $('.report').addClass("active");

    setInterval(function () {
      $('#myGrid').css('height', $(window).height() - 70);
      if ($scope.Search.length >= 1) {
        console.log($scope.Search);
      }
    }, 100);

    var columnDefs = [
      {field: "mac", headerName: "Mac"},
      {field: "name", headerName: "Name"},
      {field: "device", headerName: "Device"},
      {field: "os", headerName: "OS"},
      {field: "email", headerName: "Email"},
      {field: "phone", headerName: "Phone"},
      {field: "gender", headerName: "Gender"},
      {field: "banner_id", headerName: "Banner"},
      {field: "site", headerName: "Site"},
      {field: "created_at", headerName: "Last Seen"}
    ];
    var rowData = [];
    $scope.onFilterChanged = function (value) {
      console.log(value);
    };

    Tracking.find().$promise.then(function (data) {
      rowData = data;

      var gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        enableSorting: true,
        enableFilter: true
      };

      var eGridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(eGridDiv, gridOptions);
    });
  }])
  .controller('DeleteReviewController', ['$scope', 'Tracking', '$state',
    '$stateParams', function ($scope, Tracking, $state, $stateParams) {
      Tracking
        .deleteById({id: $stateParams.id})
        .$promise
        .then(function () {
          $state.go('all-person');
        });
    }])
  .controller('EditReviewController', ['$scope', '$q', 'Tracking', '$stateParams', '$state',
    function ($scope, $q, Tracking, $stateParams, $state) {
      $scope.action = 'Edit';

      Tracking
        .findById({id: $stateParams.id})
        .$promise
        .then(function (data) {
          $scope.person = data;
        });

      $scope.submitForm = function () {
        $scope.person
          .$save()
          .then(function (person) {
            $state.go('all-person');
          });
      };
    }]);
