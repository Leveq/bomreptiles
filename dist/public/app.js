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


const clientID = "fF-9ZKA7KuFIpaxfWv-zGRq_VgnY98Lq0jSL--o3V0M";
const endpoint = `https://api.unsplash.com/photos/random?query=reptiles&client_id=${clientID}`;
const heroImg = document.querySelector('#hero');


// hero unsplash api 
fetch(endpoint)
  .then((respone) => {
    return respone.json();
  })
  .then((jsonData) => {
    heroImg.src = jsonData.urls.regular;
  });

// flip card function
const card = document.querySelectorAll("#card-d, #card-e");
  card.forEach(card => {
    card.addEventListener('click', (e) =>{
      card.classList.toggle('flipCard')
    })
  });









