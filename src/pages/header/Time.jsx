import { useState, useEffect } from 'react'
import {
    ClockIcon,
} from '@heroicons/react/20/solid'
function Time() {

    const [dateTime, setDateTime] = useState(null)
    useEffect(() => {
        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${import.meta.env.VITE_REACT_APP_DATE_TIME_KEY}&format=json&by=zone&zone=America/New_York`)
            .then(res => res.json())
            .then(data => setDateTime(data))
    }, [])

    const dateString = "2023-07-22T06:00:00-04:00";
    const parsedDate = new Date(dateString);
    console.log(parsedDate)

    return (
        <>
            <div className="mt-2 flex items-center text-sm text-gray-500">
                <ClockIcon className="mr-1.5 h-5 w-5  flex-shrink-0 text-gray-400" aria-hidden="true" />
                {/* {formattedTime} */}
            </div>
            {/* <p className='border-2'>Render Local Date/Time: <b>{dateTime?.formatted}</b> </p> */}
        </>
    )
}

export default Time