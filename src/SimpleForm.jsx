import { useState } from "react";

const SimpleForm = () => {

    const [name, setName] = useState('')


    const handleChange = (event) => {

        setName(event.target.value);

    }
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={handleChange} type="text" className='w-full border-2' id="name" name="name" />
        </div>
    )
}

export default SimpleForm