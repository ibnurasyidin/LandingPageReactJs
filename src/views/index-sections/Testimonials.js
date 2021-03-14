import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

// core components

function Testimonials() {
    return (
        <>
            <div className="section d-flex justify-content-between">
                <Container className="justify-content-center">
                    <h2 className="title text-center">Ini yang mereka katakan...</h2>
                   <div className="space-50"></div>
                    <div className="d-flex justify-content-center ">
                    <div className="w-50 shadow">
                        <blockquote>
                            <p className="text-center m-3 mt-5">
                                "I will be the leader of a company that ends up being
                                worth billions of dollars, because I got the answers. I
                                understand culture. I am the nucleus. I think that’s a
                                responsibility that I have, to push possibilities, to show
                                people, this is the level that things could be at."{" "}
                                <br></br>
                                <br></br>
                                <small>- Noaa</small>
                            </p>
                        </blockquote>
                    </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Testimonials;
