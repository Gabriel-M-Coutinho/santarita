import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Link from "next/link";

function Social() {
  return (
    <div className="FontFamily" id="Social">
      <h5 className="Centro FocusIn" style={{ marginTop: "70px" }}>
        <strong>Nos encontre nas redes:</strong>
      </h5>
      <Container className="GapVert Centro FocusInDaley">
        <Row style={{ marginBottom: "50px" }}>
          <Col className="Centro SocialLogo">
            <a
              className="link"
              style={{ marginLeft: "5px" }}
              href="https://www.facebook.com/pesqueirosantaritagigantes/"
              target="_blank"
            >
              <Image
                className="SocialLogo"
                src="/icons/Face.png"
                alt="Facebook"
              />
              <h6
                style={{color: "black", fontSize: "13px" }}
              >
                face
              </h6>
            </a>
          </Col>
          <Col className="Centro SocialLogo">
            <a
              className="link"
              style={{ marginLeft: "5px" }}
              href="https://www.instagram.com/pesqueirosantaritagigantes/"
              target="_blank"
            >
              <Image
                className="SocialLogo"
                src="/icons/Insta.png"
                alt="Instagram"
              />
              <h6
                style={{color: "black", fontSize: "13px" }}
              >
                Insta
              </h6>
            </a>
          </Col>
          <Col className="Centro SocialLogo">
            <a
              className="link"
              style={{ marginLeft: "5px" }}
              href="https://wa.me/5511993480155?text=Ola%2C+estou+entrando+em+contato+pelo+site+do+Santa+Rita+Gigantes+e+gostaria+de+saber+um+pouco+mais+sobre+o+pesqueiro."
              target="_blank"
            >
              <Image
                className="SocialLogo"
                src="/icons/Whats.png"
                alt="Whatsapp"
              />
              <h6
                style={{color: "black", fontSize: "12px" }}
              >
                Whats1
              </h6>
            </a>
          </Col>
          <Col className="Centro SocialLogo">
            <a
              className="link"
              style={{ marginLeft: "5px" }}
              href="https://wa.me/5511987826354?text=Ola%2C+estou+entrando+em+contato+pelo+site+do+Santa+Rita+Gigantes+e+gostaria+de+saber+um+pouco+mais+sobre+o+pesqueiro."
              target="_blank"
            >
              <Image
                className="SocialLogo"
                src="/icons/Whats.png"
                alt="Whatsapp"
              />
              <h6
                style={{color: "black", fontSize: "12px" }}
              >
                Whats2
              </h6>
            </a>
          </Col>
          <Col className="Centro SocialLogo">
            <a
              className="link"
              style={{ marginLeft: "5px" }}
              href="mailto:joaovitorfernandes9@hotmail.com"
              target="_blank"
            >
              <Image
                className="SocialLogo"
                src="/icons/Email.png"
                alt="Whatsapp"
              />
              <h6
                style={{color: "black", fontSize: "12px" }}
              >
                Email
              </h6>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Social;
