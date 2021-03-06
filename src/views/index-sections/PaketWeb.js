import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function NucleoIcons() {
    return (
        <>
            <h2 className="title mt-5 text-center">Sesuaikan dengan model bisnismu!</h2>
            <div className="section d-flex justify-content-between">
                <Container className="justify-content-center">
                    <div className="row d-flex align-items-baseline text-center">
                        <div className="col-sm-12 col-lg-4 p-lg-5">
                            <div className="shadow bg-white rounded">
                                <li className="list-group-item card-img-top border-0">
                                    <h3r className="title font-weight-bold align-items-center text-secondary">Starter</h3r>
                                </li>
                                <div className="shadow card-header bg-info">
                                    <h3r className="text_bold font-weight-bold text-white">Rp.1,8 Jt</h3r>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-img-top">Template Design</li>
                                    <li className="list-group-item border-0">Free Hosting 1th</li>
                                    <li className="list-group-item border-0">Free Domain TLD 1th</li>
                                    <li className="list-group-item border-0">Free Maintenance</li>
                                    <li className="list-group-item border-0">Private Support</li>
                                </ul>
                                <Button
                                    className="btn-default m-4 "
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
                        </div>
                        <div className="col-sm-12 col-lg-4 p-lg-5">
                            <div className="shadow bg-white rounded">
                                <li className="list-group-item card-img-top border-0">
                                    <h3r className="title font-weight-bold align-items-center text-secondary">Medium Business</h3r>
                                </li>
                                <div className="shadow card-header bg-info">
                                    <h3r className="text_bold font-weight-bold text-white">Rp.5 Jt</h3r>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-img-top">Template Design</li>
                                    <li className="list-group-item border-0">Free Hosting 1th</li>
                                    <li className="list-group-item border-0">Free Domain TLD 1th</li>
                                    <li className="list-group-item border-0">Free Maintenance</li>
                                    <li className="list-group-item border-0">Private Support</li>
                                </ul>
                                <Button
                                    className="btn-default m-4 "
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
                        </div>
                        <div className="col-sm-12 col-lg-4 p-lg-5">
                            <div className="shadow bg-white rounded">
                                <li className="list-group-item card-img-top border-0">
                                    <h3r className="title font-weight-bold align-items-center text-secondary">Pro Business</h3r>
                                </li>
                                <div className="shadow card-header bg-info">
                                    <h3r className="text_bold font-weight-bold text-white">Rp.10 Jt</h3r>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item card-img-top">Template Design</li>
                                    <li className="list-group-item border-0">Free Hosting 1th</li>
                                    <li className="list-group-item border-0">Free Domain TLD 1th</li>
                                    <li className="list-group-item border-0">Free Maintenance</li>
                                    <li className="list-group-item border-0">Private Support</li>
                                </ul>
                                <Button
                                    className="btn-default m-4 "
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
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default NucleoIcons;
