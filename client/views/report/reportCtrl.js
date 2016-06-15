/**
 * Created by HocSoiCa on 5/23/2016.
 */
angular
  .module('app')
  .controller('Report', ['$scope', 'Tracking', function ($scope, Tracking) {
    $('.none').addClass("hidden");
    $('.report').removeClass("hidden");

    $('#perfo').css('font-weight', 'bold');
    $('#perfo i').css('color', '#F0AD4E');
    $scope.showPerformance = true;
    $scope.showPlacement = false;
    $scope.showAudience = false;

    $scope.tab1 = function () {
      $('#perfo').css('font-weight', 'bold');
      $('#place').css('font-weight', 'normal');
      $('#audience').css('font-weight', 'normal');
      $('#audience i').css('color', '#ffffff');
      $('#perfo i').css('color', '#F0AD4E');
      $('#place i').css('color', '#ffffff');
      $scope.showPerformance = true;
      $scope.showPlacement = false;
      $scope.showAudience = false;
    };
    $scope.tab2 = function () {
      $('#perfo').css('font-weight', 'normal');
      $('#place').css('font-weight', 'bold');
      $('#audience').css('font-weight', 'normal');
      $('#audience i').css('color', '#ffffff');
      $('#place i').css('color', '#F0AD4E');
      $('#perfo i').css('color', '#ffffff');
      $scope.showPerformance = false;
      $scope.showPlacement = true;
      $scope.showAudience = false;
    };

    $scope.tab3 = function () {
      $('#audience').css('font-weight', 'bold');
      $('#audience i').css('color', '#F0AD4E');
      $('#perfo').css('font-weight', 'normal');
      $('#place').css('font-weight', 'normal');
      $('#place i').css('color', '#ffffff');
      $('#perfo i').css('color', '#ffffff');
      $scope.showPerformance = false;
      $scope.showPlacement = false;
      $scope.showAudience = true;
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

    //Grid
    var colHeight = $('.mainReport').height();
    $("#grid").css('height', colHeight - $('.h250').height() - 90);
    $('.colReport').css('height', colHeight - 50);
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

    var chartColors = {
      'chart.general': ['#578ED2', '#D25696', '#FDBB47', '#87C07E', '#964C97'],
      'default': ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']
    };

    var chartOptions = {
      chart: {
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
      },
      exporting: {enabled: true},
      credits: {enabled: false},
      title: {
        align: 'center',
        verticalAlign: 'top',
        style: {
          fontWeight: 'bold',
          fontSize: '14px'
        },
        floating: true
      },
      colors: chartColors['default'],
      plotOptions: {
        pie: {
          size: '70%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          center: ['25%', '50%'],
          showInLegend: true
        }
      },
      tooltip: {
        formatter: function () {
          var header = '<span style="font-size: 14px;">' + this.key + '</span><br><br>';
          var content = "<table>" +
            "<tr><td style='padding:0; color: gray'>Total: </td><td style='padding:0; color: gray'><b>&nbsp;" + this.point.total + "</b></td></tr>";

          content += '<tr><td style="color:' + this.point.color + ';padding:0">' + this.point.name + ': </td><td style="padding:0"><b>&nbsp;' + this.point.y + ' ~ ' + this.point.percentage.toFixed(0) + '%</b></td></tr>';
          return header + content + '</table>';
        },
        shared: true,
        useHTML: true
      },
      legend: {
        enabled: true,
        floating: true,
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        symbolRadius: 6,
        symbolHeight: 12,
        symbolWidth: 12,
        y: 50,
        x: 0,
        itemMarginTop: 5,
        itemStyle: {
          fontSize: '9px',
          fontWeight: 'bold'
        },
        labelFormatter: function () {
          return this.name;
        }
      }
    };

    function genderChart() {
      var preparedChartData = [];
      preparedChartData.push({name: 'Male', y: 100}, {name: 'Female', y: 110}
      );
      console.log(chartOptions);
      chartOptions.chart.renderTo = 'gender_chart';
      chartOptions.title.text = 'Gender';
      chartOptions.series = [{type: "pie", name: "Gender", data: preparedChartData, startAngle: 0, innerSize: '50%'}];
      chartInstance = new Highcharts.Chart(chartOptions);
    }

    function ageChart() {
      var preparedChartData = [];
      preparedChartData.push(
        {name: '<18', y: 100},
        {name: '18-24', y: 200},
        {name: '25-34', y: 300},
        {name: '35-44', y: 400},
        {name: '>45', y: 500}
      );
      console.log(chartOptions);
      chartOptions.chart.renderTo = 'age_chart';
      chartOptions.title.text = 'Ages';
      chartOptions.series = [{type: "pie", name: "Age", data: preparedChartData, startAngle: 0, innerSize: '50%'}];
      chartInstance = new Highcharts.Chart(chartOptions);
    }

    genderChart();
    ageChart();


  }]);
