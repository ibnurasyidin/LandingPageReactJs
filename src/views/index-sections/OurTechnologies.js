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
                            <Col className="col-lg-6 col-sm-12 col-12 col-md-6 text-white">
                                <h2 className="title mt-5">Our Technologies</h2>
                                <h5 className="description text-white">
                                    Kami membangun bisnis Anda dengan teknologi terbaru.
                                    Semua Aplikasi terupload di Google Play Store & Apple Apps Store
                                </h5>
                            </Col>
                            <Col className="col-lg-6 col-sm-12 text-white col-md-6 col-12 align-self-center">
                                <Row>
                                    <Col className="d-flex justify-content-center">
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-none d-md-block d-lg-block"
                                            alt="..."
                                            src={require("assets/img/ic_java.png")}
                                            width="100" height="100"
                                        ></img>
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-none d-md-block d-lg-block"
                                            alt="..."
                                            src={require("assets/img/ic_kotlin.png")}
                                            width="100" height="100"
                                        ></img>
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-none d-md-block d-lg-block"
                                            alt="..."
                                            src={require("assets/img/ic_nodejs.png")}
                                            width="100" height="100"
                                        ></img>
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-none d-md-block d-lg-block"
                                            alt="..."
                                            src={require("assets/img/ic_laravel.png")}
                                            width="100" height="100"
                                        ></img>

                                        <img
                                            className=" img-fluid px-md-2 px-2 d-md-none d-lg-none"
                                            alt="..."
                                            src={require("assets/img/ic_java.png")}
                                            width="85" height="85"
                                        ></img>
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-md-none d-lg-none"
                                            alt="..."
                                            src={require("assets/img/ic_kotlin.png")}
                                            width="85" height="85"
                                        ></img>
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-md-none d-lg-none"
                                            alt="..."
                                            src={require("assets/img/ic_nodejs.png")}
                                            width="85" height="85"
                                        ></img>
                                        <img
                                            className=" img-fluid px-md-2 px-2 d-md-none d-lg-none"
                                            alt="..."
                                            src={require("assets/img/ic_laravel.png")}
                                            width="85" height="85"
                                        ></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mt-3 d-flex justify-content-center">
                                        <img
                                            alt="..."
                                            className=" img-fluid px-2 d-none d-md-block d-lg-block"
                                            src={require("assets/img/ic_firebase.png")}
                                            width="100" height="100"
                                        ></img>
                                        <img
                                            alt="..."
                                            className=" img-fluid px-2 d-none d-md-block d-lg-block"
                                            src={require("assets/img/ic_reactjs.png")}
                                            width="100" height="100"
                                        ></img>
                                        <img
                                            alt="..."
                                            className=" img-fluid px-2 d-none d-md-block d-lg-block"
                                            src={require("assets/img/ic_wp.png")}
                                            width="100" height="100"
                                        ></img>

                                        <img
                                            alt="..."
                                            className=" img-fluid px-2 d-md-none d-lg-none"
                                            src={require("assets/img/ic_firebase.png")}
                                            width="85" height="85"
                                        ></img>
                                        <img
                                            alt="..."
                                            className=" img-fluid px-2 d-md-none d-lg-none"
                                            src={require("assets/img/ic_reactjs.png")}
                                            width="85" height="85"
                                        ></img>
                                        <img
                                            alt="..."
                                            className=" img-fluid px-2 d-md-none d-lg-none"
                                            src={require("assets/img/ic_wp.png")}
                                            width="85" height="85"
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
