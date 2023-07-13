import "./Body.css"
import Wind from './pages/overview/Wind'
import Waves from './pages/overview/Waves'
import Tempurature from './pages/overview/Tempurature'

function Body({wind, temp}) {
    return (
        <div className='flex justify-between items-stretch'>
            <Waves />
            <Wind
                wind={wind}
            />
            <Tempurature
                temp={temp}
            />
        </div>
    )
}

export default Body