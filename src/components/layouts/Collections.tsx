import { Col, Container, Row } from "react-bootstrap";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Collections = () => {
  return (
    <div className="collections-container">
      <Container>
        <Row>
          {/* <!-- shop --> */}
          <Col xs={6} sm={6} md={4} lg={4}>
            <div className="shop">
              <div className="shop-img">
                <img src="src/assets/shop01.png" className="img-fluid" alt="" />
              </div>
              <div className="shop-body">
                <h3>
                  Laptop
                  <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn text-decoration-none">
                  Shop now <FaRegArrowAltCircleRight />
                </a>
              </div>
            </div>
          </Col>
          {/* <!-- /shop --> */}
        </Row>
      </Container>
    </div>
  );
};

export default Collections;
