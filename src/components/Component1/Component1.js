import React from "react"
import { Search } from "react-bootstrap-icons"
import Clock from "../Clock/Clock"
import Image from "../Images/Images"
import Forecast from "../Forecast/Forecast"

const Weather = () => {
  return (
    <div className="container text-center py-5">
      <div class="form-group">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search for Location"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-primary" type="button" id="button-addon2">
            <Search />
          </button>
        </div>
      </div>
      <h4 className="text-primary">Location, State</h4>

      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-sm-12">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="sunny.png"
            alt="sunny"
          />
        </div>
        <div className="col-lg-4 col-sm-12">
          <h1 style={{ fontSize: "100px" }}>38 &#8451;</h1>
        </div>
        <div className="col-lg-4 col-sm-12">
          <Clock />
        </div>

        <Forecast />
      </div>
    </div>
  )
}

export default Weather
