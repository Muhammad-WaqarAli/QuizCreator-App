import React from 'react'
import styled from "styled-components";
import List from './List';



const Lists = styled.li`
   font-family: Arial, Helvetica, sans-serif;
   display: flex;
   justify-content: space-between;
   width: 100%;
   list-style-type: none;
  
`;


const Page = styled.p`
    color:#596780;
    padding-left: 30px;
  font-size: 11px;
   width: 50px;

`;
const QuestionList = ({ questions }) => {


    return (
        <ul style={{ border: "1px solid #333", width: "540px", padding: "5px" }}>
            <Lists style={{ display: 'flex', }} >
                <Page style={{ paddingLeft: "5px" }} >Text</Page>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Page>Type</Page>
                    <Page>Choices</Page>
                    <Page>Points</Page>
                    <Page>Action</Page>
                </div>
            </Lists>
            {questions.map((question, index) => (
                <List question={question} choice={question.choiceList?.length} key={index} />
            ))}
        </ul>
    )
}

export default QuestionList;
