import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Cards() {
  return (
    <Container>
      <Row style={{ margin: "50px 0px" }} className="Centro FontFamily">
        <Col>
          <Card className="Centro Cartão">
            <Card.Img
              className="IconeCard"
              variant="top"
              src="/icons/koifish.png"
            />
            <Card.Body>
              <h3 className="TituloCard">Pesqueiro</h3>
              <Card.Text className="TextCard">
                Descubra a emoção da pesca e a tranquilidade à beira do lago
              </Card.Text>
              <button className="Botão BackColor">Saiba +</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Centro Cartão">
            <Card.Img
              className="IconeCard"
              variant="top"
              src="/icons/fisher.png"
            />
            <Card.Body>
              <h3 className="TituloCard">Hospedagem</h3>
              <Card.Text className="TextCard">
                Desfrute de uma estadia relaxante e acolhedora em nossa pousada
              </Card.Text>
              <button className="Botão BackColor">Saiba +</button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Centro Cartão">
            <Card.Img
              className="IconeCard"
              variant="top"
              src="/icons/fishfood.png"
            />
            <Card.Body>
              <h3 className="TituloCard">Restaurante</h3>
              <Card.Text className="TextCard">
                Deleite-se com um cardápio irresistível em nosso restaurante
              </Card.Text>
              <button className="Botão BackColor">Saiba +</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
