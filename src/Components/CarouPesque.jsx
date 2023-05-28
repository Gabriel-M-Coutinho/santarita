import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouPesque() {
  return (
    <Container fluid className="Carrossel BackColor" id="Pesque">
      <Row className="Centro">
        <h3 className="CarroHeader FocusIn">Pesqueiro</h3>
        <h6 className="CarroText FocusInDaley">
          Descubra o paraíso dos pescadores: venha viver uma experiência única
          em nosso deslumbrante pesqueiro!
        </h6>
      </Row>
      <div className="FocusInDaley">
        <Carousel fade>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Pesqueiro/pesqueiro1.jpg"
              alt="pesqueiro1"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Pesqueiro/pesqueiro2.jpg"
              alt="pesqueiro2"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Pesqueiro/pesqueiro3.jpg"
              alt="pesqueiro3"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Pesqueiro/pesqueiro4.jpg"
              alt="pesqueiro4"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Pesqueiro/pesqueiro5.jpg"
              alt="pesqueiro5"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Pesqueiro/pesqueiro6.jpg"
              alt="pesqueiro6"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default CarouPesque;
