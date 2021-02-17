import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function MainSprints() {
    return (
        <>
            <div className="separator separator-primary"></div>
            <div className="section section-story-overview no-mobile-background">
                <div className="section bg-img">
                    <Container className="">
                        <Row className="bg-transparent">
                            <Col className="col-lg-6 zIndex order-lg-0 order-1">
                                <h2 className="title section mt-sm-5">Partner dan Layanan Teknologi Informasi
                                    untuk Bisnis Kamu</h2>
                                <h5 className="description">
                                    Dapatkan akses langsung ke tim kami sebagai partner<br/>
                                    professional untuk kemajuan bisnismu
                                </h5>
                                <Button
                                    className="btn-default mr-5 mt-5"
                                    color="info"
                                    href="/nucleo-icons"
                                    size="lg"
                                    target="_blank">
                                    Kirim Penawaran
                                </Button>
                                <Button
                                    className="btn-default btn-outline-info mr-5 mt-5"
                                    color="info"
                                    href="/nucleo-icons"
                                    size="lg"
                                    target="_blank">
                                    Cek Harga
                                </Button>
                            </Col>
                            <Col className="col-lg-6">
                                <div className="order-lg-1 order-0 d-flex justify-content-end mr-sm-n5 pl-lg-5 mt-n5 d-none d-xl-block">
                                    <img
                                        alt="..."
                                        className=" img-fluid "
                                        src={require("assets/img/tajriy-work.png")}

                                    ></img>
                                </div>
                            </Col>

                            <div className="order-lg-1 order-0 d-flex justify-content-end mr-sm-n5 pl-lg-5 col-lg-7 d-none d-sm-block d-md-none">
                                {/*<img
                                    alt="..."
                                    className=" img-fluid "
                                    src={require("assets/img/tajriy-work.png")}
                                    width="760"
                                ></img>*/}
                            </div>
                           {/* <Col className="order-lg-1 order-0 d-flex justify-content-end mr-sm-n5 pl-lg-5 col-lg-7">
                                <img
                                    alt="..."
                                    className=" img-fluid "
                                    src={require("assets/img/tajriy-work.png")}
                                    width="760"
                                ></img>*/}
                                {/* <div
                                    className="image-container image-left category d-flex justify-content-end"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/img/tajriy-work.png") + ")"
                                    }}
                                ></div>*/}

                            {/*</Col>*/}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default MainSprints;
