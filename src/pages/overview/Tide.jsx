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

    const day = "today"
    const exampleNum = 9
    const data = {
        labels: ['Mon', `${day}`, 'Wed'],
        datasets: [
            {
                label: 'Sales of the Week',
                data: [3, `${exampleNum}`, 0],
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
            y:{
                min: 0,
                max: 10
            }
        }
    }

    return (
        <div> this is tide component

            <div>
                {/* style this div to effect the chart as desired */}
                <Line
                    data={data}
                    options={options}
                ></Line>
            </div>



        </div>
    )
}

export default Tide