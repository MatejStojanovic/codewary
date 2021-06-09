import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import scrollToComponent from "./ScrollToElement";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
        <MDBContainer
          className="text-center text-md-left"
          style={{ marginTop: "2rem" }}
        >
          <MDBRow className="text-center text-md-left mt-3 pb-3">
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Codewary Solutions
              </h5>
              <p>Here you can find useful info about us.</p>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Company</h5>
              <div className="footer__links">
                <p>
                  <a href="#!"></a>
                </p>
                <p>
                  <a onClick={() => scrollToComponent("home")}>Home</a>
                </p>
                <p>
                  <a onClick={() => scrollToComponent("services")}>Services</a>
                </p>
                <p>
                  <a onClick={() => scrollToComponent("about")}>About us</a>
                </p>
              </div>
            </MDBCol>
            <hr className="w-100 clearfix d-md-none" />
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold"> Contact</h5>
              <p>Ulica Ivice Drmića 16, Zagreb</p>
              <p>davor.stojanovic@codewary.com</p>
              <p>+385 98 746 161</p>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="d-flex align-items-center">
            <MDBCol md="8" lg="8">
              <p
                className="text-center text-md-left grey-text"
                style={{ marginLeft: "6rem" }}
              >
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href=""> Codewary Solutions </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default Footer;
