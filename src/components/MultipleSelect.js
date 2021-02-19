import React, { useEffect, useState } from 'react';
import { Badge, Button, FormControl, InputGroup } from 'react-bootstrap';

const MultipleSelect = (props) => {
    const [ansList, setAnsList] = useState([{ ans: "" }]);
    const [question,setQuestion] = useState("");
    let [counter, setCounter] = useState(0)

    const handleQuestionInputChange=(e)=>{
        setQuestion(e.target.value);
    }

    const handleInputChange = (e, index) => {
        const { ans, value } = e.target;
        const list = [...ansList];
        list[index].ans = value;
        setAnsList(list);
    };

    const handleRemove = index => {
        if (counter > 0) {
            const list = [...ansList];
            list.splice(index, 1);
            setAnsList(list);
            setCounter(counter - 1);
        }
    };

    const handleAdd = () => {
        if (counter < 3) {
            setAnsList([...ansList, { ans: "" }]);
            setCounter(counter + 1);
            console.log(ansList)
        }
    };

    if (counter < 3) {
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
                {ansList.map((x, i) => {
                    return (
                        <div key={i}>
                            <InputGroup>
                                <FormControl
                                    placeholder="Answer"
                                    name='ans'
                                    onChange={e => handleInputChange(e, i)}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={handleAdd}>+</Button>
                                    <Button variant="outline-secondary" onClick={() => handleRemove(i)}>-</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <br />
                        </div>
                    );
                })}
            </>
        );
    } else {
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
                {ansList.map((x, i) => {
                    return (
                        <div key={i}>
                            <InputGroup>
                                <FormControl
                                    placeholder="Answer"
                                    name='ans'
                                    onChange={e => handleInputChange(e, i)}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={handleAdd}>+</Button>
                                    <Button variant="outline-secondary" onClick={() => handleRemove(i)}>-</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <br />
                        </div>
                    );
                })}
                <Button variant="outline-warning">Add Question</Button>{" "}
                <Button variant="outline-success">Publish</Button>

            </>
        );

    }



};

export default MultipleSelect;