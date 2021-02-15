import React from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import DefaultFooter from "../../components/Footers/DarkFooter";
import MulaiBersama from "../index-sections/MulaiBersama";
import OurClients from "../index-sections/OurClients";
import OurSercives from "../index-sections/OurSercives";
import MainSprint from "../index-sections/MainSprint";
import OurTechnologies from "../index-sections/OurTechnologies";
import Bantuan from "../index-sections/Bantuan";

function LandingPage() {
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
            <ExamplesNavbar/>
            <div className="wrapper">
                <div className="main">
                    <MainSprint/>
                    <OurSercives/>
                    <MulaiBersama/>
                    <OurTechnologies/>
                    <OurClients/>
                    <Bantuan/>
                </div>

                <DefaultFooter/>
            </div>
        </>
    );
}

export default LandingPage;
