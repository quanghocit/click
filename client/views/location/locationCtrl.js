/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('Location',
    ['$scope', 'Tracking', function ($scope, Tracking) {
      $(document).ready(function() {
        getweather_HCM();
        getweather_HN();
        getweather_DN();
        getweather_NT();
        getweather_CT();

        setInterval(getweather_HCM,600000);
        setInterval(getweather_HN,600000);
        setInterval(getweather_DN,600000);
        setInterval(getweather_NT,600000);
        setInterval(getweather_CT,600000);

        $("#map_view").height(window.innerHeight);
      });

      function getweather_HCM() {
        $.simpleWeather({
          woeid: '1252431',
          success: function(weather) {
            htmldate = '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px">'+ weather.forecast[0].date+'</div>';
            htmldate+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px">'+ weather.forecast[1].date+'</div>';
            htmldate+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px">'+ weather.forecast[2].date+'</div>';
            htmldate+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px">'+ weather.forecast[3].date+'</div>';
            htmldate+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;margin-right:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px">'+ weather.forecast[4].date+'</div>';

            htmlhcm = '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[0].code+'"></div></div>';
            htmlhcm+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[1].code+'"></div></div>';
            htmlhcm+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[2].code+'"></div></div>';
            htmlhcm+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[3].code+'"></div></div>';
            htmlhcm+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[4].code+'"></div></div>';

            $("#hochiminh_weather").html(htmlhcm);
            $("#date").html(htmldate);
          },
          error: function(error) {
            $("#date").html('<p style="text-align:center;color:#FF0000">Sorry. Weather app is error. Please turn back later</p>');
          }
        });
      }

      function getweather_HN() {
        $.simpleWeather({
          woeid: '91888417',
          success: function(weather) {

            htmlhn = '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[0].code+'"></div></div>';
            htmlhn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[1].code+'"></div></div>';
            htmlhn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[2].code+'"></div></div>';
            htmlhn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[3].code+'"></div></div>';
            htmlhn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[4].code+'"></div></div>';

            $("#hanoi_weather").html(htmlhn);
          },
          error: function(error) {
            $("#date").html('<p style="text-align:center;color:#FF0000">Sorry. Weather app is error. Please turn back later</p>');
          }
        });
      }

      function getweather_DN() {
        $.simpleWeather({
          woeid: '1252376',
          success: function(weather) {
            htmldn = '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[0].code+'"></div></div>';
            htmldn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[1].code+'"></div></div>';
            htmldn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[2].code+'"></div></div>';
            htmldn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[3].code+'"></div></div>';
            htmldn+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[4].code+'"></div></div>';

            $("#danang_weather").html(htmldn);
          },
          error: function(error) {
            $("#date").html('<p style="text-align:center;color:#FF0000">Sorry. Weather app is error. Please turn back later</p>');
          }
        });
      }

      function getweather_NT() {
        $.simpleWeather({
          woeid: '91883001',
          success: function(weather) {
            htmlnt = '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[0].code+'"></div></div>';
            htmlnt+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[1].code+'"></div></div>';
            htmlnt+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[2].code+'"></div></div>';
            htmlnt+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[3].code+'"></div></div>';
            htmlnt+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[4].code+'"></div></div>';

            $("#nhatrang_weather").html(htmlnt);
          },
          error: function(error) {
            $("#date").html('<p style="text-align:center;color:#FF0000">Sorry. Weather app is error. Please turn back later</p>');
          }
        });
      }

      function getweather_CT() {
        $.simpleWeather({
          woeid: '1252351',
          success: function(weather) {
            htmlct = '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[0].code+'"></div></div>';
            htmlct+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[1].code+'"></div></div>';
            htmlct+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[2].code+'"></div></div>';
            htmlct+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[3].code+'"></div></div>';
            htmlct+= '<div style="background-color:#F1F1F1;float:left;width:12%;margin-left:1%;text-align:center;color:#000000;font-weight:bold;font-size:12px;height:30px;line-height:30px"><div class="icon-'+weather.forecast[4].code+'"></div></div>';

            $("#cantho_weather").html(htmlct);
          },
          error: function(error) {
            $("#date").html('<p style="text-align:center;color:#FF0000">Sorry. Weather app is error. Please turn back later</p>');
          }
        });
      }


      //////////////////////////////////////////////////Maps////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var map = L.map('map').setView([14.7828, 106.677], 6);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([14.7828, 106.677]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      $scope.showMapAll = function () {
        map.setView([14.7828, 106.677], 6);
      };
  }]);
