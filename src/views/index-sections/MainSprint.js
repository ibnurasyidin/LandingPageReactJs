import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function NucleoIcons() {
    return (
        <>
            <div className="separator separator-primary"></div>
            {/*hide only small*/}
            <div className="section section-story-overview d-none d-xl-block">
                <div className="section ">
                    <Container>
                        <Row>
                            <Col md="8" className="zIndex">
                                <h2 className="title title-padding-top">Partner dan Layanan Informasi Teknologi
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
                                    target="_blank"
                                >
                                    Kirim Penawaran
                                </Button>
                                <Button
                                    className="btn-default btn-outline-info mr-5 mt-5"
                                    color="info"
                                    href="/nucleo-icons"
                                    size="lg"
                                    target="_blank"
                                >
                                    Cek Harga
                                </Button>

                            </Col>
                            <Col md="4">
                                <div
                                    className="image-container image-left category"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/img/tajriy-work.png") + ")"
                                    }}
                                ></div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default NucleoIcons;
