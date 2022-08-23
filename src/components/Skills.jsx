import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as frStar } from '@fortawesome/free-regular-svg-icons';

function SkillLevel({stars}) {
  var arr = [0,1,2,3,4];

  return (
    <>
      {arr.map(e => <FontAwesomeIcon key={"star_"+e} icon={e < stars ? faStar : frStar} color="#1C89ED"/>)}
    </>
  )
}

function SkillCard(props){
  return (
    <Card style={{width:"100%"}}>
      <Card.Body>
        <Card.Title>JAVA</Card.Title>
        <Card.Text>
          <SkillLevel stars={2}/>
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
