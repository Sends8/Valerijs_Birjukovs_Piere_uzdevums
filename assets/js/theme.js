
function regular_map() {
    var var_location = new google.maps.LatLng(56.9492777, 24.1015911);

    var var_mapoptions = {
      center: var_location,
      zoom: 15
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
      var_mapoptions);

    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title: "Doma laukums 2, Centra rajons, Rīga"
    });
  }

  google.maps.event.addDomListener(window, 'load', regular_map); 


mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}