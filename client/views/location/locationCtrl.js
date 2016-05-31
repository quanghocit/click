/**
 * Created by HocSoiCa on 5/19/2016.
 */
angular
  .module('app')
  .controller('Location',
    ['$scope', 'Tracking', function ($scope, Tracking) {
      $('.none').addClass("hidden");
      $('.location').removeClass("hidden");
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

        $('#map-view').css("height", $('#area2').height()-30);
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
      L.mapbox.accessToken = 'pk.eyJ1Ijoibmd1eWVuYW5odnUiLCJhIjoiY2lvdGhreDR4MDBiNXR6bTVtNzY5YzA4NyJ9.D4dhAUjiEp9bdVovym4teg';
      var map = L.map('map', {
        minZoom: 5,
        maxZoom: 18
      });

      L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      }).addTo(map);

      var customIcon = L.icon({
        iconUrl: '../images/Wifi-2-icon.png',
        iconSize: [32, 32],
      });

      $('a[href="http://leafletjs.com"]').remove();

      map.setView([16.053200, 108.202840], 5);

      var markers = [
        {
          "name":"Tan Son Nhat Airport",
          "city":"Ho Chi Minh",
          "lat":10.818463,
          "lng":106.658825,
          "tz":"Pacific/Ho Chi Minh City"
        },{
          "name":"Hinh Nhu La Coffee",
          "city":"Ho Chi Minh",
          "lat":10.773088,
          "lng":106.683769,
          "tz":"Pacific/Ho Chi Minh City"
        },{
          "name":"Sai Gon Railway",
          "city":"Ho Chi Minh",
          "lat":10.782440,
          "lng":106.677175,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Kinh Te TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.757456,
          "lng":106.635468,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Cong Nghiep TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.757709,
          "lng":106.652977,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Cong Nghiep TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.761545,
          "lng":106.626713,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Cong Nghiep TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.754800,
          "lng":106.630275,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Cong Nghiep TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.390355,
          "lng":107.097902,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Cong Nghiep TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.409097,
          "lng":107.135668,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Dai Hoc Cong Nghiep TP.HCM",
          "city":"Ho Chi Minh",
          "lat":10.997437,
          "lng":106.649094,
          "tz":"America/Ho Chi Minh City"
        },{
          "name":"Da Nang Airport",
          "city":"Da Nang",
          "lat":16.053200,
          "lng":108.202840,
          "tz":"America/Da Nang City"
        },{
          "name":"Da Nang Railway",
          "city":"Da Nang",
          "lat":16.071582,
          "lng":108.209343,
          "tz":"America/Da Nang City"
        }
      ];

      var markerClusters = L.markerClusterGroup({maxClusterRadius: 30});

      for(var i=0;i<markers.length;i++)
      {
        var content = '<span style="font-size: 14px; color: darkred">' + markers[i].name + '</span><br><span style="font-weight: bold; font-size: 13px; color: #0072c6">'
          + markers[i].city
          + '</span><br><span style="font-size: 13px; font-style: italic; color: #1a1a1a">'
          + markers[i].tz + '</span>';

        var m = L.marker([markers[i].lat, markers[i].lng], {icon: customIcon}).bindPopup(content);

        markerClusters.addLayer(m);
      }

      map.addLayer(markerClusters);

      $scope.showMapAll = function () {
        map.setView([16.053200, 108.202840], 5);
      };
  }]);
