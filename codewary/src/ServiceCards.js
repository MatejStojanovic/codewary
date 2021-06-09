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

const ServiceCards = ({}) => {
  return (
    <div className="services" id="services">
      <h2 className="services__title"> Our services</h2>
      <CardDeck>
        <Col sm="12" md="6" lg="8" xl="4" xs="12">
          <Card
            body
            inverse
            style={{
              height: "52rem",
            }}
            className="card-services"
          >
            <CardImg src={webPage} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h1">Web page</CardTitle>
              <CardText>
                Need a simple Web page for personal matters or maybe for your
                business? We provide you with best solutions following latest UI
                design principles.{" "}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="8" xl="4" xs="12">
          <Card
            body
            inverse
            style={{
              height: "52rem",
            }}
            className="card-services"
          >
            <CardImg src={webApp} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h1" style={{ marginTop: "" }}>
                Web application
              </CardTitle>
              <CardText>
                Our team creates high-quality, stunning and responsive Web
                applications and Webshops for any purpose you want.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="8" lg="8" xl="4" xs="12">
          <Card
            body
            inverse
            style={{
              height: "52rem",
            }}
            className="card-services"
          >
            <CardImg src={mobileApp} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h1" className="services__mobile-app">
                Mobile app
              </CardTitle>{" "}
              <CardText>
                Expand your business and reach your customers via Android
                application. We will tailor your application by your needs.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </CardDeck>
    </div>
  );
};

export default ServiceCards;
