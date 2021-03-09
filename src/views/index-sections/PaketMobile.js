import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function PaketMobile() {
    return (
        <>
            <div className="section">
                <h2 className="title text-center">Sesuaikan dengan model bisnismu!</h2>
                    <Container>
                                <h5 className="text-center">Harga pembuatan/pengembangan aplikasi android maupun iOS sangatlah berbeda tiap proyeknya
                                    tergantung pada spesifikasi (fungsi) aplikasi itu sendiri. Kami memberikan kisaran harga sebagai
                                    bayang atau perkiraan saja sebelu, memberikan penawaran terperinci kepada Anda. Jadi anggaplah
                                    ini hanya panduan saja.</h5>
                        <div className="section">
                    <Row className="shadow  mx-auto w-75">
                        <table className="table table-borderless border-0 ">
                            <thead>
                            <tr>
                                <th scope="col"><h5 className="font-weight-bold d-flex justify-content-center ">Model</h5></th>
                                <th scope="col"><h5 className="font-weight-bold  ">Android</h5></th>
                                <th scope="col"><h5 className="font-weight-bold  ">iOS</h5></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">WebView</th>
                                <td>1-25Jt</td>
                                <td>1-25Jt</td>

                            </tr>
                            <tr>
                                <th scope="row">Toko Online/Marketplace
                                </th>
                                <td>1-25Jt</td>
                                <td>1-25Jt</td>

                            </tr>
                            <tr>
                                <th scope="row">Chat/ Travel & Local</th>
                                <td>1-25Jt</td>
                                <td>1-25Jt</td>

                            </tr>
                            <tr>
                                <th scope="row">Tool System</th>
                                <td>1-25Jt</td>
                                <td>1-25Jt</td>

                            </tr>
                            <tr>
                                <th scope="row">Finance
                                </th>
                                <td>1-25Jt</td>
                                <td>1-25Jt</td>

                            </tr>
                            <tr>
                                <th scope="row">Finance
                                </th>
                                <td>1-25Jt</td>
                                <td>1-25Jt</td>

                            </tr>
                            <tr>

                                <td colSpan="3" className="border-top">
                                    <div className="d-flex justify-content-end align-items-center">
                                   Gratis Konsultasi Pembuatan Aplikasi Android Maupun iOS
                                    <Button
                                        className="btn-default mr-5 ml-5"
                                        color="success"
                                        //to="/web-page"
                                        tag={Link}
                                        //href="examples/WebPage.html"
                                        href="https://wa.me/6281314721408?text=Assalamualaikum%20saya%20tertarik%20dengan%20layanan%20anda%20"
                                        size="md"
                                        target="_blank">
                                        Kirim Penawaran
                                    </Button>
                                    </div>
                                </td>

                            </tr>
                            </tbody>
                        </table>
                     {/*   <Col lg={4}className="">
                            <h5 className="title ">Model</h5>
                            <div className="pt-3">
                            <h5>WebView</h5>
                            <h5>Toko Online/Marketplace</h5>
                            <h5>Chat/ Travel & Local</h5>
                            <h5>Tool System</h5>
                            <h5>Finance</h5>
                            <h5>Health / Fitness / Medical</h5>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <h5 className="title text-center">Android</h5>
                            <div className="text-center pt-3">
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <h5 className="title text-center">iOS</h5>
                            <div className="text-center pt-3">
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>
                            <h5>1-25Jt</h5>

                            </div>

                        </Col>*/}
                    </Row>

                        </div>

                    </Container>
            </div>
        </>
    );
}

export default PaketMobile;
