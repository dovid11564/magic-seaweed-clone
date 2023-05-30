import Time from './Time';
import Name from './Name';

function Header() {
    return (
        <>
            <div className='border'>
                Header Component
                {/* <p className='border-1'>Render Beach Name:</p> */}
                <Name />
                <Time />
            </div>
        </>
    )
}

export default Header