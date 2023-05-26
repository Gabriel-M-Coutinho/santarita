import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

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
            <img
              className="NavLogo"
              src="https://previews.dropbox.com/p/thumb/AB4c11OMEjUB-6v1yafnQc-HokWTtFgd1e59ajwZ0jdEknUX_R8DoqMhZyL9OkKN5sN1P6f6MLwHH_t4Fps2s57vHD41uQ38YupkBPjRIWRjKtoIfocSSCXNiK3qnR3BPzmjZcbiN129V6nf-LolXFigmL8RjEiHNDZwAUQLsyJW2q8hbDnShwHrUYSpEeQ8G8bUcTeCZecDNH8G4SovjQl5MB0j8uMA8txQ_sgm-qf4BMxxR0rFve6f05rW0KaSN2sOOltqj8czvagpakKgE1EzpDR7Fa7mxWj8KhDZUakmt9Si7u1CQ2Y98-LMP6jOgQkstT4D-RwPet0liKyC48efpd5VvargofB5AddJtE96ILDYssUq-rTdozKpYIMycJE/p.png"
              alt="aaa"
            ></img>
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
