import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouPesque() {
  return (
    <Container fluid className="Carrossel" id="Pesque">
      <Row className="CarroTextDiv">
        <h3 className="CarroHeader FocusIn TextColor">Pesqueiro</h3>
        <h6 className="CarroText FocusInDaley">
          Descubra o paraíso dos pescadores: venha viver uma experiência única
          em nosso deslumbrante pesqueiro!
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
                  src="/img/Pesqueiro/pesqueiro1.jpg"
                  alt="pesqueiro1"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Pesqueiro/pesqueiro2.jpg"
                  alt="pesqueiro2"
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
                  src="/img/Pesqueiro/pesqueiro3.jpg"
                  alt="pesqueiro3"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Pesqueiro/pesqueiro4.jpg"
                  alt="pesqueiro4"
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
                  src="/img/Pesqueiro/pesqueiro5.jpg"
                  alt="pesqueiro5"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Pesqueiro/pesqueiro6.jpg"
                  alt="pesqueiro6"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CarouPesque;
