// Intercept the menu link clicks

//Anvil Page
$("#page-nav").on("mouseup", "#anvils", function (evt) {
  evt.preventDefault();

  $.getJSON("/acme/js/acme.json", function (JSON) {
    var items = [];
    $.each(JSON, function (key, val) {

      if (val.list == 1) {
        $("#page_title").text(val.name);
        $("#home-content").text('');
        $("#product-title").text(val.name);
        $("#image").html("<img src='" + val.path + "' alt='anvil'>");
        $("#description").text(val.description);
        $("#manufacturer").html("<b> Made by: </b>" + val.manufacturer);
        $("#price").html("<b> Price: $" + val.price + "</b>");
        $("#reviews").html("<b> Reviews: </b>" + val.reviews);

        console.log(key);
        console.log(val);
      }
    });
  });
});


//Explosives Page
$("#page-nav").on("mouseup", "#explosives", function (evt) {
  evt.preventDefault();

  $.getJSON("/acme/js/acme.json", function (JSON) {
    var items = [];
    $.each(JSON, function (key, val) {

      if (val.list == 2) {
        $("#page_title").text(val.name);
        $("#home-content").text('');
        $("#product-title").text(val.name);
        $("#image").html("<img src='" + val.path + "' alt='explosives'>");
        $("#description").text(val.description);
        $("#manufacturer").html("<b> Made by: </b>" + val.manufacturer);
        $("#price").html("<b> Price: $" + val.price + "</b>");
        $("#reviews").html("<b> Reviews: </b>" + val.reviews);

        console.log(key);
        console.log(val);
      }

    });
  });
});

//Decoys Page
$("#page-nav").on("mouseup", "#decoys", function (evt) {
  evt.preventDefault();

  $.getJSON("/acme/js/acme.json", function (JSON) {
    var items = [];
    $.each(JSON, function (key, val) {

      if (val.list == 3) {
        $("#page_title").text(val.name);
        $("#home-content").text('');
        $("#product-title").text(val.name);
        $("#image").html("<img src='" + val.path + "' alt='decoys'>");
        $("#description").text(val.description);
        $("#manufacturer").html("<b> Made by: </b>" + val.manufacturer);
        $("#price").html("<b> Price: $" + val.price + "</b>");
        $("#reviews").html("<b> Reviews: </b>" + val.reviews);

        console.log(key);
        console.log(val);
      }

    });
  });
});

//Traps Page
$("#page-nav").on("mouseup", "#traps", function (evt) {
  evt.preventDefault();

  $.getJSON("/acme/js/acme.json", function (JSON) {
    var items = [];
    $.each(JSON, function (key, val) {

      if (val.list == 4) {
        $("#page_title").text(val.name);
        $("#home-content").text('');
        $("#product-title").text(val.name);

        $("#image").html('<img src="' + val.path + '" alt="traps">');
        $("#description").text(val.description);
        $("#manufacturer").html("<b> Made by: </b>" + val.manufacturer);
        $("#price").html("<b> Price: $" + val.price + "</b>");
        $("#reviews").html("<b> Reviews: </b>" + val.reviews);

        console.log(key);
        console.log(val);
      }
    });
  });
});
