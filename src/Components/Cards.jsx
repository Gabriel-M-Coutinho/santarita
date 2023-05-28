import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Link from "next/link";

function Cards() {
  return (
    <Container id="Cards">
      <Row style={{ margin: "50px 0px" }} className="Centro FontFamily">
        <Col>
          <Card className="Centro Cartão FocusInDaley">
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
              <Link href="/infos#Pesque">
                <button className="Botão BackColor">Saiba +</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Centro Cartão FocusInDaley">
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
              <Link href="/infos#Hospe">
                <button className="Botão BackColor">Saiba +</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Centro Cartão FocusInDaley">
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
              <Link href="/infos#Restau">
                <button className="Botão BackColor">Saiba +</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
