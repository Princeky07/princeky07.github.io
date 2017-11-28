// A function for changing a string to TitleCase
function toTitleCase(str) {
  return str.replace(/\w+/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Get the data from the wunderground API
jQuery(document).ready(function($) {
  $.ajax({
    url: "//api.wunderground.com/api/77e496e9205dcce0/geolookup/conditions/forecast/q/UT/Salt_Lake_City.json",
    dataType: "jsonp",
    success: function (data) {
      console.log(data);
      var cityName = data["location"]["city"];
      var cityState = data["location"]["state"];
      var temp_f = data['current_observation']['temp_f'];
      var temp_high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      var temp_low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
      var windMph = data['current_observation']['wind_mph'];
      var windDir = data['current_observation']['wind_dir'];
      var percip = data.forecast.simpleforecast.forecastday[1].pop;
      var summary_w = data['current_observation']['weather'];
      var image = data.current_observation.icon_url;

      console.log(" city: " + cityName + ", temp: " + temp_f + ", temp high: " + temp_high + ", temp low: " + temp_low + ", windmph: " + windMph + ", wind direction: " + windDir + ", percipitation: " + percip + ", summary: " + summary_w );

      console.log(data);

      var orgTitle = document.getElementById("title").innerHTML;
      var newTitle = document.getElementById("title");
      var city = document.getElementById("where");
      var temp = document.getElementById("currentTemp");
      var highlow = document.getElementById("temp");
      var areaMph = document.getElementById("wind");
      var percipers = document.getElementById("precipitation");
      var weatherSum = document.getElementById("summary");

      newTitle.innerHTML = cityName + ", " + cityState + " | " + orgTitle;
      city.innerHTML = cityName + ", " + cityState;
      temp.innerHTML = Math.round(temp_f) + ("&#176") + "F";
      highlow.innerHTML = temp_high + ("&#176") + "F" + " / " + temp_low + ("&#176")+ "F";
      areaMph.innerHTML = "<b> Wind: </b>" + windDir + " " + windMph + " mph";
      percipers.innerHTML = "<b> Precipitation: </b>" + percip + "%";
      weatherSum.innerHTML = "<p id='condition'> <b> <span id = 'image'> <img src = " + image + "></span>" + summary_w + "</b></p>";

      $("#cover").fadeOut(250);
    }
  });
});
