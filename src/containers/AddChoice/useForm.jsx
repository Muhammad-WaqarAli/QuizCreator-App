import { useState } from 'react'

const useForm = () => {


    const [choices, setChoices] = useState({})


    let handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setChoices({
            ...choices,
            [name]: value
        });
    }








    return {
        choices,
        setChoices,
        handleInputChange
    };
}

export default useForm;
