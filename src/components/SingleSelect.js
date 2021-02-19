import React, { useState } from 'react';
import { Badge, Button, FormControl, InputGroup } from 'react-bootstrap';

const SingleSelect = (props) => {
    const [ansList, setAnsList] = useState([{ ans: "" },{ans:""}]);
    const [question, setQuestion] = useState("");

    const handleQuestionInputChange = (e) => {
        setQuestion(e.target.value);
    }

    const handleInputChange = (e,index) => {
        const { ans, value } = e.target;
        const list = [...ansList];
        list[index].ans = value;
        setAnsList(list);
        console.log(ansList);
    };

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Question"
                    name='Question'
                    onChange={e => handleQuestionInputChange(e)}
                />
            </InputGroup>
            <Badge variant="secondary">options</Badge>
            <br />
            <br />
            <FormControl
                placeholder="Answer"
                name='ans'
                onChange={e => handleInputChange(e,0)}
            />
            <br />
            <FormControl
                placeholder="Answer"
                name='ans'
                onChange={e => handleInputChange(e,1)}
            />
            <br/>
            <br/>
            <Button variant="outline-warning">Add Question</Button>{" "}
            <Button variant="outline-success">Publish</Button>


        </>
    );
};

export default SingleSelect;