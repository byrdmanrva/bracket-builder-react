import React from "react";

    // var userLat;
    // var userLng;
    // var userZip;
    // var compZip;

    // var zipCollect = function(event) {
    // event.preventDefault();
    // userZip = $("#zip").val().trim()

    // var geocoded = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userZip + "&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc"
    // $.getJSON(geocoded, function(result){
    //     userLat = result.results[0].geometry.location.lat
    //     userLng = result.results[0].geometry.location.lng
    //     console.log(geocoded);
    // map.setCenter({lat: userLat, lng: userLng});
    // var place = new google.maps.LatLng(userLat,userLng);
    // var request = {
    //     query: "jiu jitsu gym",
    //     location: place,
    //     radius: "5000",
    // };

    // service = new google.maps.places.PlacesService(map);

    // service.textSearch(request, function(results, status) {
    //     if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         for (var i = 0; i < results.length; i++) {
    //         createMarker(results[i]);
    //     }

    //     }
    // });

function Maps() {
    return (
    <div>
        <p>Map here</p>
        <p>Zipcode search</p>
    </div>
    );
}

export default Maps;