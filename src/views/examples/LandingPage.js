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

                <div className="separator separator-primary"></div>
                <div className="section section-story-overview">
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
                                        className="btn-round mr-1"
                                        color="info"
                                        href="/nucleo-icons"
                                        size="lg"
                                        target="_blank"
                                    >
                                        Kirim Penawaran
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
                <div className="separator separator-primary"></div>
                <div className="section section-story-overview">
                    <div className="section ">
                        <Container>
                            <Row>
                                <Col md="4">

                                    <div
                                        className="image-container-section2 image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/free-websites.png") + ")"
                                        }}
                                    ></div>

                                </Col>

                                <Col md="8" className="align-section-2 zIndex">
                                    <div className="align-right">
                                        <h2 className="title title-padding-top">Program 1001 Website Gratis</h2>
                                        <h5 className="description right">
                                            Selain membantu mengembangkan bisnis kamu,<br/>
                                            kami juga menyediakan layanan website gratis
                                            <br/>non profit untuk siapapun!
                                        </h5>
                                        <Button
                                            className="btn-round mr-1"
                                            color="info"
                                            href="/nucleo-icons"
                                            size="lg"
                                            target="_blank"
                                        >
                                            Info Selengkapnya
                                        </Button>
                                    </div>
                                </Col>


                            </Row>
                        </Container>
                    </div>
                </div>

                <div className="section section-our-services">
                    <Container>

                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">Dengan Dukungan Multi-Platform</h2>
                                <h5 className="description">
                                    Proses pembuatan cepat dan profesional, dengan memperhatikan penyusunan
                                    konten yang menarik dan berorientasi penjualan demi mendukung kesuksesan usaha Anda.
                                </h5>

                                {/* align-items-start */}
                            </Col>
                        </Row>
                        <div className="row text-center round-postion">
                            <div className="col round border rounded image-raised">
                                <Row>
                                    <Col className="mr-1 i">
                                        <img

                                            alt="..."
                                            className="img-fluid content-center"
                                            src={require("assets/img/android.png")}

                                            width="50" height="50"
                                        ></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-margin">
                                        Android
                                    </Col>
                                </Row>
                            </div>
                            <div className="col round margin-left border rounded border-primary">
                                <Row>
                                    <Col>
                                        <img

                                            alt="..."
                                            className="img-fluid content-center"
                                            src={require("assets/img/ios.png")}

                                            width="50" height="50"
                                        ></img>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="text-margin">
                                        IOS
                                    </Col>
                                </Row>
                            </div>
                            <div className="col round margin-left border rounded border-primary">
                                <div className="round-postion">
                                    <Row>
                                        <Col>
                                            <img

                                                alt="..."
                                                className="img-fluid  content-center "
                                                src={require("assets/img/web.png")}

                                                width="50" height="50"
                                            ></img>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="text-margin">
                                            WEB
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button className="btn-round round-postion text-center" color="info" outline type="button"
                                    size="lg">
                                Mulai
                            </Button>
                        </div>
                    </Container>
                </div>
                <div className="section section-story-overview">
                    <div className="section background">
                        <Container>
                            <Row>
                                <Col md="4">

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

                                <Col md="8" className="align-section-2 zIndex">
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
