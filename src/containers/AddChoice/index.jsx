import React from 'react';
import AddChoiceUI from '../../layouts/AddChoiceUI';
import useForm from './useForm';


const AddChoice = ({ handleChoiceListUpdate }) => {


    return (
        <div>
            <AddChoiceUI handleChoiceListUpdate={handleChoiceListUpdate} form={useForm()} />
        </div>
    )
}

export default AddChoice;
