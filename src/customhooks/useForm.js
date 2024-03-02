import { useState } from 'react';

export const useForm = ( initState ) => {
    const [ formData, setFormData ] = useState(initState);
    const onChange = (event) => {setFormData( prev => ({...prev,[event.target.name]: event.target.value}))}
    const resetForm = () => {setFormData({ ...initState })}
    return {...formData,formData,onChange,resetForm}
}

