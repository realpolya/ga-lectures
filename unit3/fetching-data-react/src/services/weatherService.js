const API_KEY = 'defa1f9185e54c1082f175902241510';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {

        const query = `&q=${city}`;
        const res = await fetch(BASE_URL + query);
        const data = await res.json();
        console.log('Data ', data);

    } catch (err) {

        console.error(err);

    }
}

show('New York');
show('Los Angeles');