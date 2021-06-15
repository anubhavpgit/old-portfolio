// Initialize and add the map
function initMap() {
  // The location of Uluru
  const patia = { lat:  20.342, lng: 85.822 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: patia,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: patia,
    map: map,
  });
}