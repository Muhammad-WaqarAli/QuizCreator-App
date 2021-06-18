import styled from "styled-components"

const styleConfig = () => {

    const family = "Verdana"

    const Wrapper = styled.div`
        margin: 0px auto; 
        padding: 10px;
        width: 400px;
        height: 200px;
        border: 1px solid #333;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background:#00FFBF;
        
    `;

    const Header = styled.h1`
        font-size: 17px;
        font-weight: 700px;
        line-height: 12px;
        text-align: center;
        // margin: 5px;
        padding: 10px;
        letter-spacing: 1px;
        color:#000000;
    `;

    const Page = styled.p`
        font-size: 17px;
        font-weight: 700px;
        line-height: 12px;
        margin: 5px;
        padding: 10px;
        text-align: center;
        letter-spacing: 1px;
        color:#000000;
    `;


    const InputCheck = styled.input`
        border-radius: 5px;
        outline: none;
        border: 1px solid #DEE1E6;
        background: #F7F8F9;
        margin: 5px;

    `;

    const Form = styled.form`
        font-size: 12px;
        font-weight: normal;
    `;

    const InputWrapper = styled.div`
        padding: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column
    `;

    const Input = styled.input`
        padding: 0px 5px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: normal;
        font-family: ${family};
        outline: none;
        width: 85%;
        height: 40px;
        border: 1px solid #DEE1E6;
        background: #F7F8F9;
    `;

    return {
        Wrapper,
        InputWrapper,
        InputCheck,
        Input,
        Header,
        Form,
        Page
    };
}

export default styleConfig