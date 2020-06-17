import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="wrapper">
      <div className="section-full-screen" >
        <Container>
          <Row>
            <Col md="4">
              <h4 className="title">Partner dan Layanan Informasi Teknologi untuk Bisnis Kamu</h4>
              <h5 className="description">
              Dapatkan akses langsung ke tim kami sebagai partner
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
             <Col  md="4">
           {/* <img 
                alt="..."
                 className="img-fluid content-center"
                      src={require("assets/img/tajriy-work.png")}
                      
                      width="400" height="400"
                    ></img>  */}
                 
                 <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  
            </Col> 
          </Row>
        </Container>
      </div>
      </div>
    </>
  );
}

export default NucleoIcons;
