// use proxy server with CORS
const BASE_URL = `http://localhost:3000/weather/`;
// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {

        // const query = `&q=${city}`;
        const res = await fetch(BASE_URL + city);
        const data = await res.json();
        return data;

    } catch (err) {

        console.error(err);

    }
}

// show('New York');
// show('Los Angeles');

export { show };
