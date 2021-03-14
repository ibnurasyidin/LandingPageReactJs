import React from "react";
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label
} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function AturMeeting() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    return (
        <>

            <div className="">
                <h2 className="title text-center">Jadwalkan pertemuan dengan kami</h2>
                <h5 className=" text-center">Selain Android dikembangkan oleh Google,aplikasi iOS untuk<br/>
                    iPhone dan iPad ciptaan perusahaan Apple
                </h5>
                <Container className="">
                    <h5 className="text-left">Pilih tipe proyek</h5>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                               id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Personal</label>
                    </div>
                    <div className="form-check form-check-inline ml-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                               id="inlineRadio2" value="option2" disabled/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Perusahaan</label>
                    </div>
                    <div className="space-50"></div>
                    <Row className="">

                        <Col sm={12} lg={6} md={5} className="order-lg-0 order-md-0 order-sm-0">


                            <div>
                                <Row>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="Nama*"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="Email*"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="No. Telp/HP*"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="Nama Perusahaan *"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </div>
                            {/*<div className="space-70"></div>
*/}
                        </Col>
                        <Col sm={12} md={7} lg={6} className="order-lg-1 order-md-1 align-self-center order-sm-1 mx-sm-2 mx-md-0 mx-lg-0">
                           {/* <div className="space-50"></div>*/}
                            <div>
                                <Row>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="Lokasi*"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="Tanggal*"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="File Pengembangan"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" sm="12" className="mb-4">
                                        <FormGroup>
                                            {/*   <h5>Nama</h5>*/}
                                            <Input
                                                className="bg-light border-0 rounded-a"
                                                defaultValue=""
                                                placeholder="Rincian Kebutuhan*"
                                                type="text"
                                            ></Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </div>

                            {/*<div className="space-70"></div>*/}
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                        <div className="text-secondary justify-content-left align-items-left">
                            <div className="mb-4">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"></Input>
                                        <span className="form-check-sign "></span>
                                        Tambahkan jadwal ke Google Calendar
                                    </Label>
                                </FormGroup>
                            </div>
                            <div>
                                <Button
                                    className="btn-default rounded-b "
                                    color="success"
                                    //to="/web-page"
                                    tag={Link}
                                    //href="examples/WebPage.html"
                                    href="https://wa.me/6281314721408?text=Assalamualaikum%20saya%20tertarik%20dengan%20layanan%20anda%20"
                                    size="md"
                                    target="_blank">
                                    Buat Meeting
                                </Button>
                            </div>
                            <div className="space-70"></div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default AturMeeting;
