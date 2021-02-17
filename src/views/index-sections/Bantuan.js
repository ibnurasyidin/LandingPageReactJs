import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function Bantuan() {
    return (
        <>

                <div className="section bg-img background">
                    <Container className="">
                        <Row className="background">
                            <Col className="col-lg-7 zIndex background order-lg-0 order-1">
                                <h2 className="title mt-sm-5">Butuh Bantuan</h2>
                                <h5 className="description">
                                    Kami tahu mencoba dan menggunakan layanan baru itu<br/>
                                    sangat mengkhawatirkan, itu sebabnya kami ingin
                                    <br/>memberikan layanan terbaik 100% bebas resiko untuk kamu dan bisnis kamu
                                </h5>
                                <Button
                                    className="btn-default mr-5 mt-5"
                                    color="info"
                                    href="/nucleo-icons"
                                    size="lg"
                                    target="_blank">
                                    Hubungi Kami
                                </Button>
                            </Col>
                            <Col className="col-lg-5">
                                <div className="order-lg-1 order-0 d-flex justify-content-end mr-sm-n5 ">
                                    <img
                                        alt="..."
                                        className=" img-fluid "
                                        src={require("assets/img/help.png")}
                                        width="400"
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
                        </Row>
                    </Container>
                </div>

        </>
    );
}

export default Bantuan;
