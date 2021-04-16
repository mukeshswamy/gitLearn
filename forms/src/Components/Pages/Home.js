// This component is a stand-alone Component because
// There is nothing I can use from this or reuse this component
// There is only Button Component I imported
// So everything from Header till Footer is stand-alone
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Shared/Button";

// Images
import logo from "../../Assets/Images/images.png";
import icon from "../../Assets/Images/demo.png";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="__mainBGColor">
          <Container fluid>
            <Row>
              <Col md={4}>
                <a href="/home">
                  <img src={logo} alt="" className="__logo" />
                </a>
              </Col>
            </Row>
          </Container>
        </header>
        <section style={{ marginTop: "40px" }}>
          <Container>
            <Row>
              <Col md={12} className="__underLine">
                <h2>Create New</h2>
              </Col>
            </Row>
          </Container>
          <Container style={{ marginTop: "40px" }}>
            <Row>
              <Col md={4}>
                <div>
                  <Button
                    whereTo="/home"
                    img={icon}
                    title="New Form"
                    btnDesign="__formNewbtn"
                    iconDesign="__iconStyle"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <Button
                    whereTo="/home"
                    img={icon}
                    title="New Quiz"
                    btnDesign="__formNewbtn"
                    iconDesign="__iconStyle"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
