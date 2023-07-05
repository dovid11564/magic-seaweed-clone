import "./Modal.css";

function Modal() {


    return (
        <div className='buttons'>
            <button> Forecast</button>
            <button> Overview</button>
        </div>
        // <div style={{ width: '700px', gap: '10px', '--b': '5px', '--h': '1.8em' }} className="flex justify-center items-center min-w-0 font-bold cursor-pointer box-border">
        //     <button style={{
        //         '--_c': '#2B65EC',
        //         flex: 'calc(1 + var(--_s,0))',
        //         fontSize: '40px',
        //         height: 'var(--h)',
        //         color: 'var(--_c)',
        //         border: 'var(--b) solid var(--_c)',
        //         background: 'conic-gradient(at calc(100% - 1.3*var(--b)) 0,var(--_c) 209deg, #0000 211deg) border-box',
        //         clipPath: 'polygon(0 0,100% 0,calc(100% - 0.577*var(--h)) 100%,0 100%)',
        //         padding: '0 calc(0.288*var(--h)) 0 0',
        //         margin: '0 calc(-0.288*var(--h)) 0 0',
        //         transition: 'flex .4s',
        //     }} className="border-button1 m-0 p-0">Overview</button>
        //     <button style={{
        //         '--_c': '#C2B280',
        //         flex: 'calc(1 + var(--_s,0))',
        //         background: 'conic-gradient(from -90deg at calc(1.3*var(--b)) 100%,var(--_c) 119deg, #0000 121deg) border-box',
        //         clipPath: 'polygon(calc(0.577*var(--h)) 0,100% 0,100% 100%,0 100%)',
        //         margin: '0 0 0 calc(-0.288*var(--h))',
        //         padding: '0 0 0 calc(0.288*var(--h))',
        //     }} className="border-button2 m-0 p-0">Forecast</button>
        // </div>
    )
}

export default Modal