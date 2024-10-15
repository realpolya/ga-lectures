import './WeatherDetails.css'

function WeatherDetails({ weatherData }) {
  return (
    <section id='weather-details'>
        <h2>Weather Details</h2>
        <p><span>Location: </span>{weatherData.location}</p>
        <p><span>Temperature: </span>{weatherData.temperature}</p>
        <p><span>Condition: </span>{weatherData.condition}</p>
    </section>
  )
}

export default WeatherDetails