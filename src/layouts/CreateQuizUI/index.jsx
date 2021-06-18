import React from 'react';
import Button from '../../components/Button';
import QuestionList from '../../components/QuestionList';
import styleConfig from "./style"

const { InputWrapper, Wrapper, Input, Header, Form, Section, InputLabel, Division } = styleConfig();

const CreateQuizUI = ({ form: { form, onChange }, handleQuizUpdate, questionList: questions }) => {


    const handleSubmit = () => {
        handleQuizUpdate(form);
    }



    return (
        <Wrapper>
            <Header>Create Quiz</Header>
            <Form>
                <InputWrapper>
                    <InputLabel htmlFor="quiz_title">Quiz Title</InputLabel>
                    <Input
                        type="text"
                        id="quiz_title"
                        name="quiz_title"
                        placeholder="Spring Framework"
                        value={form.quiz_title || ""}
                        onChange={onChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel htmlFor="total_point">Total Point</InputLabel>
                    <Input
                        id="total_point"
                        name="total_point"
                        type="text"
                        placeholder="100"
                        value={form.total_point || ""}
                        onChange={onChange}
                    />
                </InputWrapper>
                <Division>
                    <InputWrapper style={{ margin: 0, width: "45%" }}>
                        <InputLabel htmlFor="time_allowed">Time Allowed</InputLabel>
                        <Input
                            id="time_allowed"
                            name="time_allowed"
                            type="text"
                            placeholder="100"
                            style={{ height: "30px" }}
                            value={form.time_allowed || ""}
                            onChange={onChange}
                        />
                    </InputWrapper>
                    <InputWrapper style={{ margin: 0, width: "45%" }} >
                        <InputLabel htmlFor="deadline">Deadline</InputLabel>
                        <Input
                            id="deadline"
                            name="deadline"
                            type="date"
                            placeholder="100"
                            style={{ height: "30px" }}
                            value={form.deadline || ""}
                            onChange={onChange}
                        />
                    </InputWrapper>
                </Division>
            </Form>
            <Section >
                <Header> Questions</Header>
                <Division style={{ width: "540px", height: "460px", margin: "0 auto", position: "relative", overflow: `${questions?.length && "auto"}` }}>
                    {questions?.length === 0 || questions === undefined ? (
                        <div style={{ width: "540px", height: "460px", margin: "0 auto", border: "1px solid  #333" }}>
                            <Button style={{ position: "absolute", top: "40%", left: "40%" }} path="/addquestion" color="#fff" title="Add Question" bgcolor="#0057D8" />
                        </div>
                    ) : (
                        <QuestionList questions={questions} />
                    )}
                </Division>
            </Section>
            <Division style={{ alignItems: "center" }} >
                <Division style={{ width: "250px" }} />
                <Division style={{ padding: "5px", alignItems: "center", margin: "20px" }}>
                    <Button path="" color="#333333" title="Cancel" bgcolor="#FFFF00" />
                    <Button path="" onClick={handleSubmit} title="Create Quiz" color="#fff" bgcolor="#0057D8" />
                </Division>
            </Division>
        </Wrapper>
    )
}

export default CreateQuizUI;