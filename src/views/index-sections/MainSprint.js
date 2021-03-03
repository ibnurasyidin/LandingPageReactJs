import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function MainSprints() {
    return (
        <>

            <div className="section section-story-overview no-mobile-background">
                <div className=" bg-img">
                    <Container className="">
                        <Row className="bg-transparent">
                            <Col sm={12} md={12} lg={6} className="zIndex order-lg-0 order-md-1 order-1">
                                <h2 className="title pt-lg-5 mt-sm-5">Partner dan Layanan Teknologi Informasi
                                    untuk Bisnis Kamu</h2>
                                <h5 className="description">
                                    Dapatkan akses langsung ke tim kami sebagai partner<br/>
                                    professional untuk kemajuan bisnismu
                                </h5>
                                <Row className="px-2">
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
                                </Row>
                            </Col>
                            <Col sm={12} md={12} lg={6}>
                                <div className="order-lg-1 order-0 order-md-0 d-flex section justify-content-end mr-sm-n5 pl-lg-5 mt-n5 d-none d-xl-block">
                                    <img
                                        alt="..."
                                        className=" img-fluid "
                                        src={require("assets/img/tajriy-work.png")}

                                    ></img>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default MainSprints;
