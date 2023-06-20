import { useEffect, useState } from 'react'

function Waves() {

const [waves, setWaves] = useState(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_WAVES_API}`)
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