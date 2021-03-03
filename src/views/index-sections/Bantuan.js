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
                        <Col sm={12} lg={5} md={5} className="order-lg-1 order-md-1 order-sm-0">
                            <div
                                className="order-lg-1 order-md-1 order-sm-0 d-flex align-items-center justify-content-end mr-sm-n5 mt-md-5">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    src={require("assets/img/help.png")}
                                    width="400"
                                ></img>
                            </div>
                        </Col>
                        <Col sm={12} md={7} lg={7} className="order-lg-0 order-md-0 order-sm-1 mx-sm-2 mx-md-0 mx-lg-0">
                            <h2 className="title mt-5">Butuh Bantuan</h2>
                            <h5 className="description">
                                Kami tahu mencoba dan menggunakan layanan baru itu
                                sangat mengkhawatirkan, itu sebabnya kami ingin
                                memberikan layanan terbaik 100% bebas resiko untuk kamu dan bisnis kamu
                            </h5>
                            <Button
                                className="btn-default  mt-5"
                                color="info"
                                href="/nucleo-icons"
                                size="lg"
                                target="_blank">
                                Hubungi Kami
                            </Button>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Bantuan;
