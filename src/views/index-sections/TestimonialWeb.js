import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function TestimonialWeb() {
    return (
        <>

            <div className="section d-flex justify-content-between">
                <Container className="justify-content-center">
                    <h2 className="title text-center">Portofolio</h2>
                    <div className="row d-flex align-items-baseline">
                        <div className="col-sm-12 col-lg-4 p-lg-5">
                            <div className=" bg-white rounded">
                                <div className=" hero-images-container-1">
                                    <img
                                        className="shadow rounded-a"
                                        alt="..."
                                        src={require("assets/img/pic-eligaman.png")}

                                    ></img>
                                </div>
                               {/* <li className="text-left mt-2 list-group-item card-img-top border-0">*/}
                               <div className="mt-3">
                                    <h5x className="mt-3 font-weight-bold text-left">Eligaman membeli
                                        paket Pro Web Business </h5x>
                               </div>
                                <div className="mt-3">
                                    <px className="text-left">5 Maret 2021</px>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 p-lg-5 mb-5">
                            <div className=" bg-white rounded">
                                <div className=" hero-images-container-1">
                                    <img
                                        className="shadow rounded-a"
                                        alt="..."
                                        src={require("assets/img/pic-ethan.png")}

                                    ></img>
                                </div>
                                {/* <li className="text-left mt-2 list-group-item card-img-top border-0">*/}
                                <div className="mt-3">
                                    <h5x className="mt-3 font-weight-bold text-left">Ethan Laundry membeli
                                        paket Pro Web Business </h5x>
                                </div>
                                <div className="mt-3">
                                    <px className="text-left">5 Maret 2021</px>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 p-lg-5">
                            <div className=" bg-white rounded">
                                <div className=" hero-images-container-1">
                                    <img
                                        className="shadow rounded-a"
                                        alt="..."
                                        src={require("assets/img/pic-bkksda.png")}

                                    ></img>
                                </div>
                                {/* <li className="text-left mt-2 list-group-item card-img-top border-0">*/}
                                <div className="mt-3">
                                    <h5x className="mt-3 font-weight-bold text-left">BKKSDA Riau membeli
                                        paket Pro Web Business </h5x>
                                </div>
                                <div className="mt-3">
                                    <px className="text-left">5 Maret 2021</px>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default TestimonialWeb;
