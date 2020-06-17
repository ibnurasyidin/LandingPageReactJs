import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
    
      <ExamplesNavbar />
      
      <div className="wrapper">
    
        <div className="separator separator-primary"></div>
        <div className="section section-story-overview">
        <div className="section ">
          <Container>
        <Row>
            <Col md="8" className="zIndex">
              
              <h2 className="title title-padding-top">Partner dan Layanan Informasi Teknologi untuk Bisnis Kamu</h2>
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
            
          
             <Col  md="4">
                 
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
        <Col md="4" >
                 
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
  <Button className="btn-round round-postion text-center" color="info" outline type="button" size="lg">
                Mulai
              </Button>
              </div>
         </Container>
           </div>
           <div className="section section-story-overview">
        <div className="section background">
          <Container>
        <Row>
        <Col md="4" >
                 
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
        
        <div className="section section-about-us">
        <LandingPageHeader /> 
          <Container>
         
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Tajriy1</h2>
                <h5 className="description">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Over the span of the satellite record, Arctic sea ice has
                      been declining significantly, while sea ice in the
                      Antarctichas increased very slightly" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg3.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </h3>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                  <p>
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </p>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="category text-info">Model</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Designer</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with us?</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
