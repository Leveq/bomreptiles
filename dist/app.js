function initMap() {
  // The location of Uluru
  const uluru = { lat: 29.163462624834157, lng: -95.42474040316289 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

