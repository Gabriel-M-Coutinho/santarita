import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Link from "next/link";

function NavFoot() {
  return (
    <Container fluid id="Navfoot">
      <Row className="navFoot Cartão BackColor">
        <Col>
          <div className="InfosFoot">
            <strong>Contato</strong>
            <div>(11)99348 - 0155</div>
            <div>(11)98782 - 6354</div>
            <div>pesqueirosantaritagigantes1.0@gmail.com</div>
          </div>
          <p className="InfosFoot" style={{ margin: "10px 0px 0px -20px" }}>
            <Link
              className="NavLink BackColor"
              href="https://www.wowcreations.com.br"
            >
              <strong>by WOWCreations</strong>
            </Link>
          </p>
        </Col>
        <Col>
          <div className="InfosFoot">
            <strong>Horário</strong>
            <div>Todos os dias</div>
            <div>Das 07:00 as 17:00</div>
          </div>
        </Col>
        <Col>
          <div className="InfosFoot">
            <strong>Endereço</strong>
            <div>Rod. Benevenuto Moretto</div>
            <div>km 6,5 - Bragança Pta</div>
          </div>
        </Col>
        <Col className="ToggleDir">
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
