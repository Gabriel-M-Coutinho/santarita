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
              src="https://cdn-user-icons.flaticon.com/89477/89477285/1685118407448.svg?token=exp=1685119502~hmac=5ad6a61431c849e62b4cbeb102b36bef
              "
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
              src="https://cdn-user-icons.flaticon.com/89477/89477285/1685118408712.svg?token=exp=1685119502~hmac=9e02c4a34d56e5d162ac94ee8875a092"
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
              src="https://cdn-user-icons.flaticon.com/89477/89477285/1685118405651.svg?token=exp=1685119502~hmac=478cea3cd1cb90cd0cceb5dd85771cec"
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
