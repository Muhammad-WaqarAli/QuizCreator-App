import React from 'react'
import styled from "styled-components";
import Button from '../Button';
import List from './List';



const Lists = styled.li`
  font-family: Arial, Helvetica, sans-serif;
   display: flex;
   justify-content: space-between;
   width: 100%;
   list-style-type: none;
  
`;

const ListData = styled.p`
    color:#596780;
    font-size: 11px;
`;


const ChoiceList = ({ choices }) => {

    return (
        <ul >
            <Lists>
                <ListData style={{ width: "50%" }}> Text</ListData>
                <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                    <ListData>isCorect</ListData>
                    <ListData>Action</ListData>
                </div>
            </Lists>
            {
                choices.map((choice, index) => (
                    <List choice={choice} key={index} />
                ))
            }
            <Button path="/addchoice" title="Add More Choice" color="#fff" bgcolor="#0057D8" />
        </ul >
    )
}

export default ChoiceList;
