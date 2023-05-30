import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouRestau() {
  return (
    <Container fluid className="Carrossel" id="Restau">
      <Row className="CarroTextDiv">
        <h3 className="CarroHeader FocusIn">Restaurante</h3>
        <h6 className="CarroText FocusInDaley">
          Desperte seus sentidos com uma explosão de sabores: delicie-se em
          nosso restaurante e descubra uma experiência gastronômica
          inesquecível.
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
                  src="/img/Restaurante/restaurante1.jpg"
                  alt="restaurante1"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Restaurante/restaurante2.jpg"
                  alt="restaurante2"
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
                  src="/img/Restaurante/restaurante3.jpg"
                  alt="restaurante3"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Restaurante/restaurante4.jpg"
                  alt="restaurante4"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col className="RightLessGap">
            <Carousel fade>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Restaurante/restaurante5.jpg"
                  alt="restaurante5"
                />
              </Carousel.Item>
              <Carousel.Item
                className="d-flex justify-content-center"
                interval={2500}
              >
                <Image
                  className="d-flex CarrosselItem"
                  src="/img/Restaurante/restaurante6.jpg"
                  alt="restaurante6"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CarouRestau;
