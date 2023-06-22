import { useEffect, useState } from 'react'

function Wind() {
    const [forecast, setForecast] = useState("")
    useEffect(() => {
        fetch(' https://api.weather.gov/points/40.5891,-73.8010')
            .then(res => res.json())
            .then(data => setForecast(data.properties.forecast))
    }, [])

    const [wind, setWind] = useState(null)
    useEffect(() => {
        fetch(forecast)
            .then(res => res.json())
            .then(data => setWind(data.properties.periods[0]))
    }, [forecast])

    return (
        <>
            <div className='border'>
                Wind Component
                <p className='border-1'>Render Wind Speed: <b>{wind?.windSpeed}</b></p>
                <p className='border-2'>Render Onshore?: </p>
                <p className='border-1'>Render Compass Direction: <b>{wind?.windDirection}</b></p>
                <p className='border-2'>Render Silly Little Arrow Guy:</p>
            </div>
        </>
    )
}

export default Wind