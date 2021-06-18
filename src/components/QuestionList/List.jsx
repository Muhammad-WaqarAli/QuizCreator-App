import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styled from 'styled-components';



const Lists = styled.li`
  font-family: Arial, Helvetica, sans-serif;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   list-style-type: none;
  
`;

const Page = styled.p`
    color:#596780;
 padding-left: 30px;
  font-size: 14px;
  text-align: left;
   width: 50px;
`;

const List = ({ question, choice }) => {


    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num) + "..?";
        } else {
            return str;
        }
    }


    return (
        <Lists>
            <Page style={{ paddingLeft: "5px", width: " 100px" }} > {truncateString(question.text, 15) || ""}</Page>
            <div style={{ display: 'flex' }}>
                <Page>{question.type || ""}</Page>
                <Page style={{ textAlign: 'center' }}>{question.choiceList.length || ""}</Page>
                <Page>{question.points || ""}</Page>
                <Page style={{ display: "flex" }}>
                    <FaTrashAlt style={{ fontSize: "16px" }} />
                    <FaEdit style={{ fontSize: "16px" }} />
                </Page>
            </div>

        </Lists>
    )
}
export default List
