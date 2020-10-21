import { Col, Container, Row } from "react-bootstrap"
import React from "react"

const Grid = props => {
  return (
    <Container>
      <Row>
        <Col md={1} lg={2}></Col>
        <Col md={10} lg={8}>
          {props.children}
        </Col>
        <Col md={1} lg={2}></Col>
      </Row>
    </Container>
  )
}

export default Grid
