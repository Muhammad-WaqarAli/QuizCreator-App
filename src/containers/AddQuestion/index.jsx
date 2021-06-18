import React from 'react';
import AddQuestionUI from '../../layouts/AddQuestionUI'
import useForm from './useForm'



const AddQuestion = ({ choiceList, handletQUestionListUpdate }) => {
    return (
        <div>
            <AddQuestionUI choiceList={choiceList} handletQUestionListUpdate={handletQUestionListUpdate} form={useForm()} />
        </div>
    )
}

export default AddQuestion;
