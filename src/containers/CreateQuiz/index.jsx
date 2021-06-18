import React from 'react'
import CreateQuizUI from '../../layouts/CreateQuizUI';
import useForm from './useForm';


const CreatQuiz = ({ handleQuizUpdate, choiceList, questionList }) => {
    return (
        <div>
            <CreateQuizUI choiceList={choiceList} questionList={questionList} handleQuizUpdate={handleQuizUpdate} form={useForm()} />
        </div>
    )
}

export default CreatQuiz
