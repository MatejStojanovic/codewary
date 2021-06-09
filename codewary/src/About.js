import ScrollAnimation from "react-animate-on-scroll";
import Animation2 from "./img/tv_animation.svg";
import { Container, Row, Col, CardBody, CardText, Card } from "reactstrap";
function About() {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn">
        <Container className="about-us" fluid id="about">
          <Row>
            <Col className="about-us__title">About us </Col>
          </Row>
          <Row>
            <Col
              sm="11"
              md="10"
              lg="5"
              xl="5"
              xs="11"
              className="about-us__animation"
            >
              {
                <object
                  type="image/svg+xml"
                  data={Animation2}
                  className="about-animation"
                  width="70%"
                  height="70%"
                ></object>
              }
            </Col>
            <Col sm="12" md="12" lg="6" xl="5" xs="12">
              <Card>
                <CardBody>
                  <CardText className="about-us__text">
                    <div className="about-us__text2">
                      We are a startup founded in 2021, in Croatia, Zagreb. Our
                      team consists of developers with over 8 years of
                      experience in both Web and mobile development. We
                      expertise in communication with clients, combining our
                      knowledge and experience with your ideas. We will always
                      put emphasis on the client, providing you with the best
                      customer service and the highest quality software
                      solutions.
                    </div>
                    <a href="mailto:davor.stojanovic@codewary.com">
                      <button className="about-us__button" type="button">
                        Let's talk
                      </button>
                    </a>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </ScrollAnimation>
    </>
  );
}

export default About;
