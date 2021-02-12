import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DefaultFooter from "../../components/Footers/DarkFooter";
import MulaiBersama from "../index-sections/MulaiBersama";
import OurClients from "../index-sections/OurClients";
import OurSercives from "../index-sections/OurSercives";
import MainSprint from "../index-sections/MainSprint";

function LandingPage() {
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <ExamplesNavbar/>
            <div className="wrapper">
                <div className="main">
                    <MainSprint/>
                    <OurSercives/>
                    <MulaiBersama/>
                    <OurClients/>
                </div>
                <div className="section section-story-overview">
                    <div className="section background">
                        <Container>
                            <Row>
                                <Col>
                                    <div
                                        className="image-container-help image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/help.png") + ")"
                                        }}
                                        width="50px"
                                        height="50px"
                                    ></div>

                                </Col>

                                <Col className="align-section-2 zIndex">
                                    <div className="align-right">
                                        <h2 className="title title-padding-top">Butuh bantuan?</h2>
                                        <h5 className="description right">
                                            Kami tahu mencoba dan menggunakan layanan baru itu<br/>
                                            sangat mengkhawatirkan, itu sebabnya kami ingin
                                            <br/>memberikan layanan terbaik 100% bebas resiko untuk kamu dan bisnis kamu
                                        </h5>
                                        <Button
                                            className="btn-round mr-1"
                                            color="info"
                                            href="/nucleo-icons"
                                            size="lg"
                                            target="_blank"
                                        >
                                            Hubungi Kami
                                        </Button>
                                        <Button
                                            className="btn-round mr-1"
                                            color="info"
                                            href="/nucleo-icons"
                                            size="lg"
                                            target="_blank"
                                            outline
                                        >
                                            Atur Pertemuan
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <DefaultFooter/>
            </div>
        </>
    );
}

export default LandingPage;
