

import Time from './Time';
import Name from './Name';
import Modal from './Modal'

function Header() {
    return (
        <>
            <div className='border'>
                Header Component
                <Name />
                <Time />
                <Modal />
            </div>
        </>
    )
}

export default Header