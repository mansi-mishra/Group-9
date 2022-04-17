import React, { useState } from "react"
import Conditions from "../Conditions/Conditions"

const Forecast = () => {
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)
  let [city, setCity] = useState("")
  let [unit, setUnit] = useState("imperial")
  let [responseObj, setResponseObj] = useState({})
  const uriEncodedCity = encodeURIComponent(city)
  function getForecast(e) {
    e.preventDefault()
    if (city.length === 0) {
      return setError(true)
    }
    setError(false)
    setResponseObj({})

    setLoading(true)

    let uriEncodedCity = encodeURIComponent(city)

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "9dee196e24msh907bd3260bd94efp1e79bajsne05f63216bfd",
      },
    }

    fetch(
      `fetch('https://community-open-weather-map.p.rapidapi.com/climate/month?units=${unit}&q=${uriEncodedCity}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error()
        }
        setResponseObj(response)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        console.log(err.message)
      })
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={e => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={e => setUnit(e.target.value)}
          />
          Celsius
        </label>
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  )
}
export default Forecast
