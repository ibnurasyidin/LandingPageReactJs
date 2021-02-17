import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function Footer() {
    return (
        <>
            <div className="separator separator-primary"></div>
            <div className="section section-story-overview bg-dark">
                <div className="">
                    <Container className="">
                        <Row className=" ">
                            <div className="ml-3 col-lg-2">
                                <Col className="badge-light rounded-pill p-2">
                                    <img
                                        alt="..."
                                        className=" img-fluid "
                                        src={require("assets/img/logo-tajriy.png")}
                                        width="50"
                                    ></img>
                                </Col>
                                <Col className="mt-5 text-white">
                                    <h5>Kota Pekanbaru <br/>
                                    Indonesia, 551525</h5>
                                    <h5>Senin - Jum'at (08:00-17:00 WIB)</h5>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Footer;
