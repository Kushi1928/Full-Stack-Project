const router = require("express").Router();
const axios = require("axios");

// WEATHER WITH API KEY
router.get("/weather", async (req,res)=>{
 try{

   const city = req.query.city || "Hyderabad";

   const url =
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`;

   const response = await axios.get(url);

   res.json({
     city: response.data.name,
     temperature: response.data.main.temp,
     humidity: response.data.main.humidity,
     description: response.data.weather[0].description
   });

 }catch(err){
   res.status(500).json({error:"Weather fetch failed"});
 }
});

module.exports = router;
