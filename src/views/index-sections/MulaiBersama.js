import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function NucleoIcons() {
    return (
        <>
            <div className="section section-nucleo-icons">
                <Container>
                    <h2 className="title text-center">Mulai bersama kami</h2>
                    <Row className={"mx-2 mx-md-0 mx-sm-2 mx-lg-0"}>
                        <Col lg={6} md={6} sm="12">
                            <Row>
                                <Col md={2} className="align-self-center">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluid "
                                        src={require("assets/img/logo-tajriy.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title">Temukan ide</h4>
                                    <h5 className="description">
                                        Bangun aplikasi dengan inovasi fitur yang menarik yang
                                        bisa membantu bisnis kamu lebih baik melayani pelanggan.
                                        Mulai buat ide anda menjadi kenyataan

                                    </h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="align-self-center">
                                    <img
                                        alt="..."
                                        className="rounded-circle img-fluidß"
                                        src={require("assets/img/logo-tajriy.png")}
                                        width="60" height="60"
                                    ></img>
                                </Col>
                                <Col>
                                    <h4 className="title">Temukan ide</h4>
                                    <h5 className="description">
                                        Bangun aplikasi dengan inovasi fitur yang menarik yang
                                        bisa membantu bisnis kamu lebih baik melayani pelanggan.
                                        Mulai buat ide anda menjadi kenyataan

                                    </h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={6} sm={12} className={"align-self-center"}>
                            <div className="icons-container">
                                <i className="now-ui-icons ui-1_send"></i>
                                <i className="now-ui-icons ui-2_like"></i>
                                <i className="now-ui-icons transportation_air-baloon"></i>
                                <i className="now-ui-icons text_bold"></i>
                                <i className="now-ui-icons tech_headphones"></i>
                                <i className="now-ui-icons emoticons_satisfied"></i>
                                <i className="now-ui-icons shopping_cart-simple"></i>
                                <i className="now-ui-icons objects_spaceship"></i>
                                <i className="now-ui-icons media-2_note-03"></i>
                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                <i className="now-ui-icons design_palette"></i>
                                <i className="now-ui-icons clothes_tie-bow"></i>
                                <i className="now-ui-icons location_pin"></i>
                                <i className="now-ui-icons objects_key-25"></i>
                                <i className="now-ui-icons travel_istanbul"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default NucleoIcons;
