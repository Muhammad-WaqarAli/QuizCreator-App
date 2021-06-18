import styled from "styled-components";

const family = "Helvetica, sans-serif;"

const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 15px auto; 
        padding: 20px;
        width: 580px;
        height: 850px;
        border: 1px solid #333;
        background:#00FFBF;
       
    `;

const Header = styled.h1`
        font-size: 17px;
        font-weight: 700px;
        line-height: 12px;
        text-align: center;
        letter-spacing: 1px;
        color:#000000;
    `;

const Input = styled.input`
        padding: 0px 5px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: normal;
        font-family: ${family};
        outline: none;
        width: 100%;
        height: 40px;
        border: 1px solid #DEE1E6;
        background: #F7F8F9;
        
    `;

const Form = styled.form`
        padding: 0px 10px;
        margin: 40px auto;
        font-size: 12px;
        font-weight: normal;
        margin: 0 auto;
        width: 540px;
         font-family: ${family};
         
        
    `;

const InputWrapper = styled.div`
        padding: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column
    `;

const InputLabel = styled.label`
        margin: 10px 0;
        font-size: 14px;
        font-weight: normal;
        font-family: ${family};
    `;

const Section = styled.section`
        width: 540px;
        margin: 0 auto;
    `;

const Division = styled.div`
        display: flex;
         justify-content: space-between;
         flex-direction: row;
         @media (max-width: 400px) {
          flex-direction: column
        }
    `;

const styleConfig = () => {
    return {
        Wrapper,
        InputWrapper,
        Input,
        Header,
        Form,
        Section,
        InputLabel,
        Division
    };
}

export default styleConfig