let obj

function toTitleCase(str) {
  return str.replace(/\w+/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function getData(input) {
  // Get the data from the wunderground API
  $.ajax({
    url: "//api.wunderground.com/api/77e496e9205dcce0/geolookup/conditions/forecast/q/" +
      input + ".json",
    dataType: "jsonp",
    success: function (data) {
      var location = data.location.city + ', ' + data.location.state;
      var temp_f = data.current_observation.temp_f;
      var summary_w = data['current_observation']['weather'];
      var image = data.current_observation.icon_url;
      var temp_high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      var temp_low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
      var windMph = data.current_observation.wind_mph;
      var windDir = data.current_observation.wind_dir;
      var percip = data.forecast.simpleforecast.forecastday[1].pop;

      console.log('Location is: ' + location);
      console.log('Temp is: ' + temp_f);
      console.log(data);

      $("#where").text(location);
      $("title").html(location + " | Weather Center");
      $("#currentTemp").html(Math.round(temp_f) + '°');
      $("#summary").html("<p id='condition'> <b> <span id = 'image'> <img src = " + image + "></span>" + summary_w + "</b></p>");
      $("#temp").html(temp_high + ("&#176") + "F" + " / " + temp_low + ("&#176")+ "F");
      $("#wind").html("<b> Wind: </b>" + windDir + " " + windMph + " mph");
      $("#precipitation").html("<b> Precipitation: </b>" + percip + "%");
      $("#cover").fadeOut(250);
    }
  });
}


$('#query').keyup(function () {
  var value = $('#query').val();
  var rExp = new RegExp(value, "i");
  document.getElementById("searchResults").style.display = "inherit";


  $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
    console.log(data);

    // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function (key, val) {

      obj = data;

      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';

    $("#searchResults").html(output); // send results to the page
  }); // end getJSON
}); // end keyup


// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
  evt.preventDefault();

  document.getElementById("searchResults").style.display = "none";

  var jsonCity = $(this).text();

  console.log(jsonCity);

  var index = $(this).index("a");

  console.log(index - 5);

  var zmw = obj.RESULTS[index - 5].zmw;

  getData(zmw);

});
