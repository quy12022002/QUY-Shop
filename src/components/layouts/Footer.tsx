import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import facebookLogo from "../../assets/images/facebook_logo.png";
import tiktokLogo from "../../assets/images/tiktok-logo.png";
import youtobeLogo from "../../assets/images/youtube_logo.png";
import zaloLogo from "../../assets/images/zalo_logo.png";
import groupLogo from "../../assets/images/group_logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-container pt-2">
          <Col sx={12} sm={12} md={12} lg={2}>
            <h4 className="footer-title">Connect with us</h4>
          </Col>
          <Col sx={12} sm={12} md={6} lg={5} className="py-3">
            <Nav>
              <Nav.Link>
                <img className="img-fluid" src={facebookLogo} alt="QuyShop" />
              </Nav.Link>
              <Nav.Link>
                <img className="img-fluid" src={tiktokLogo} alt="QuyShop" />
              </Nav.Link>
              <Nav.Link>
                <img className="img-fluid" src={youtobeLogo} alt="QuyShop" />
              </Nav.Link>
              <Nav.Link>
                <img className="img-fluid" src={zaloLogo} alt="QuyShop" />
              </Nav.Link>
              <Nav.Link>
                <img className="img-fluid" src={groupLogo} alt="QuyShop" />
              </Nav.Link>
            </Nav>
          </Col>
          <Col sx={12} sm={12} md={6} lg={5}>
            <p className="m-0">
              © 2025 copyright all right reserved by DoXuanQuy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
