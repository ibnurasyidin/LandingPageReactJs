import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function AndroidIos() {
    return (
        <>

            <div className="section bg-img">
                <Container className="">
                    <Row className="">
                        <Col sm={12} lg={5} md={5} className="order-lg-1 order-md-1 order-sm-0">
                            <div
                                className="order-lg-1 order-md-1 order-sm-0 d-flex  justify-content-center">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    src={require("assets/img/pic-android.png")}
                                    width="200"
                                ></img>
                            </div>
                        </Col>
                        <Col sm={12} md={7} lg={7} className="order-lg-0 order-md-0   align-self-center order-sm-1 mx-sm-2 mx-md-0 mx-lg-0">
                            <h2 className="title ">Jasa Pembuatan Aplikasi Android</h2>
                            <h5 className="">
                                Saat ini, banyak perusahaan startup maupun UKM yang
                                merambah usahanya melalui aplikasi android dan iOS.Android
                                saat ini bisa dibilang platform paling populer di dunia untuk
                                perangkat seluler.
                            </h5>
                        </Col>

                    </Row>
                    <Row className="section">
                        <Col sm={12} lg={5} md={5} className="order-lg-0 order-md-0 order-sm-1">
                            <div
                                className="order-lg-1 order-md-1 order-sm-0 d-flex  justify-content-center">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    src={require("assets/img/pic-ios.png")}
                                    width="200"
                                ></img>
                            </div>
                        </Col>
                        <Col sm={12} md={7} lg={7} className="order-lg-1 order-md-1   align-self-center order-sm-1 mx-sm-2 mx-md-0 mx-lg-0">
                            <h2 className="title ">Jasa Pembuatan Aplikasi iOS</h2>
                            <h5 className="">
                                Selain Android dikembangkan oleh Google,
                                aplikasi iOS untuk iPhone dan iPad ciptaan perusahaan Apple
                                pun menjadi salah satu sistem operasi smartphone
                                yang memiliki pengguna terbanyak keda didunia setelah Android
                            </h5>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    );
}

export default AndroidIos;
