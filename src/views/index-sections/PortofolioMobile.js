import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function AndroidIos() {
    return (
        <>

            <div className="">
                <h2 className="title text-center">Portofolio</h2>
                <Container className="">
                    <Row className="">
                        <Col sm={12} lg={6} md={5} className="order-lg-0 order-md-0 order-sm-0">
                            <div
                                className="order-lg-1 order-md-1 order-sm-0 d-flex justify-content-center">
                                <img
                                    alt="..."
                                    className="img-fluid mt-sm-5"
                                    src={require("assets/img/ic-porto-mobile.png")}
                                    width="600"
                                ></img>
                            </div>
                        </Col>
                        <Col sm={12} md={7} lg={6} className="order-lg-1 order-md-1 align-self-center order-sm-1 mx-sm-2 mx-md-0 mx-lg-0">
                            <h2 className="title title-padding-top text-right">Mobile Development <br/>Projects</h2>
                            <h5 className="text-right">
                                Lihat portofolio project kami dengan bebagai bisnis model
                            </h5>
                            <Button
                                className="btn-default float-right rounded-b"
                                color="success"
                                //to="/web-page"
                                tag={Link}
                                //href="examples/WebPage.html"
                                href="https://wa.me/6281314721408?text=Assalamualaikum%20saya%20tertarik%20dengan%20layanan%20anda%20"
                                size="md"
                                target="_blank">
                                Portofolio
                            </Button>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    );
}

export default AndroidIos;
