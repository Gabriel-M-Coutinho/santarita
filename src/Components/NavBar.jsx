import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="md"
      className="BarraNav justify-content-between FontFamily"
    >
      <Container fluid>
        <Col className="Centro">
          <Navbar.Collapse id="navbarScroll" className="HideScroll">
            <Image
              className="NavLogo"
              src="/img/logoazul.png"
              alt="aaa"
            ></Image>
            <Navbar.Brand href="#">
              <h6 className="NameBrand TextColor">SANTA RITA</h6>
              <h5 className="NameBrand TextColor">GIGANTES</h5>
            </Navbar.Brand>
            <Nav className="me-auto my-2 my-lg-0 Centro" navbarScroll>
              <a className="NavLink TextColor" href="#action1">
                Sobre
              </a>
              <a className="NavLink TextColor" href="#action2">
                Funcionamento
              </a>
              <a className="NavLink TextColor" href="#action3">
                Infos
              </a>
              <a className="NavLink TextColor" href="#action4">
                Social
              </a>
            </Nav>
            <button className="Botão Espace BackColor">Contato</button>
          </Navbar.Collapse>
        </Col>
      </Container>
      <Col className="ToggleDir">
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Col>
    </Navbar>
  );
}

export default NavBar;
