function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;

                // Mark on the Map
                if (cases>250){
                    color= "rgb(255, 0, 0)";
                }
                else if(cases<20){
                    color = "rgb(10, 255, 10)"
                }
                else{
                    color = `rgb(${cases - 50}, 50, 100)`;
                }

            
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            })
        })
}
let interval = 200000;
setInterval(updateMap(), interval);
// updateMap();