import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Opening() {
  return (
    <Container fluid>
      <Row style={{ margin: "50px 0px" }} className="FontFamily">
        <Col>
          <Card className="Centro Cartão">
            <Card.Body>
              <h3>
                <strong>Local e horários</strong>
              </h3>
              <Card.Text className="TextCard">
                Rod. Benevenuto Moretto km 6,5 - Bragança Pta
              </Card.Text>
              <Card.Text className="TextCard">
                ABERTO TODOS OS DIAS AS:
              </Card.Text>
              <p className="TextCard">
                <strong>07:00 as 17:00</strong>
              </p>
            </Card.Body>
          </Card>
          <Card className="Centro Cartão BackColor">
            <Card.Body>
              <h3>
                <strong>O que proporcionamos:</strong>
              </h3>
              <div style={{ textAlign: "start" }}>
                <Row>
                  <Col>
                    <Card.Text className="TextCard">
                      <strong>Shows ao vivo com artistas convidados</strong>
                    </Card.Text>
                  </Col>
                  <Col xs={7}>
                    <Card.Text className="SMTextCard">
                      Nós entendemos que a música é capaz de criar uma atmosfera
                      especial e agregar ainda mais diversão aos nossos eventos.
                      Por isso, regularmente oferecemos shows ao vivo com
                      artistas talentosos que trazem sua paixão e habilidades
                      musicais para encantar nossos visitantes.
                    </Card.Text>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card.Text className="TextCard">
                      <strong>Competições e premiações</strong>
                    </Card.Text>
                  </Col>
                  <Col xs={7}>
                    <Card.Text className="SMTextCard">
                      Se você é apaixonado por desafios e busca testar suas
                      habilidades de pesca, nossas competições são perfeitas
                      para você. Organizamos torneios regulares, nos quais
                      pescadores de todas as idades e níveis de experiência
                      podem participar e competir por prêmios valiosos. As
                      competições são projetadas para proporcionar diversão,
                      camaradagem e um ambiente amigável de competição saudável.
                    </Card.Text>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card.Text className="TextCard">
                      <strong>Segurança e conforto para as crianças</strong>
                    </Card.Text>
                  </Col>
                  <Col xs={7}>
                    <Card.Text className="SMTextCard">
                      Compreendemos a importância de proporcionar um ambiente
                      seguro para que as crianças possam desfrutar plenamente de
                      sua estadia conosco. Nossas instalações são projetadas com
                      medidas de segurança em mente, garantindo que os pequenos
                      possam se divertir sem preocupações.
                    </Card.Text>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Opening;
