import React from "react";

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import MainSprint from "../index-sections/MainSprint";
import OurSercives from "../index-sections/OurSercives";
import MulaiBersama from "../index-sections/MulaiBersama";
import OurTechnologies from "../index-sections/OurTechnologies";
import OurClients from "../index-sections/OurClients";
import Bantuan from "../index-sections/Bantuan";
import Footer from "../index-sections/Footer";
import MainSprintWeb from "../index-sections/MainSprintWeb";

function webPage() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("web-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("web-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <ExamplesNavbar/>
            <div className="wrapper">
                <div className="main">
                    <MainSprintWeb/>
                    <OurSercives/>
                    <MulaiBersama/>
                    <OurTechnologies/>
                    <OurClients/>
                    <Bantuan/>
                    <Footer/>
                </div>

                <DefaultFooter/>
            </div>
        </>
    );
}

export default WebPage;
