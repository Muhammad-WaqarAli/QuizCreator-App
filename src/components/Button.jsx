import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const CustumButton = styled.button`
    padding: 10px 10px;
    border-radius: 5px;
    text-align: center;
    margin: 3px;
    width: 120px;
    display: inline-block;
    outline: none;
    border: 1px solid #B3B3B3;
    text-decoration: none;
    font-size: 12px;
    font-color: 
    border-width: 0;
     $:hover {
         cursor: pointer;
     }
`;
const Button = (props) => {
    return (
        <CustumButton onClick={props.onClick} to={props?.path} as={Link} style={{ backgroundColor: `${props.bgcolor}`, color: `${props.color}`, ...props?.style }}>
            {props.title}
        </CustumButton>
    )
}

export default Button
