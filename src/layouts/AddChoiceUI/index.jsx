import React from 'react';
import Button from '../../components/Button';
import styleConfig from "./style";
import { useHistory } from "react-router-dom"

const { InputWrapper, InputCheck, Wrapper, Input, Header, Form, } = styleConfig();


const AddChoiceUI = ({ form: { choices, handleInputChange }, handleChoiceListUpdate }) => {

    const history = useHistory();
    console.log("Choice: ", choices)
    const handleSubmitChoice = () => {
        handleChoiceListUpdate(choices);
        history.push("/addquestion");
    };

    return (
        <Wrapper>
            <Header>Choice</Header>
            <section>
                <Form>
                    <InputWrapper style={{ width: "100%" }}>
                        <label htmlFor="text">Choice</label>
                        <Input
                            id="text"
                            name="text"
                            type="text"
                            placeholder="Your choice"
                            value={choices.text}
                            onChange={handleInputChange}
                        />
                    </InputWrapper>
                    <InputCheck
                        name="correct_option"
                        type="checkbox"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="correct_option">Correct Option</label>
                </Form>
            </section>
            <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
                <div style={{ width: "100px" }} />
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Button
                        color="#333333"
                        path="/addquestion"
                        title="Cancel"
                        bgcolor="#B3B3B3"
                    />
                    <Button
                        path="/addquestion"
                        onClick={handleSubmitChoice}
                        title="Add Choice"
                        color="#fff"
                        bgcolor="#0057D8"
                    />
                </div>
            </section>
        </Wrapper>
    )
}
export default AddChoiceUI;
