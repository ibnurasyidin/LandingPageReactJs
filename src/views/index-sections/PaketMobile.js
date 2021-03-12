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
                    <div className="bg-warning-a rounded-a">
                        <p className="text-center p-3">
                            <mark className="font-weight-bold bg-transparent">Harga pembuatan/pengembangan aplikasi
                                android maupun iOS sangatlah berbeda tiap proyeknya
                            </mark>
                            tergantung pada spesifikasi (fungsi) aplikasi itu sendiri. Kami memberikan kisaran harga
                            sebagai
                            bayang atau perkiraan saja sebelu, memberikan penawaran terperinci kepada Anda. Jadi
                            anggaplah
                            ini hanya panduan saja.
                        </p>
                    </div>
                    <div className="section">
                        <Row className="shadow  mx-auto w-75">
                            <table className="table table-responsive-sm table-borderless border-0 ">
                                <thead>
                                <tr>
                                    <th scope="col"><h5
                                        className="font-weight-bold d-flex justify-content-center ">Model</h5></th>
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
                                        <div className="text-secondary d-flex justify-content-end align-items-center">
                                            Gratis Konsultasi Pembuatan Aplikasi Android Maupun iOS
                                            <Button
                                                className="btn-default rounded-b  mr-5 ml-5"
                                                color="success"
                                                //to="/web-page"
                                                tag={Link}
                                                //href="examples/WebPage.html"
                                                href="https://wa.me/6281314721408?text=Assalamualaikum%20saya%20tertarik%20dengan%20layanan%20anda%20"
                                                size="md"
                                                target="_blank">
                                                Konsultasi
                                            </Button>
                                        </div>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        </Row>

                    </div>

                </Container>
            </div>
        </>
    );
}

export default PaketMobile;
