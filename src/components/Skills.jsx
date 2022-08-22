import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function SkillCard(props){
  return (
    <Card style={{width:"100%"}}>
      <Card.Body>
        <Card.Title>JAVA</Card.Title>
        <Card.Text>
        입니다.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default class Skills extends Component {

  render() {
    return (
      <div className="content-container show-grid">
        <Container>
          <Stack gap={3}>
            <Row>
              <Col><SkillCard/></Col>
              <Col><SkillCard/></Col>
            </Row>
            <Row>
              <Col><SkillCard/></Col>
              <Col><SkillCard/></Col>
            </Row>
          </Stack>
        </Container>
      </div>
    );
  }
}
