angular
.module('app')
.controller('ManagementHome', ['$scope', function($scope) {
  $('.none').addClass("hidden");
  $('.home').removeClass("hidden");
  $('#blank').css("height", $('#dataerea').height()-32);


/******************************Grid********************************/
/*****************************************************************/
  $scope.gridOptions = {
    rowHeight: 45,
    enableGridMenu: true,
    fastWatch: true
  };

  $scope.gridOptions.columnDefs =  [
    { name:'Title',field: 'title', width:200, pinnedLeft:true, headerCellClass: 'colorHeader'},
    { name:'Message',field: 'message', width:400, headerCellClass: 'colorHeader'},
    { name:'From',field: 'from', width:200, headerCellClass: 'colorHeader'},
    { name:'On',field: 'on', width:200, pinnedRight:true, headerCellClass: 'colorHeader'},
  ];

  $scope.gridOptions.data = [
    {
      "title": "Kpi lorem ...kjsafkdsakjfhadshfkjhadskjhfjadshjfhkjdsahfjhadsjhfkjhdsakjfhkjdsahjfhdsakjhfkjhdsajfhkjdsahf",
      "message": "Check please lorem lorem lorem lorem lorem lorem lorem",
      "from": "AnDy Dang",
      "on": "May, 08, 2016"

    },
    {
      "title": "Api lorem ...kjsafkdsakjfhadshfkjhadskjhfjadshjfhkjdsahfjhadsjhfkjhdsakjfhkjdsahjfhdsakjhfkjhdsajfhkjdsahf",
      "message": "Check please lorem lorem lorem lorem lorem lorem lorem",
      "from": "AnDy Dang",
      "on": "May, 08, 2016"

    }
  ];

/**************************Chart******************************************/
  var chartColors = {
    'chart.general': ['#578ED2', '#D25696', '#FDBB47', '#87C07E', '#964C97'],
    'default': ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']
  };

  var chartInstance = null;

  function DefaultChart(id, namechart, nameseries, preparedChartData) {
    var chartOptions = {
      chart: {
        renderTo: id,
        margin: [0, 0, 0, 0],
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0
      },
      exporting: { enabled: true },
      credits: { enabled: false },
      title: {
        text: namechart,
        align: 'center',
        verticalAlign: 'top',
        style:
        {
          fontWeight: 'bold',
          fontSize: '14px'
        },
        floating: true
      },
      colors: chartColors['chart.general'],
      plotOptions: {
        pie: {
          size: '50%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          center: ['20%', '50%'],
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
        symbolHeight: 8,
        symbolWidth: 8,
        y:50,
        x:0,
        itemMarginTop: 5,
        itemStyle: {
          fontSize: '8px',
          fontWeight: 'bold'
        },
        labelFormatter: function () {
          return this.name;
        }
      },
      series: [{type: "pie", name: nameseries, data: preparedChartData, startAngle: 0, innerSize: '50%'}]
    };

    chartInstance = new Highcharts.Chart(chartOptions);
    new Resize_Chart(id);
  }

  new function CityChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'Ho Chi Minh', y: 100},{name: 'Ha Noi', y: 110},{name: 'Da Nang', y: 30},
      {name: 'Vung Tau', y: 20},{name: 'Nha Trang', y: 30}
    );
    DefaultChart('city_chart', 'City', 'City', preparedChartData);
  }

  new function CategoryChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'CoffeeShops', y: 10},{name: 'Public Areas', y: 10},{name: 'Airports', y: 10},
      {name: 'University', y: 10},{name: 'Shopping Malls', y: 60}
    );
    DefaultChart('category_chart', 'Category', 'Category', preparedChartData);
  }

  new function AdsChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'End', y: 10},{name: 'Running', y: 50},{name: 'Scheduled', y: 40}
    );
    DefaultChart('ads_chart', 'Ads', 'Ads', preparedChartData);
  }

  new function VendorsChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'Swifi', y: 10},{name: 'MGN', y: 10},{name: 'Awing', y: 10},
      {name: 'Amblent', y: 10}
    );
    DefaultChart('vendors_chart', 'Vendors', 'Vendors', preparedChartData);
  }

  new function GenderChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'Male', y: 1000},{name: 'Female', y: 950}
    );
    DefaultChart('gender_chart', 'Gender', 'Gender', preparedChartData);
  }

  new function AgeChart() {
    var preparedChartData = [];
    preparedChartData.push({name: '18-24', y: 100},{name: '25-34', y: 50},
      {name: '35-44', y: 50},{name: '45-54', y: 50},{name: '55+', y: 50}
    );
    DefaultChart('age_chart', 'Age', 'Age', preparedChartData);
  }

  new function DeviceChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'Mobile', y: 100},{name: 'Tablet', y: 50},
      {name: 'Desktop', y: 50}
    );
    DefaultChart('device_chart', 'Device', 'Device', preparedChartData);
  }

  new function OSChart() {
    var preparedChartData = [];
    preparedChartData.push({name: 'IOS', y: 100},{name: 'Android', y: 50},
      {name: 'Others', y: 50}
    );
    DefaultChart('os_chart', 'OS', 'OS', preparedChartData);
  }

  /***********************************Resize Chart*******************************************/
  /*****************************************************************************************/
  function Resize_Chart(id) {
    $('#'+id).resizable({
      resize: function () {
        chartInstance.setSize(($('#'+id).width()), ($('#'+id).height()), true);
      }
    });
  }
}]);
