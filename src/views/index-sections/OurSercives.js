import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function NucleoIcons() {
    return (
        <>
            <div className="">
                <h2 className="title text-center">Apa yang Anda Butuhkan?</h2>
            </div>
            <div className="section d-flex justify-content-between">
                <Container className="justify-content-center">
                    <div className="row d-flex align-items-baseline text-center">
                        <div className="col">
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
                                <Col className=" font-weight-bold mt-4">
                                    Android
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
                        <div className="col">
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
                                <Col className=" font-weight-bold mt-4">
                                    iOS
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
                        <div className="col">
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
