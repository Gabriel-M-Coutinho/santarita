import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div className="FontFamily WallAbout" id="About">
      <Container className="AboutBack GapHori">
        <Row>
          <Col className="GapHori">
            <h2 className="AboutText FocusIn">
              Frescor,<br></br>Autenticidade,<br></br>Simplicidade.
            </h2>
            <p className="AboutText FocusInDaley">
              No nosso estabelecimento, oferecemos uma experiência completa para
              os amantes da pesca, da boa comida e da tranquilidade de um local
              acolhedor. Situado em um cenário pitoresco, combinamos a emoção da
              pesca com o prazer de uma refeição deliciosa e o conforto de uma
              estadia agradável.
            </p>
          </Col>
          <Col xs={5} className="MarginLogo d-flex align-items-center">
            <Image
              className="AboutLogo FocusInDaley"
              src="/img/logobranca.png"
              alt="Santa Rita Gigantes"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
