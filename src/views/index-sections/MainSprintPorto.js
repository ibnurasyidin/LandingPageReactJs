import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function MainSprintPorto() {
    return (
        <>

            <div className="section section-story-overview no-mobile-background">
                <div className=" ">
                    <Container className="">
                    <h2 className="title title-padding-top text-center">Terimakasih atas kepercayaan anda <br/> kepada kami</h2>
                        <Row className="mt-5">
                            <Col className="d-flex justify-content-center ">
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
                                <Button
                                    className="btn-default btn-outline-info  "
                                    color="info"
                                    href="/nucleo-icons"
                                    size="lg"
                                    target="_blank">
                                    Cek Harga
                                </Button>
                            </Col>
                            <div
                                className="d-flex section-images mt-3 justify-content-center">
                                <img
                                    alt="..."
                                    className=" img-fluid "
                                    src={require("assets/img/pic-mac.png")}

                                ></img>
                            </div>
                        </Row>

                    </Container>
                </div>
            </div>
        </>
    );
}

export default MainSprintPorto;
