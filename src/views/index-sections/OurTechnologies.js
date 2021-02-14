import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function NucleoIcons() {
    return (
        <>
            <div className="section-nucleo-icons">
                <Container>
                    <h2 className=" title text-center">Mulai bersama kami</h2>
                    <Row className={"mx-2 mx-md-0 mx-sm-2 mx-lg-0"}>
                        <Col lg={5} md={5} sm="12" className="order-lg-0 order-1 section">
                            <Row>
                                <Col md={2} className="align-self-center">
                                    <img
                                        alt="..."
                                        className=" img-fluid "
                                        src={require("assets/img/ic_ideas.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title">Temukan ide</h4>
                                    <h5 className="description">
                                        Bangun aplikasi dengan inovasi fitur yang menarik yang
                                        bisa membantu bisnis kamu lebih baik melayani pelanggan.
                                        Mulai buat ide anda menjadi kenyataan

                                    </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="align-self-center">
                                    <img
                                        alt="..."
                                        className=" img-fluidß"
                                        src={require("assets/img/ic_action.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title">Eksekusi</h4>
                                    <h5 className="description">
                                        Bersama tim profesional kami mengambil pandangan pragmatis
                                        untuk mengubah ide anda menjadi tindakan
                                    </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} lg={7} md={7}  className={"align-self-center order-lg-1 order-0 section"}>
                            <img
                                alt="..."
                                className=" img-fluidß float-right"
                                src={require("assets/img/section_1.png")}
                                width="460"

                            ></img>

                        </Col>
                    </Row>

                    <Row className={"mx-2 mx-md-0 mx-sm-2 mx-lg-0"}>
                        <Col lg={7} md={7} sm={12} className={"align-self-center"}>
                                <img
                                    alt="..."
                                    className=" img-fluidß float-left"
                                    src={require("assets/img/pic_section_2.png")}
                                    width="460"
                                ></img>
                        </Col>
                        <Col lg={5} md={5} sm="12">
                            <Row>
                                <Col md={2} className="align-self-center">
                                    <img
                                        alt="..."
                                        className=" img-fluid"
                                        src={require("assets/img/ic_laporan.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title">Pantau Progres</h4>
                                    <h5 className="description">
                                        Pastikan semua sesuai dengan keinginan anda. Kami memberikan aksi nyata
                                        langsung yang berorientasi pada hasil dan kepuasan pelanggan.

                                    </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="align-self-center">
                                    <img
                                        alt="..."
                                        className=" img-fluid"
                                        src={require("assets/img/ic_grafik.png")}
                                        width="60" height="65"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title">Jangkau lebih luas</h4>
                                    <h5 className="description">
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

export default NucleoIcons;
