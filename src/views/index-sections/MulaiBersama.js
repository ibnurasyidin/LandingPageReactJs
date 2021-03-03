import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function MulaiBersama() {
    return (
        <>
            <div className="section-nucleo-icons">
                <Container>
                    <h2 className=" title text-center">Mulai bersama kami</h2>
                    <Row className={"mx-2 mx-md-0 mx-sm-2 mx-lg-0"}>
                        <Col lg={5} md={6} sm="12" className="order-lg-0 order-1 order-md-0 section">
                            <Row>
                                <Col md={3} className="align-self-center order-md-0 order-lg-1">
                                    <img
                                        alt="..."
                                        className=" img-fluid "
                                        src={require("assets/img/ic_ideas.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col className="order-md-1 order-lg-1">
                                    <h4 className="title text-md-left">Temukan ide</h4>
                                    <h5 className="description text-md-left">
                                        Bangun aplikasi dengan inovasi fitur yang menarik yang
                                        bisa membantu bisnis kamu lebih baik melayani pelanggan.
                                        Mulai buat ide anda menjadi kenyataan

                                    </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} className="align-self-center">
                                    <img
                                        alt="..."
                                        className=" img-fluidß"
                                        src={require("assets/img/ic_action.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title text-md-left">Eksekusi</h4>
                                    <h5 className="description text-md-left">
                                        Bersama tim profesional kami mengambil pandangan pragmatis
                                        untuk mengubah ide anda menjadi tindakan

                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} lg={7} md={6}  className={"align-self-center d-flex justify-content-end order-md-1 order-lg-1 order-0 section"}>
                            <img
                                alt="..."
                                className=" img-fluid float-right"
                                src={require("assets/img/section_1.png")}
                                width="460"

                            ></img>

                        </Col>
                    </Row>

                    <Row className={"mx-2 mx-md-0 mx-sm-2 mx-lg-0"}>
                        <Col lg={7} md={6} sm={12} className="align-self-center">
                                <img
                                    alt="..."
                                    className=" img-fluidß float-left"
                                    src={require("assets/img/pic_section_2.png")}
                                    width="460"
                                ></img>
                        </Col>
                        <Col lg={5} md={6} sm={12} className="">
                            <Row>
                                <Col md={3} className="align-self-center d-flex justify-content-end section order-md-1">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        src={require("assets/img/ic_laporan.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col className="order-md-0 ">
                                    <h4 className="title text-md-left text-sm-center">Pantau Progres</h4>
                                    <h5 className="description text-md-left text-sm-center">
                                        Pastikan semua sesuai dengan keinginan anda. Kami memberikan aksi nyata
                                        langsung yang berorientasi pada hasil dan kepuasan pelanggan.

                                    </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} className="align-self-center d-flex justify-content-end order-md-1">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        src={require("assets/img/ic_grafik.png")}
                                        width="60" height="65"
                                    ></img>
                                </Col>
                                <Col className="order-md-0">
                                    <h4 className="title text-md-left">Jangkau lebih luas</h4>
                                    <h5 className="description text-md-left">
                                        Kami membantu Anda mencapai pertumbuhan yang berkelanjutan & menguntungkan.
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MulaiBersama;
