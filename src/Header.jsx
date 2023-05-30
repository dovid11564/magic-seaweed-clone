

import Time from './Time';
import Name from './Name';

function Header() {
    return (
        <>
            <div className='border'>
                Header Component
                <Name />
                <Time />

            </div>
        </>
    )
}

export default Header