// import "./Tempurature.css"

function Tempurature(temp) {
    return (
        <>
            <div className='text-center flex-1'>
                Tempurature Component
                <p className='border-1'>Render Land Temp: {temp?.tempurature}</p>
                <p className='border-2'>Render Water Temp:</p>
                <p className='border-1'>Render Current Weather:</p>
            </div>
        </>
    )
}

export default Tempurature