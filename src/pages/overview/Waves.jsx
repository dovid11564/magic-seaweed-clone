import { useEffect, useState } from 'react'

function Waves() {

    const [waves, setWaves] = useState(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_WAVES_API}`)
            .then(res => res.json())
            .then(data => setWaves(data))
    }, [])
    console.log(waves)

    function getDirection(angle) {
        if (angle >= 337.5 || angle < 22.5) {
            return "North";
        } else if (angle >= 22.5 && angle < 67.5) {
            return "NE";
        } else if (angle >= 67.5 && angle < 112.5) {
            return "East";
        } else if (angle >= 112.5 && angle < 157.5) {
            return "SE";
        } else if (angle >= 157.5 && angle < 202.5) {
            return "South";
        } else if (angle >= 202.5 && angle < 247.5) {
            return "SW";
        } else if (angle >= 247.5 && angle < 292.5) {
            return "West";
        } else {
            return "NW";
        }
    }
    return (
        <>
            <div className='border'>
                Waves Component
                <p className='border-1'>Render Wave Size: <b>{waves?.hourly.wave_height[0]} </b>feet</p>
                <p className='border-2'>Render Swell Height: <b>{waves?.hourly.swell_wave_height[0]}</b> feet</p>
                <p className='border-1'>Render Swell Period: <b>{waves?.hourly.swell_wave_period[0]}</b> seconds</p>
                <p className='border-2'>Render Swell Direction: <b>{getDirection(waves?.hourly.swell_wave_direction[0])}</b></p>
                <p className='border-1'>Render Wave Compass Direction: <b>{getDirection(waves?.hourly.wave_direction[0])}</b></p>
                <p className='border-2'>Render Star Rating: <b></b></p>
            </div>
        </>
    )
}

export default Waves