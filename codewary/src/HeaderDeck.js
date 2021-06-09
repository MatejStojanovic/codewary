import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import mobileApp from "./img/mobile_app_dev.svg";
import webApp from "./img/web_app_dev.svg";
import webPage from "./img/web_page_dev.svg";
import animation from "./img/hero_animation.svg";
import Navigation from "./Navigation";

const ServiceCards = ({}) => {
  return (
    <div className="header" id="home">
      <h2 className="header__title">
        <Navigation />
      </h2>
      <CardDeck className="header__text">
        <Col sm="6" md="5" lg="6" xl="4" xs="10">
          <Card body inverse className="card-header">
            <CardBody>
              <CardTitle className="header__text__primary">
                We build astonishing <p> software</p>
              </CardTitle>
              <CardText className="header__text__sub">
                Codewary offers solutions for both Web and mobile applications.
                We specialize in frontend technologies and communication with
                clients, making you our top priority.
                <p>
                  <a href="mailto:davor.stojanovic@codewary.com">
                    <button className="header__text__btn-cta" type="button">
                      Contact us
                    </button>
                  </a>
                </p>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" md="6" lg="6" xl="4" xs="10">
          <Card body inverse>
            <CardBody>
              {
                <object
                  type="image/svg+xml"
                  data={animation}
                  className="header-animation"
                ></object>
              }
            </CardBody>
          </Card>
        </Col>
      </CardDeck>
    </div>
  );
};

export default ServiceCards;
