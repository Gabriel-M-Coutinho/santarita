import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouRestau() {
  return (
    <Container fluid className="Carrossel BackColor" id="Restau">
      <Row className="Centro">
        <h3 className="CarroHeader FocusIn">Restaurante</h3>
        <h6 className="CarroText FocusInDaley">
          Desperte seus sentidos com uma explosão de sabores: delicie-se em
          nosso restaurante e descubra uma experiência gastronômica
          inesquecível.
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
              src="/img/Restaurante/restaurante1.jpg"
              alt="restaurante1"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Restaurante/restaurante2.jpg"
              alt="restaurante2"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Restaurante/restaurante3.jpg"
              alt="restaurante3"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Restaurante/restaurante4.jpg"
              alt="restaurante4"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Restaurante/restaurante5.jpg"
              alt="restaurante5"
            />
          </Carousel.Item>
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Restaurante/restaurante6.jpg"
              alt="restaurante6"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default CarouRestau;
