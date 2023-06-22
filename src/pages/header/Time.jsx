import { useState, useEffect } from 'react'

function Time() {

    const [dateTime, setDateTime] = useState(null)
    useEffect(() => {
        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${import.meta.env.VITE_REACT_APP_DATE_TIME_KEY}&format=json&by=zone&zone=America/New_York`)
            .then(res => res.json())
            .then(data => setDateTime(data))
    }, [])


    return (
        <>
            <p className='border-2'>Render Local Date/Time: <b>{dateTime?.formatted}</b> </p>
        </>
    )
}

export default Time