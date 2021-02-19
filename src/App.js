import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionType from "./components/QuestionType"
import { Button, Card, Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [option,setOption] = useState(0);
  const create=()=>{
    setOption(1);
  }

  const take=()=>{
    setOption(2);
  }

  if(option===0){
    return (
      <Container>
          <Card className="text-center">
            <h1>Survey Tiger</h1>
            <Card.Body>
              <Card.Title>Create or take Survey</Card.Title>
              <Button variant="outline-primary" onClick={create}>Create Survey</Button>{' '}
              <Button variant="outline-success" onClick={take}>Take Survey</Button>
            </Card.Body>
          </Card>
        </Container>
    );
  }else if(option===1){
    return (
      <Container>
          <Card className="text-center">
          <h1>Survey Tiger</h1>
            <Card.Body>
              <Card.Title>Create Survey</Card.Title>
              <QuestionType/>
            </Card.Body>
          </Card>
        </Container>
    );
  }else{
    return (
      <Container>
          <Card className="text-center">
          <h1>Survey Tiger</h1>
            <Card.Body>
              <Card.Title>Take Survey</Card.Title>
            </Card.Body>
          </Card>
        </Container>
    );
  }
}

export default App;
