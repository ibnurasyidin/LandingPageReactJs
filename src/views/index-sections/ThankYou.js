import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function AndroidIos() {
    return (
        <>

            <div className="section">
                <Container className="">
                    <Row className="">
                        <Col sm={12} lg={6} md={5} className="order-lg-0 order-md-0 order-sm-0">
                            <div
                                className="order-lg-1 order-md-1 order-sm-0 d-flex justify-content-center">
                                <img
                                    alt="..."
                                    className="img-fluid mt-sm-5"
                                    src={require("assets/img/pic-meeting.png")}
                                    width="600"
                                ></img>
                            </div>
                        </Col>
                        <Col sm={12} md={7} lg={6} className="order-lg-1 order-md-1 align-self-center order-sm-1 mx-sm-2 mx-md-0 mx-lg-0">
                            <h2 className="title  text-right">Terimakasih atas ketertarikan
                                <br/>anda pada kami!</h2>
                            <h5 className="text-right">
                                Lihat portofolio project kami dengan bebagai bisnis model
                            </h5>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    );
}

export default AndroidIos;
