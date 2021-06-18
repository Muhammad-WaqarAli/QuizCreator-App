import React from 'react';
import Button from '../../components/Button';
import styleConfig from "./style";
import { useHistory } from "react-router-dom";
import ChoiceList from "../../components/ChoiceList"

const AddQuestion = ({ form: { question, onChange }, handletQUestionListUpdate, choiceList: choices }) => {
    const { Wrapper, Header, Division, InputWrapper, Input } = styleConfig();
    const history = useHistory()
    const handleSubmitQuestion = () => {
        handletQUestionListUpdate(question);
        history.push("/")
    };



    return (
        <Wrapper>
            <Header> Question</Header>
            <form>
                <section style={{ width: "540px", margin: "0 auto" }}>
                    <InputWrapper style={{ margin: 0, width: "100%" }}>
                        <label htmlFor="time_allowed" style={{ margin: "5px 0px" }}>Question</label>
                        <textarea style={{ border: "1px solid #DEE1E6", background: "#F7F8F9", outline: "none", resize: "none", height: "40px" }} name="text" value={question.text} onChange={onChange} />
                    </InputWrapper>
                    <section>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div style={{ textAlign: "left", fontWeight: "200px", fontSize: "15px" }}>Type</div>
                                <div>
                                    <input
                                        type="radio"
                                        name="type"
                                        id="single"
                                        value="Single Choice"
                                        checked={question.type === "Single Choice"}
                                        onChange={onChange}
                                    />
                                    <label htmlFor="single">Single Choice</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="type"
                                        id="multiple"
                                        value="Multiple Choice"
                                        checked={question.type === "Multiple Choice"}
                                        onChange={onChange}
                                    />
                                    <label htmlFor="multiple">Multiple Choice</label>
                                </div>
                            </div>
                            <InputWrapper style={{ margin: 0, width: "44%" }}>
                                <label htmlFor="time_allowed" style={{ paddingLeft: "20px" }}>Points</label>
                                <Input
                                    id="points"
                                    name="points"
                                    type="text"
                                    placeholder="100"
                                    value={question.time_allowed}
                                    onChange={onChange}
                                />
                            </InputWrapper>
                        </div>
                    </section>
                </section>
            </form>

            <Division style={{ margin: "0 auto", padding: 0, border: "1px solid  #333", height: "237px", width: "540px", position: "relative", overflow: `${choices?.length && "auto"}` }}>
                {choices?.length === 0 || choices === undefined ? (
                    <div >
                        <Button style={{ position: "absolute", top: "40%", left: "40%" }} path="/addchoice" title="Add Choice" color="#fff" bgcolor="#0057D8" />
                    </div>
                ) : (
                    <ChoiceList choices={choices} />
                )}
            </Division>

            <Division style={{ alignItems: "center" }} >
                <Division style={{ width: "250px" }} />
                <Division style={{ padding: "5px", alignItems: "center", margin: "20px" }}>
                    <Button path="/" color="#333333" bgcolor="#B3B3B3" title="Cancel" />
                    <Button path="/" onClick={handleSubmitQuestion} title="Create" color="#fff" bgcolor="#0057D8" />
                </Division>
            </Division>


        </Wrapper>
    )
}

export default AddQuestion;