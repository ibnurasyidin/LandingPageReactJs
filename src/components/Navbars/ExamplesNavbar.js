import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip, Button
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop <400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand>
          <img
                      alt="..."
                      className="rounded-circle img-fluid "
                      src={require("assets/img/logo-tajriy.png")}
                      width="60" height="60"
                    ></img>
                    </NavbarBrand>
            <NavbarBrand
              href="#"
              target="_blank"
              style={{fontFamily:"emoji !important"}}
            >
             Tajriy
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                 Website
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                  Aplikasi Mobile
                </NavLink>
              </NavItem>
              <NavItem className="">
                <span className="badge badge-primary mt-n2" style={{position:"absolute", fontsize:"8px", border: "8px", padding:"-5do"}}>Free</span>
                <NavLink className=""
                    href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                  <p>Minta Meeting</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                  Portofolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
              <Button
                  className="btn-round mr-2"
                  color="success"
                  //href="/nucleo-icons"
                  size="sm"
                  //style="margin-top: 5px;"
                  target="_blank"
              >
                Hubungi Kami
              </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
