import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Link from "next/link";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="md"
      className="BarraNav justify-content-between FontFamily"
      id="Navbar"
    >
      <Container fluid>
        <Col className="Centro">
          <Navbar.Collapse id="navbarScroll" className="HideScroll">
            <Link href="/">
              <Image
                className="NavLogo"
                src="/img/logoazul.png"
                alt="Santa Rita Gigantes"
              />
            </Link>
            <Link className="link" href="/">
              <h6 className="NameBrand TextColor">SANTA RITA</h6>
              <h5 className="NameBrand TextColor">GIGANTES</h5>
            </Link>

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
            <button className="Botão Espace BackColor">Contato</button>
          </Navbar.Collapse>
        </Col>
      </Container>
      <Col className="ToggleDir GapHori">
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Col>
    </Navbar>
  );
}

export default NavBar;
