// import "./Wind.css"
import { useEffect, useState } from 'react'

function Wind(wind) {
//     const [forecast, setForecast] = useState("")
//     useEffect(() => {
//         fetch(' https://api.weather.gov/points/40.5891,-73.8010')
//             .then(res => res.json())
//             .then(data => setForecast(data.properties.forecast))
//     }, [])
// //these fetches need to be hoisted. There is data here that is pertinent to both temp.jsx 
// //and the as of yet not created Weather.jsx component. 
//     const [wind, setWind] = useState(null)
//     useEffect(() => {
//         fetch(forecast)
//             .then(res => res.json())
//             .then(data => console.log(data))
//     }, [forecast])
//                 // setWind(data.properties.periods[0]))
    // }, [forecast])

    return (
        <>
            <div className='text-center flex-1'>
                Wind Component
                <p className='border-1'>Render Wind Speed: <b>{wind?.windSpeed}</b></p>
                <p className='border-2'>Render Onshore?: </p>
                <p className='border-1'>Render Compass Direction: <b>{wind?.windDirection}</b></p>
                {/* <p className='border-2'>Render Silly Little Arrow Guy:</p> */}
            </div>
        </>
    )
}

export default Wind