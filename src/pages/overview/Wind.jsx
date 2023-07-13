// import "./Wind.css"
import { useEffect, useState } from 'react'

function Wind({wind}) {
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