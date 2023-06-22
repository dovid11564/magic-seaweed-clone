import Wind from './pages/overview/Wind'
import Waves from './pages/overview/Waves'
import Tempurature from './pages/overview/Tempurature'

function Body() {
    return (
        <div className='border'>
            <p>body component</p>
            <Waves />
            <Wind />
            <Tempurature />

        </div>
    )
}

export default Body