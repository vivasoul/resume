import React, { Component, useState } from "react";
import { Container, Stack, Row, Col,
         Card, Button, Collapse, Badge
      } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as frStar } from '@fortawesome/free-regular-svg-icons';

function SkillLevel({stars}) {
  var arr = [0,1,2,3,4];

  return (
    <div>
      {arr.map(e => <FontAwesomeIcon key={"star_"+e} icon={e < stars ? faStar : frStar} color="#1C89ED"/>)}
    </div>
  )
}

function SkillTitle({text, role}) {
  return (
    <div className="justify-space-block">
      <div>{text}</div>
      <div><Badge pill bg="warning">{role}</Badge></div>
    </div>
  )
}

function SkillDetail({stars}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="justify-space-block">
        <SkillLevel stars={stars}/>
        <Button size="sm"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        ><FontAwesomeIcon icon={open ? faAnglesUp : faAnglesDown}/></Button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          JAVA<br/>
          디테일입니다<br/>
          하하
        </div>
      </Collapse>
    </>
  )
}

function SkillCard({stars}){
  return (
    <Card style={{width:"100%"}}>
      <Card.Body>
        <Card.Title><SkillTitle text="JAVA" role="server" /></Card.Title>
        <Card.Text as="div">
          <SkillDetail stars={stars}/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default class Skills extends Component {

  render() {
    return (
      <div className="content-container show-grid">
        <Container>
          <Stack gap={3}>
            <Row>
              <Col><SkillCard stars={2}/></Col>
              <Col><SkillCard stars={3}/></Col>
            </Row>
            <Row>
              <Col><SkillCard stars={4}/></Col>
              <Col><SkillCard stars={5}/></Col>
            </Row>
          </Stack>
        </Container>
      </div>
    );
  }
}
