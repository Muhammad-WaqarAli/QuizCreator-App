import styled from "styled-components"
const Wrapper = styled.div`
        margin: 15px auto; 
        padding: 10px;
        width: 613.324px;
        height: 540px;
        border: 1px solid #333;
        display: flex;
        background:#00FFBF;
        flex-direction: column;
        align-items: center;
         @media (max-width: 767px) {
           width: 300.324px;
        }
        @media (max-width: 400px) {
            width: 200.324px;
        }
    `;

const Header = styled.h1`
        font-size: 17px;
        font-weight: 700px;
        line-height: 12px;
        margin: 5px;
        padding: 10px;
        text-align: center;
        letter-spacing: 1px;
        color:#000000;
    `;

const Input = styled.input`
        padding: 0px 5px;
        margin: 10px 20px;
        border-radius: 5px;
        
        font-size: 12px;
        font-weight: normal;
        outline: none;
        width: 85%;
        height: 40px;
        border: 1px solid #DEE1E6;
        background: #F7F8F9;
    `;

const Form = styled.form`
        padding: 0px 10px;
        margin: 0 auto;
        font-size: 12px;
        font-weight: normal;
        width: 95%;
        
    `;

const InputWrapper = styled.div`
    padding: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column
    `;


const Division = styled.div`
        display: flex;
         justify-content: space-between;
         flex-direction: row;
         
         
    `;
const styleConfig = () => {



    return {
        Wrapper,
        Header,
        InputWrapper,
        Form,
        Input,
        Division
    };
}

export default styleConfig