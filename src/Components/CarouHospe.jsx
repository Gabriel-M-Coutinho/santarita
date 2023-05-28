import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function CarouHospe() {
  return (
    <Container fluid className="Carrossel" id="Hospe">
      <Row className="Centro">
        <h3 className="CarroHeader FocusIn">Hospedagem</h3>
        <h6 className="CarroText FocusInDaley">
          Fuja da rotina e mergulhe em um refúgio perfeito: desfrute de
          conforto, tranquilidade e hospitalidade excepcionais em nossa
          acolhedora hospedagem.
        </h6>
      </Row>
      <div className="FocusInDaley">
        <Carousel fade variant="dark">
          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Hospedagem/hospedagem1.jpg"
              alt="hospedagem1"
            />
          </Carousel.Item>

          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Hospedagem/hospedagem2.jpg"
              alt="hospedagem2"
            />
          </Carousel.Item>

          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Hospedagem/hospedagem3.jpg"
              alt="hospedagem3"
            />
          </Carousel.Item>

          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Hospedagem/hospedagem4.jpg"
              alt="hospedagem4"
            />
          </Carousel.Item>

          <Carousel.Item
            className="d-flex justify-content-center"
            interval={1500}
          >
            <Image
              className="d-flex CarrosselItem rounded-circle"
              src="/img/Hospedagem/hospedagem5.jpg"
              alt="hospedagem5"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default CarouHospe;
