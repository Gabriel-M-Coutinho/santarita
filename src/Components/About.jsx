import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <div className="AboutBack FontFamily WallAbout">
      <Container>
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
          <Col xs={5}>
            <img
              className="AboutLogo"
              src="https://previews.dropbox.com/p/thumb/AB5JW9Muxft9KOetoKqgbNY7cwkpCylaNKAi-kLYaQo-4g-N7hswbeq_x4vdWIo7IVaRzhBvf547l7wU2Dm00Jlm64QqI4nHjU5aSMv9UzhiTrt02zvLD_yYdSMbguWWdxQW2gSlAlbAyOHtjYt45j3MUqvQfecfOwSMLGrE07jbBQRJtmRxtKb9Hqn0fhLPQIPpF-lwPyOiBIl9gx1_PcQwVyTVNddiuPIyaSjQeEfNfOyGIzkxubCzYS7f3mSD6zriJ8TnXN3Nl_mKOskXBBprrLWm7CPsTK-eUCV0j99Reeacu2v_1NDGLTaVzE8wcKLgtt7WV2yGB76X1UeyRQhM48ut8eBpVuRmeWl0E2d0vlTtt0C5xwMKlC1DwSCdkQc/p.png"
              alt="aaa"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
