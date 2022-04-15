import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Container id="footer" fluid>
      <Row>
        <Col className="footer-element" xs={12} sm={4}>
          <h3>Портал - проблема</h3>
          <p>Портал решения гордских проблем</p>
        </Col>
        <Col className="footer-element" xs={12} sm={4}>
          <h3>Страницы портала</h3>
          <ul>
            <li>
              <Link className={pathname === "/" ? "current" : ""} to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/issues" ? "current" : ""}
                to="/issues"
              >
                Проблемы
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/about/privacy" ? "current" : ""}
                to="/about/privacy"
              >
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="footer-element" xs={12} sm={4}>
          <h3>Внешние ссылки</h3>
          <ul>
            <li>
              <a target="_blank" rel="nofollow" href="https://vk.com">
                ВК: @issues
              </a>
            </li>
            <li>
              <a href="mailto:issues@gmail.com">Почта: issues@gmail.com</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-element">
          <div>&copy; Портал - Проблема 2022</div>
        </Col>
      </Row>
    </Container>
  );
};

// export default Footer;

export default () => null;
