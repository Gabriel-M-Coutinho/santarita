import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function NavFoot() {
  return (
    <Container fluid id="Navfoot">
      <Row className="navFoot Cartão BackColor">
        <Col xs={2}>
          <div className="InfosFoot">
            <strong>Contato</strong>
            <div>(00) 0000-0000</div>
            <div>info@peixeiro.com</div>
          </div>
        </Col>
        <Col xs={2}>
          <div className="InfosFoot">
            <strong>Endereço</strong>
            <div>Rod. Benevenuto Moretto km 6,5 - Bragança Pta</div>
          </div>
        </Col>
        <Col xs={2}>
          <div className="InfosFoot">
            <strong>Horário</strong>
            <div>Todos os dias</div>
            <div>Das 07:00 as 17:00</div>
          </div>
        </Col>
        <Col xs={6} className="ToggleDir">
          <Image
            className="FootLogo d-flex align-items-center"
            src="/img/logobranca.png"
            alt="Santa Rita Gigantes"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NavFoot;
