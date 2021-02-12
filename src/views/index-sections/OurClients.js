import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function NucleoIcons() {
    return (
        <>
            <div className="section section-nucleo-icons">
                <Container className="align-self-center section">
                    <h2 className=" title text-center">Para Klien Kami</h2>
                   <Row className="section text-center mx-2 mx-md-0 mx-sm-2 mx-lg-0">
                       <Col className="">
                           <img
                               alt="..."
                               className=" img-fluid"
                               src={require("assets/img/ic_client_1.png")}
                           ></img>
                       </Col>
                       <Col>
                           <img
                               alt="..."
                               className=" img-fluid"
                               src={require("assets/img/ic_client_2.png")}

                           ></img>
                       </Col>
                       <Col>
                           <img
                               alt="..."
                               className=" img-fluid"
                               src={require("assets/img/ic_client_3.png")}

                           ></img>
                       </Col>
                       <Col>
                           <img
                               alt="..."
                               className=" img-fluid"
                               src={require("assets/img/ic_client_4.png")}

                           ></img>
                       </Col>

                   </Row>
                </Container>
            </div>
        </>
    );
}

export default NucleoIcons;
