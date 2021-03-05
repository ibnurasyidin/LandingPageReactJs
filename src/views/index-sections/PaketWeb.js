import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function NucleoIcons() {
    return (
        <>
            <h2 className="title mt-5 text-center">Sesuaikan dengan model bisnismu!</h2>
            <div className="section d-flex justify-content-between">
                <Container className="justify-content-center">
                    <div className="row d-flex align-items-baseline text-center">
                        <div className="col-sm-12 col-lg-4">
                            <Row>
                                <Col>
                                    <img
                                        alt="..."
                                        className="img-fluid content-center"
                                        src={require("assets/img/g920.png")}
                                        width="50" height="50"
                                    ></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="font-weight-bold mt-4">
                                    Android
                                </Col>
                            </Row>
                            <Row>
                                <Col className="font-weight-normal mt-4 mx-2 mx-md-0 mx-sm-2 mx-lg-0">
                                    Kami bukan hanya penyedia
                                    jasa pembuatan website biasa,
                                    melainkan partner yang
                                    membuka semua potensi online
                                    bagi bisnis Anda.
                                </Col>
                            </Row>
                        </div>
                        <div className="col-sm-12 col-lg-4 mt-5">
                            <Row>
                                <Col>
                                    <img
                                        alt="..."
                                        className="img-fluid content-center"
                                        src={require("assets/img/g2362.png")}
                                        width="50" height="50"
                                    ></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="font-weight-bold mt-4">
                                    iOS
                                </Col>
                            </Row>
                            <Row>
                                <Col className="font-weight-normal mt-4 mx-2 mx-md-0 mx-sm-2 mx-lg-0">
                                    Kami bukan hanya penyedia
                                    jasa pembuatan website biasa,
                                    melainkan partner yang
                                    membuka semua potensi online
                                    bagi bisnis Anda.
                                </Col>
                            </Row>
                        </div>
                        <div className="col-lg-4">
                            <div className="round-postion">
                                <Row>
                                    <Col>
                                        <img
                                            alt="..."
                                            className="img-fluid  content-center "
                                            src={require("assets/img/g877.png")}
                                            width="50" height="65"
                                        ></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="font-weight-bold mt-4">
                                        WEB
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="font-weight-normal mt-4">
                                        Kami bukan hanya penyedia
                                        jasa pembuatan website biasa,
                                        melainkan partner yang
                                        membuka semua potensi online
                                        bagi bisnis Anda.
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default NucleoIcons;
