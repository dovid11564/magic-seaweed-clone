// import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react'
import Header from './pages/header/Header'
import Body from './Body'
// import './App.css'

function App() {

  const [forecast, setForecast] = useState("")
  useEffect(() => {
    fetch('https://api.weather.gov/points/40.5891,-73.8010')
      .then(res => res.json())
      .then(data => setForecast(data.properties.forecast))
  }, [])
  //these fetches need to be hoisted. There is data here that is pertinent to both temp.jsx 
  //and the as of yet not created Weather.jsx component. 
  const [wind, setWind] = useState(null)
  const [temp, setTemp] = useState(null)
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    fetch(forecast)
      .then(res => res.json())
      .then(data => {
        console.log(data.properties.periods[0])
        setWind(data.properties.periods[0])
        setTemp(data.properties.periods[0])
        setWeather(data.properties.periods[0])
      })
  }, [forecast])

  return (
    <div>
      <Header
        weather={weather}
      />
      <Body
        wind={wind ?? 'Loading...'}
        temp={temp}
      />
    </div>
  )
}

export default App
