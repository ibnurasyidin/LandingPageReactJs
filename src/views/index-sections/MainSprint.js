import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";


// core components

function MainSprints() {
    return (
        <>

            <div className="section section-story-overview no-mobile-background">
                <div className=" bg-img">
                    <Container className="">
                        <Row className="bg-transparent">
                            <Col sm={12} md={6} lg={6} className="mt-lg-5 zIndex order-lg-0 order-md-0 order-1">
                                <h2 className="title pt-lg-5 mt-sm-5">Partner dan Layanan Teknologi Informasi
                                    untuk Bisnis Kamu</h2>
                                <h5 className="description">
                                    Dapatkan akses langsung ke tim kami sebagai partner<br/>
                                    professional untuk kemajuan bisnismu
                                </h5>
                                <Row className=" mt-5">
                                    <Col>
                                        <Button
                                            className="btn-default mr-5 "
                                            color="info"
                                            //to="/web-page"
                                            tag={Link}
                                            //href="examples/WebPage.html"
                                               href="https://wa.me/6281314721408?text=Assalamualaikum%20saya%20tertarik%20dengan%20layanan%20anda%20"
                                            size="lg"
                                            target="_blank">
                                            Kirim Penawaran
                                        </Button>
                                        {/*<Button
                                    className="btn-default btn-outline-info  "
                                    color="info"
                                    href="/nucleo-icons"
                                    size="lg"
                                    target="_blank">
                                    Cek Harga
                                </Button>*/}
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div
                                    className="order-lg-1 order-0 order-md-1 d-flex section justify-content-end mr-sm-n5 pl-lg-5 mt-n5 d-none d-xl-block">
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
