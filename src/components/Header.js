import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./header.css";
import useToken from "../hooks/useToken";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const { loggedIn } = useToken();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img id="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/" disabled={pathname === "/"}>
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to="/issues" disabled={pathname === "/issues"}>
              Проблемы
            </Nav.Link>
            <NavDropdown title="О портале">
              <NavDropdown.Item href="/about/privacy">
                Политика конфиденциальности
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {!loggedIn ? (
          <Nav.Link as={Link} to="/login" disabled={pathname === "/login"}>
            Вход
          </Nav.Link>
        ) : (
          <Nav.Link onClick={onLogout}>
            Выход
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
