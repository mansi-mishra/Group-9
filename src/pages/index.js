import React from "react"
import Forecast from "../components/30dayforecast/30dayforecast"
import Weather from "../components/Component1/Component1"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"

const Index = () => {
  return (
    <Layout>
      <Weather />
      <Forecast />
      <Features />
      <Team />
    </Layout>
  )
}

export default Index
