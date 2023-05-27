import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div className=" FontFamily WallAbout">
      <Container className="AboutBack">
        <Row>
          <Col>
            <h2 className="AboutText">
              Frescor,<br></br>Autenticidade,<br></br>Simplicidade.
            </h2>
            <p className="AboutText">
              No nosso estabelecimento, oferecemos uma experiência completa para
              os amantes da pesca, da boa comida e da tranquilidade de um local
              acolhedor. Situado em um cenário pitoresco, combinamos a emoção da
              pesca com o prazer de uma refeição deliciosa e o conforto de uma
              estadia agradável.
            </p>
          </Col>
          <Col xs={5} className="MarginLogo">
            <Image
              className="AboutLogo"
              src="/img/logobranca.png"
              alt="aaa"
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
