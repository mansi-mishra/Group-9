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
        "X-RapidAPI-Key": "f15e475c41msh72472007bc3b925p198431jsne1f2787ba6ca",
      },
    }

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
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
          className="form-control"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={e => setCity(e.target.value)}
        />

        <label>
          <input
            type="radio"
            className="form-check-input"
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
            className="form-check-input"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={e => setUnit(e.target.value)}
          />
          Celcius
        </label>

        <button type="submit" className="btn btn-primary">
          Get Forecast
        </button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  )
}
export default Forecast
