import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

// CORS - Cross Origin Resource Sharing
import cors from 'cors';

const app = express();
app.use(cors());

const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`;

/* routes */
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