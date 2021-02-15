import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function OurTechnologies() {
    return (
        <>
            <div className="section-nucleo-icons section">
                <div className="section backgroundGradient">
                <Container>
                  <Row>
                      <Col className="col-lg-6 col-sm-12 text-white">
                          <h2 className="title mt-5">Our Technologies</h2>
                          <h5 className="description text-white">
                              Kami membangun bisnis Anda dengan teknologi terbaru.
                              Semua Aplikasi terupload di Google Play Store & Apple Apps Store
                          </h5>
                      </Col>
                      <Col className="col-lg-6 col-sm-12 text-white">
                        <Row>
                            <Col className="d-flex justify-content-around">
                                <img
                                    alt="..."
                                    className=" img-fluid "
                                    src={require("assets/img/ic_java.png")}
                                    width="70" height="70"
                                ></img>
                                <img
                                    alt="..."
                                    className=" img-fluid "
                                    src={require("assets/img/ic_java.png")}
                                    width="70" height="70"
                                ></img>
                                <img
                                    alt="..."
                                    className=" img-fluid "
                                    src={require("assets/img/ic_java.png")}
                                    width="70" height="70"
                                ></img>
                            </Col>
                        </Row>
                      </Col>
                  </Row>
                </Container>
                </div>
            </div>
        </>
    );
}

export default OurTechnologies;
