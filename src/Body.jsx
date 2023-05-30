import Wind from './Wind'
import Waves from './Waves'
import Tempurature from './Tempurature'

function Body() {
    return (
        <div className='border'>
            <p>body component</p>
            {/* <p>this is where my Waves, Wind, and temp components will end up</p> */}
            <Waves />
            <Wind />
            <Tempurature />

        </div>
    )
}

export default Body