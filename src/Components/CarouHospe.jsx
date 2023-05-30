import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouHospe() {
  return (
    <Container fluid className="Carrossel BackColor" id="Hospe">
      <Row className="CarroTextDiv">
        <h3 className="CarroHeader FocusIn">Hospedagem</h3>
        <h6 className="CarroText FocusInDaley">
          Fuja da rotina e mergulhe em um refúgio perfeito: desfrute de
          conforto, tranquilidade e hospitalidade excepcionais em nossa
          acolhedora hospedagem.
        </h6>
      </Row>
      <Container className="FocusInDaley">
        <Row>
          <Col>
            <Carousel fade className="LeftLessGap">
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Hospedagem/hospedagem1.jpg"
                  alt="hospedagem1"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Hospedagem/hospedagem2.jpg"
                  alt="hospedagem2"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col>
            <Carousel fade>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Hospedagem/hospedagem3.jpg"
                  alt="hospedagem3"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Hospedagem/hospedagem4.jpg"
                  alt="hospedagem4"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col>
            <Carousel fade className="RightLessGap">
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Hospedagem/hospedagem5.jpg"
                  alt="hospedagem5"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Hospedagem/hospedagem6.jpg"
                  alt="hospedagem6"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CarouHospe;
