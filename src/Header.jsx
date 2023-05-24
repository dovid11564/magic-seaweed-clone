import { useState, useEffect } from 'react'

function Header() {

    const [dateTime, setDateTime] = useState(null)
    console.log(import.meta.env.VITE_REACT_APP_DATE_TIME_KEY)
    useEffect(() => {
        // console.log(REACT_APP_DATE_TIME_KEY)
        fetch( {/* this is where the geolocation key goes*/} 
        // {import.meta.env.REACT_APP_DATE_TIME_KEY}
        )
        .then(res => res.json())
        .then(data => setDateTime(data))
    }, [])


    return (
        <>
            <div className='border'>
                Header Component
                <p className='border-1'>Render Beach Name:</p>
                <p className='border-2'>Render Local Date/Time:</p>
            </div>
        </>
    )
}

export default Header