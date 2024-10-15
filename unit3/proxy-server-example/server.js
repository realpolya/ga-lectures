import express from 'express';

const app = express();

const API_KEY = 'defa1f9185e54c1082f175902241510';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    const query = `&q=${city}`;
    const apiRes = await fetch(BASE_URL + query);
    const data = await apiRes.json();
    res.json(data);
})

app.listen(3000, () => {
    console.log("port 3000 active");
})