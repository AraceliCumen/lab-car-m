function initMap() {
    var uluru = {lat: -12.0603081, lng: -77.0415133};
    var map = new google.maps.Map(document.getElementById('mapmobile'), {
      zoom: 12,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }