import React, { Component } from "react"
import CustomNavBar from "./components/CustomNavBar"
import { Container, Row, Col } from "reactstrap"

class App extends Component {
  render() {
    return (
      <div>
        <CustomNavBar />
        <Container>
          <Row>
            <Col sm='12' md={{ size: 6, offset: 3 }}>
              Bem vindo a nossa página inicial!
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
