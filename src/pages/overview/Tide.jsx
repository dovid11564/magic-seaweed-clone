import { useEffect, useState, useMemo } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, //dots
    Legend,
    Tooltip //this isn't working for some reason...
} from 'chart.js'



ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

function Tide() {
    // const [tideCache, setTideCache] = useState(null)
    const [tide, setTide] = useState([])


    const lat = "40.5891"
    const lng = "-73.8010"

// useEffect(() => {
//         fetch(`https://api.stormglass.io/v2/tide/sea-level/point?lat=${lat}&lng=${lng}&start=2020-02-24&end=2020-02-26`, {
//             headers: {
//                 'Authorization': `${import.meta.env.VITE_REACT_APP_STORMGLASS}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => setTide(data))
//     }, [])

    // const sgData = tide?.map((item) => item.sg);
    // const timeLabels = tide?.map((item) => item.time);
    const sgData = tide ? tide.map((item) => item.sg) : "loading...";
    const timeLabels = tide ? tide.map((item) => item.time) : "loading...";


    const day = "today" //can I keep this in an array? would that transfer nicely? maybe as some kind of state change
    const exampleNum = 4
    const data = {
        labels: timeLabels,
        datasets: [
            {
                label: 'Tide over next day',
                data: sgData,
                backgroundColor: 'aqua',
                borderColor: 'black',
                pointBorderColor: 'white',
                fill: true, //this toggles background color for the chart based on backgroundColor prop set
                tension: 0.4 //this effects the curve. edit to find one that is comfortable
            }
        ]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                min: 0,
                max: 10
            }
        }
    }


    
    //the following two need to be in year-month-day format
    const today = "today"
    const yomayim = "in two days"
    //need to make a var that is for the day and time
    

    // console.log(tide)

    // const tideData = tide.map((data) => ({
    //     sg: data.sg
    // }))

 


    return (
        <div> this is tide component
            <div>
                {/* style this div to effect the chart as desired */}

                {/* {tide?.map((sgValue, index) => (
                    <Line key={index} sg={sgValue} options={options} />
                ))} */}
                <Line
                    data={data}
                    options={options}
                ></Line>
            </div>
        </div>
    )
}

export default Tide