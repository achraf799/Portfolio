import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../Assets/homepic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  useEffect(() => {
    // Dynamically create and append the chatbot script
    const script = document.createElement("script");
    script.id = "messenger-widget-b";
    script.src = "https://cdn.botpenguin.com/website-bot.js";
    script.defer = true;
    script.innerHTML = "676b3f87b57ceddd2b2831eb,67672a9c29c567839c9452c9"; // Updated bot initialization parameters
  
    // Append the script to the body
    document.body.appendChild(script);
  
    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ACHRAF PROD</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeImg} // Reference the image you imported earlier
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                alt="home-pic"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
