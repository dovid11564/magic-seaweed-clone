
import { useState, useEffect } from 'react'
import Time from './Time';
import Name from './Name';

function Header() {

    const [dateTime, setDateTime] = useState(null)
    useEffect(() => {
        // this fetch grabs the current time for the beach being rendered.
        // in order to make it more dynamic, will need to do some kind of interpolation for city or coordinates. 
        // for now, it just staticlly grabs for NY, since that is where Rockaway Beach is located. 
        fetch(
            `http://api.timezonedb.com/v2.1/get-time-zone?key=${import.meta.env.VITE_REACT_APP_DATE_TIME_KEY}&format=json&by=zone&zone=America/New_York`
        )
            .then(res => res.json())
            .then(data => setDateTime(data))
    }, [])

    // console.log("test", dateTime?.formatted)
    return (
        <>
            <div className='border'>
                Header Component
                <Name />
                <Time dateTime={dateTime}/>

            </div>
        </>
    )
}

export default Header