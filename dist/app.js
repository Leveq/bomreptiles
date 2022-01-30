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


const clientID = "dkyrXJynUfWaj5j865oo32ssiyb1mahmg7Z65UA2C_0"
const endpoint = `https://api.unsplash.com/photos/random?query=reptiles&client_id=${clientID}`

const heroImg = document.querySelector('#hero')



fetch(endpoint)
  .then((respone) => {
    return respone.json();
  })
  .then((jsonData) => {
    heroImg.src = jsonData.urls.regular;
    console.log(heroImg.src);
  })