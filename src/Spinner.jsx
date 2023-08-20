import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <>
            <img src={loading} alt="loading" />
            <p className='text-white text-lg'>Please Wait! joke is coming now....</p>
        </>
    )
}

export default Spinner
