import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import JanelaModal from "./Modal";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="md"
      collapseOnSelect
      className="BarraNav justify-content-between FontFamily"
      id="Navbar"
    >
      <Container fluid>
        <Row className="Centro">
          <Col xs={1} style={{ marginLeft: "-15px" }}>
            <Link href="/" className="GapHori">
              <Image
                className="NavLogo link"
                src="/img/logoazul.png"
                alt="Santa Rita Gigantes"
              />
            </Link>
          </Col>
          <Col>
            <Navbar.Collapse
              id="navbarScroll"
              className="HideScroll"
              style={{ width: "109%" }}
            >
              <Nav className="me-auto my-2 my-lg-0 Centro" navbarScroll>
                <Link className="NavLink TextColor" href="/#Cards">
                  Sobre
                </Link>
                <Link className="NavLink TextColor" href="/#Opening">
                  Funcionamento
                </Link>
                <Link className="NavLink TextColor" href="/infos">
                  Infos
                </Link>
                <Link className="NavLink TextColor" href="/#Social">
                  Social
                </Link>
              </Nav>
              <JanelaModal />
            </Navbar.Collapse>
          </Col>
          <Col xs={1} className="ToggleDir" style={{ marginRight: "-18px" }}>
            <Navbar.Toggle
              className="me-auto my-2 my-lg-0"
              aria-controls="navbarScroll"
              style={{ padding: "5px" }}
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
