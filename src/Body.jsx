import "./Body.css"
import Wind from './pages/overview/Wind'
import Waves from './pages/overview/Waves'
import Tempurature from './pages/overview/Tempurature'
import Tide from './pages/overview/Tide'

function Body({ wind, temp }) {
    return (
        <div>
            <div className='flex justify-between items-stretch'>
                <Waves />
                <Wind
                    wind={wind}
                />
                <Tempurature
                    temp={temp}
                />
            </div>
            <Tide />
        </div>
    )
}

export default Body