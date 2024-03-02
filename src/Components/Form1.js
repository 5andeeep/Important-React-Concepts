import React, { useState } from 'react'

const Form1 = () => {
    const [name, setName] = useState("");
    const handleSubmit = () => {
        console.log(name);
    }
    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-black' />
            <button onClick={handleSubmit} className='border border-black'>Submit</button>
        </div>
    )
}

export default Form1