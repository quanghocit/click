/**
 * Created by Anh Vu on 24/05/2016.
 */
angular
  .module('app')
  .controller('Hotspots', ['$scope', '$rootScope', function($scope, $rootScope) {
    var chartColors = {
      'chart.general': ['#578ED2', '#D25696', '#FDBB47', '#87C07E', '#964C97'],
      'default': ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']
    };

    var chartInstance = null;

    //City Chart//
    function CiTyChart() {
      var preparedChartData = [];
      preparedChartData.push({name: 'Ho Chi Minh', y: 100},{name: 'Ha Noi', y: 110},{name: 'Da Nang', y: 30},
        {name: 'Vung Tau', y: 20},{name: 'Nha Trang', y: 30}
      );

      var chartOptions = {
        chart: {
          renderTo: 'city_chart',
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: { enabled: true },
        credits: { enabled: false },
        title: {
          text: 'City',
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
          y:50,
          x:0,
          itemMarginTop: 5,
          itemStyle: {
              fontSize: '9px',
              fontWeight: 'bold'
          },
          labelFormatter: function () {
            return this.name;
          }
        },
        series: [{type: "pie", name: "City", data: preparedChartData, startAngle: 0, innerSize: '50%'}]
      };

      chartInstance = new Highcharts.Chart(chartOptions);
    }

    new CiTyChart();

    //Category Chart//
    function CategoryChart() {
      var preparedChartData = [];
      preparedChartData.push({name: 'Coffee Shops', y: 100},{name: 'Public areas', y: 110},{name: 'Airports', y: 30},
        {name: 'Universities', y: 20},{name: 'Shopping Malls', y: 30}
      );

      var chartOptions = {
        chart: {
          renderTo: 'category_chart',
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: { enabled: true },
        credits: { enabled: false },
        title: {
          text: 'Category',
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
          y:50,
          x:0,
          itemMarginTop: 5,
          itemStyle: {
            fontSize: '9px',
            fontWeight: 'bold'
          },
          labelFormatter: function () {
            return this.name;
          }
        },
        series: [{type: "pie", name: "Category", data: preparedChartData, startAngle: 0, innerSize: '50%'}]
      };

      chartInstance = new Highcharts.Chart(chartOptions);
    }

    new CategoryChart();

    //Gender Chart//
    function GenderChart() {
      var preparedChartData = [];
      preparedChartData.push({name: 'Male', y: 100},{name: 'Female', y: 110}
      );

      var chartOptions = {
        chart: {
          renderTo: 'gender_chart',
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: { enabled: true },
        credits: { enabled: false },
        title: {
          text: 'Gender',
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
          y:50,
          x:0,
          itemMarginTop: 5,
          itemStyle: {
            fontSize: '9px',
            fontWeight: 'bold'
          },
          labelFormatter: function () {
            return this.name;
          }
        },
        series: [{type: "pie", name: "Gender", data: preparedChartData, startAngle: 0, innerSize: '50%'}]
      };

      chartInstance = new Highcharts.Chart(chartOptions);
    }

    new GenderChart();

    //Age Chart//
    function AgeChart() {
      var preparedChartData = [];
      preparedChartData.push({name: '18-24', y: 100},{name: '25-34', y: 110},
        {name: '35-44', y: 110},{name: '45-54', y: 110},
        {name: '55+', y: 110}
      );

      var chartOptions = {
        chart: {
          renderTo: 'age_chart',
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: { enabled: true },
        credits: { enabled: false },
        title: {
          text: 'Age',
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
          y:50,
          x:0,
          itemMarginTop: 5,
          itemStyle: {
            fontSize: '9px',
            fontWeight: 'bold'
          },
          labelFormatter: function () {
            return this.name;
          }
        },
        series: [{type: "pie", name: "Age", data: preparedChartData, startAngle: 0, innerSize: '50%'}]
      };

      chartInstance = new Highcharts.Chart(chartOptions);
    }

    new AgeChart();

    //Income Chart//
    function IncomeChart() {
      var preparedChartData = [];
      preparedChartData.push({name: '< $1000', y: 100},{name: '$1000-$2000', y: 110},
        {name: '$2000-$4000', y: 110},{name: '$4000-$10000', y: 110},
        {name: '$10000+', y: 110}
      );

      var chartOptions = {
        chart: {
          renderTo: 'income_chart',
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: { enabled: true },
        credits: { enabled: false },
        title: {
          text: 'Income',
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
          y:50,
          x:0,
          itemMarginTop: 5,
          itemStyle: {
            fontSize: '9px',
            fontWeight: 'bold'
          },
          labelFormatter: function () {
            return this.name;
          }
        },
        series: [{type: "pie", name: "Income", data: preparedChartData, startAngle: 0, innerSize: '50%'}]
      };

      chartInstance = new Highcharts.Chart(chartOptions);
    }

    new IncomeChart();

    //Device Chart//
    function DeviceChart() {
      var preparedChartData = [];
      preparedChartData.push({name: 'Mobile', y: 100},{name: 'Laptop', y: 110},{name: 'Tablet', y: 110}
      );

      var chartOptions = {
        chart: {
          renderTo: 'device_chart',
          margin: [0, 0, 0, 0],
          spacingTop: 0,
          spacingBottom: 0,
          spacingLeft: 0,
          spacingRight: 0
        },
        exporting: { enabled: true },
        credits: { enabled: false },
        title: {
          text: 'Device',
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
          y:50,
          x:0,
          itemMarginTop: 5,
          itemStyle: {
            fontSize: '9px',
            fontWeight: 'bold'
          },
          labelFormatter: function () {
            return this.name;
          }
        },
        series: [{type: "pie", name: "Device", data: preparedChartData, startAngle: 0, innerSize: '50%'}]
      };

      chartInstance = new Highcharts.Chart(chartOptions);
    }

    new DeviceChart();

    $('#city_chart').resizable({
      resize: function () {
        chartInstance.setSize(($('#city_chart').width()), ($('#city_chart').height()), true);
      }
    });

    $('#category_chart').resizable({
      resize: function () {
        chartInstance.setSize(($('#category_chart').width()), ($('#category_chart').height()), true);
      }
    });

    $('#gender_chart').resizable({
      resize: function () {
        chartInstance.setSize(($('#gender_chart').width()), ($('#gender_chart').height()), true);
      }
    });

    $('#age_chart').resizable({
      resize: function () {
        chartInstance.setSize(($('#age_chart').width()), ($('#age_chart').height()), true);
      }
    });

    $('#income_chart').resizable({
      resize: function () {
        chartInstance.setSize(($('#income_chart').width()), ($('#income_chart').height()), true);
      }
    });

    $('#device_chart').resizable({
      resize: function () {
        chartInstance.setSize(($('#device_chart').width()), ($('#device_chart').height()), true);
      }
    });

  }]);
