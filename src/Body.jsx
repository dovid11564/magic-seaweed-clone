import Wind from './Wind'
import Waves from './Waves'
import Tempurature from './Tempurature'

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