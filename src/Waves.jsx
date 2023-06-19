import { useEffect, useState } from 'react'

function Waves() {

const [waves, setWaves] = useState(null)
    useEffect(() => {
        fetch('https://marine-api.open-meteo.com/v1/marine?latitude=40.59&longitude=-73.80&hourly=wave_height&length_unit=imperial&timezone=America%2FNew_York')
        .then(res => res.json())
        .then(data => setWaves(data))
    })

    return (
        <>
            <div className='border'>
                Waves Component
                <p className='border-1'>Render Wave Size: <b>{waves?.hourly.wave_height[0]} </b>feet</p>
                <p className='border-2'>Render Swell:</p>
                <p className='border-1'>Render Compass Direction:</p>
                <p className='border-2'>Render Star Rating:</p>
            </div>
        </>
    )
}

export default Waves