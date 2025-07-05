import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiFileList2Line } from "react-icons/ri";

const BottomNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Nav className="fixed-bottom">
          <Col xs={3} sm={3} md={3}>
            <Nav.Link
              aria-label="Home"
              href="#home"
              className="text-secondary fs-5 text-center"
            >
              <FaHouse />
            </Nav.Link>
          </Col>
          <Col xs={3} sm={3} md={3}>
            <Nav.Link href="#link1" className="text-secondary fs-5 text-center">
              <RiFileList2Line />
            </Nav.Link>
          </Col>

          <Col xs={3} sm={3} md={3}>
            <Nav.Link href="#link1" className="text-secondary fs-5 text-center">
              <HiMiniWrenchScrewdriver />
            </Nav.Link>
          </Col>
          <Col xs={3} sm={3} md={3}>
            <Nav.Link href="#link4" className="text-secondary fs-5 text-center">
              <FaRegUser />
            </Nav.Link>
          </Col>
        </Nav>
      </Row>
    </Container>
  );
};

export default BottomNavbar;
