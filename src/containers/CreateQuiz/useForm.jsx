import { useState } from 'react'

const useForm = () => {

    const [form, seForm] = useState({});

    const onChange = (e) => {
        seForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return {
        onChange,
        form,
        seForm
    };
}

export default useForm;
