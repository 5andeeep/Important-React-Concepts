import React, { useRef } from 'react'

const Form2 = () => {

    const nameRef = useRef();
    const handleSubmit = () => {
        console.log(nameRef.current.value);
    }

    return (
        <div>
            <label>NewName</label>
            <input type="text" ref={nameRef} className='border border-black' />
            <button className='border border-black' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form2