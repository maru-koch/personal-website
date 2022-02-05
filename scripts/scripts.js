function socialMedia(id, image){
    const whatsappImg = document.getElementById(`${id}`);
    whatsappImg.src = "../icons/"+`${image}`;
}

// function initialize() {
//     alert("page loaded")
//     var mapCanvas = document.getElementById('map');
//     var mapOptions = {
//       center: new google.maps.LatLng(44.5403, -78.5463),
//       zoom: 8,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     var map = new google.maps.Map(mapCanvas, mapOptions)
//   }
//   google.maps.event.addDomListener(window, 'load', initialize);
