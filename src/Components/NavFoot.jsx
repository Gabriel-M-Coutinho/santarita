import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function NavFoot() {
  return (
    <Container fluid>
      <Row className="Cartão BackColor">
        <Col xs={2}>
          <Card.Text className="TextCard">
            <strong>Informação</strong>
          </Card.Text>
        </Col>
        <Col xs={2}>
          <Card.Text className="TextCard">
            <strong>Informação</strong>
          </Card.Text>
        </Col>
        <Col xs={2}>
          <Card.Text className="TextCard">
            <strong>Informação</strong>
          </Card.Text>
        </Col>
        <Col xs={6}>
          <Card.Text className="TextCard">
            <strong>Logo</strong>
          </Card.Text>
        </Col>
      </Row>
    </Container>
  );
}

export default NavFoot;
