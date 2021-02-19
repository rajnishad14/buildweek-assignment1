import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import MultipleSelect from "./MultipleSelect";
import SingleSelect from "./SingleSelect";

const QuestionType = (props) => {
  const [typeSelect,setTypeSelect]=useState(0);

  const multi=()=>{
    setTypeSelect(1);
  }

  const single=()=>{
    setTypeSelect(2);
  }

  if(typeSelect===0){
    return (
      <Container>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Question Type
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item onSelect={multi}>Multiple-Select</Dropdown.Item>
          <Dropdown.Item onSelect={single}>Single-Select</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
    );
  }else if(typeSelect===1){
    return (
      <Container>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Multiple-Select
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onSelect={multi}>Multiple-Select</Dropdown.Item>
          <Dropdown.Item onSelect={single}>Single-Select</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br/>
      <MultipleSelect/>
      </Container>
    );
  }else{
    return (
      <Container>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Single-Select
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onSelect={multi}>Multiple-Select</Dropdown.Item>
          <Dropdown.Item onSelect={single}>Single-Select</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br/>
      <SingleSelect/>
      </Container>
    );
  }
  
}

export default QuestionType;
