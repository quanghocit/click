/**
 * Created by HocSoiCa on 5/23/2016.
 */
angular
  .module('app')
  .controller('Report', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.report').removeClass("hidden");

    $('#perfo').css('font-weight', 'bold');
    $scope.showPerformance = true;
    $scope.showPlacement = false;

    $scope.tab1 = function () {
      $('#perfo').css('font-weight', 'bold');
      $('#place').css('font-weight', 'normal');
      $('#perfo i').css('color','#F0AD4E');
      $('#place i').css('color','#ffffff');
      $scope.showPerformance = true;
      $scope.showPlacement = false;
    };
    $scope.tab2 = function () {
      $('#perfo').css('font-weight', 'normal');
      $('#place').css('font-weight', 'bold');
      $('#place i').css('color','#F0AD4E');
      $('#perfo i').css('color','#ffffff');
      $scope.showPerformance = false;
      $scope.showPlacement = true;
    };

    $(function () {
      function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
      }

      cb(moment().subtract(0, 'days'), moment());

      $('#reportrange').daterangepicker({
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'This Week': [moment().startOf('isoweek'), moment().endOf('isoweek')],
          'Last Week': [moment().startOf('isoweek').subtract(7, 'days'), moment().endOf('isoweek').subtract(7, 'days')],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, cb);

      $('#line1').highcharts({
        colors: ['#FFBA00', '#872C8A'],
        credits: {
          enabled: false
        },
        title: {
          text: "",
          floating: true
        },
        tooltip: {
          enable: false
        },
        xAxis: {
          categories: ['May 21', 'May 22', 'May 23', 'May 24', 'May 25']
        },
        yAxis: {
          title: {
            enabled: false
          },
          plotLines: [{
            enabled: false
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0,
        },
        series: [{
          name: 'Clicks',
          data: [100, 120, 110, 130, 150]
        }]
      });
      $('#line2').highcharts({
        colors: ['#872C8A', '#FFBA00'],
        credits: {
          enabled: false
        },
        title: {
          text: "",
          floating: true
        },
        tooltip: {
          enable: false
        },
        xAxis: {
          categories: ['May 21', 'May 22', 'May 23', 'May 24', 'May 25']
        },
        yAxis: {
          title: {
            enabled: false
          },
          plotLines: [{
            enabled: false
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0,
        },
        series: [{
          name: 'Impr',
          data: [2200, 2400, 3000, 2800, 3300]
        }]
      });
    });

    $scope.colors = [{
      name: 'black',
      shade: 'dark'},
      {
        name: 'white',
        shade: 'light'},
      {
        name: 'red',
        shade: 'dark'},
      {
        name: 'blue',
        shade: 'dark'},
      {
        name: 'yellow',
        shade: 'light'}
    ];

    //Grid
    var colHeight = $('.mainReport').height();
    $("#grid").css('height',colHeight - $('.h250').height() - 100);
    $('.colReport').css('height',colHeight - 50);
    var columnDefs = [
      {field: "campaign", headerName: "Campaign Overall", width: 150},
      {field: "delivery", headerName: "Delivery", width: 100},
      {field: "reach", headerName: "Reach", width: 100},
      {field: "click", headerName: "Click", width: 100},
      {field: "ctr", headerName: "CTR", width: 100},
      {field: "kpi", headerName: "% KPI", width: 100},
      {field: "end", headerName: "Ends"}
    ];
    var rowData = [];

    var gridOptions = {
      columnDefs: columnDefs,
      rowData: [{
        campaign: "Yomost CPC",
        "delivery": "Active",
        "reach": "15409",
        "click": "3310",
        "ctr": "22%",
        "kpi": "77%",
        "end": "May 25, 2016"
      }],
      enableSorting: true,
      enableFilter: true
    };

    var eGridDiv = document.querySelector('#grid');
    new agGrid.Grid(eGridDiv, gridOptions);

  }]);
