import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function Social() {
  return (
    <div className="FontFamily" id="Social">
      <h5 className="Centro FocusIn" style={{ marginTop: "70px" }}>
        <strong>Nos encontre nas redes:</strong>
      </h5>
      <Container className="GapVert Centro FocusInDaley">
        <Row style={{ marginBottom: "50px" }}>
          <Col className="Centro SocialLogo">
            <Image className="NavLogo" src="/icons/Face.png" alt="Facebook" />
          </Col>
          <Col className="Centro SocialLogo">
            <Image className="NavLogo" src="/icons/Insta.png" alt="Instagram" />
          </Col>
          <Col className="Centro SocialLogo">
            <Image className="NavLogo" src="/icons/Tel.png" alt="Telefone" />
          </Col>
          <Col className="Centro SocialLogo">
            <Image className="NavLogo" src="/icons/Whats.png" alt="Whatsapp" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="GapVert Centro FocusInDaley">
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro01.png"
            alt="pesqueiro01"
          />
        </div>
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro02.png"
            alt="pesqueiro02"
          />
        </div>
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro03.png"
            alt="pesqueiro03"
          />
        </div>
        <div className="NoGap">
          <Image
            className="IMGSocial"
            src="/img/pesqueiro04.png"
            alt="pesqueiro04"
          />
        </div>
      </Container>
    </div>
  );
}

export default Social;
