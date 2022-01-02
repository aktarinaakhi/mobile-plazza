import React from "react";
import contactNow from "./../assets/images/contact.png";
import { Col, Container, Row } from "react-bootstrap";
import "./../assets/css/footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
          <Col sm={12} md={6} lg={4}>
              <Zoom>
                <h4 className="col-title">Pay us with</h4>
                <img width="100%" src={contactNow} alt="" />
              </Zoom>
            </Col>
           
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">CUSTOMER SERVICE</h4>
                <ul className="information">
                  <li>
                    <a href="/home">FAQs</a>
                  </li>
                  <li>
                    <a href="/home">MyTimeZone</a>
                  </li>
                  <li>
                    <a href="/home">Store Locator</a>
                  </li>
                  <li>
                    <a href="/home">All About Feet</a>
                  </li>
                  <li>
                    <a href="/home">Contact Info</a>
                  </li>
                  <li>
                    <a href="/home">Delivery</a>
                  </li>
                </ul>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Reach us</h4>

                <ul className="information contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: phonopia@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +887888-00000
                  </li>
                  <li>
                    <i className="fas fa-fax"></i>
                    Fax: 4988200000
                  </li>
                </ul>
              </Zoom>
            </Col>{" "}
           
          </Row>
        </Container>
      </div>
      <div className="footer">
        <p className="text-center">Copyright &copy; All reserved</p>
      </div>
    </>
  );
};

export default Footer;
