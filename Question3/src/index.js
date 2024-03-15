const express = require('express');
 const cors = require('cors');
 const bodyParser = require('body-parser')

 const app = express();
 app.use(bodyParser.json())

 // Use CORS middleware
 app.use(cors());

 app.listen(4000, () => console.log("Server is running on port 4000"));

// Sample route for testing purposes
app.get('/', async(req, res) => {
    try{
    const cafeUrl = 'https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json'
    const cafe = await fetch(cafeUrl).then((response) => response.json())
    
    const placesUrl = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json"
    const place = await fetch(placesUrl).then((response)=>response.json());
    // console.log(place.places);
    // console.log(cafe.cafes);

    return  res.status(200).send({
        message: "Successfully data retrived",
        place:place.places,
        cafe:cafe.cafes
    })
    }catch(err){
        return res.status(501).send({message:"Service Unavailable"})
    }
});
