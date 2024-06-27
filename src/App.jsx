import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import Button from "react-bootstrap/Button"
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import './App.css'

function App() {
  const [weatherLocation, setWeatherLocation] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  

  const apiKey = 'XJF844Ma2TYqWezzQEjspa0REEK3PoXl';



  const displayWeather = async() => {
    try {
    const response = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${weatherLocation}&apikey=${apiKey}`);
    const weather = response.data.data.values
    console.log(weather)
    setWeatherData(weather);

    } catch (error) {
      console.error('Error fetching weather', error)
    }
  }

  const handleInputChange = (event) => {
    setWeatherLocation(event.target.value)
  }

  return (
    <>
      <div className='container'>
      <h1>Real-Time Weather</h1>
        <div className='square'>
        <div>
          <Card style={{height: '18rem', width: '18rem'}}>
            <Card.Img variant='top' className="img" src='https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <Card.Body>
           <div className='text-Section'>
            <input 
            id='input'
            type="text"
            placeholder='Enter City'
            value={weatherLocation}
            onChange={handleInputChange}
            />
          <Button variant="outline-primary" onClick={displayWeather} >Show Weather</Button>
          <div>
            <ul id='parentList'>
              {weatherData && (
                <><li> Temperature: {weatherData.temperature} Celsius</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.windSpeed} km/h</li>
                </>
              )}
            </ul>
            </div>
          </div>
          </Card.Body>
          </Card>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
