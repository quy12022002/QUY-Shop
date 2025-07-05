import {
  Button,
  Col,
  Container,
  Dropdown,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import {
  FaDollarSign,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegArrowAltCircleRight,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <header>
        {/* TOP HEADER */}
        <div id="top-header" className="py-1">
          <Container>
            <Nav className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <Nav.Link href="#home">
                  <FaPhoneAlt className="icon-top-header" /> +021-95-51-84
                </Nav.Link>
                <Nav.Link href="#home">
                  <MdOutlineEmail className="icon-top-header" /> email@email.com
                </Nav.Link>
                <Nav.Link href="#home">
                  <FaMapMarkerAlt className="icon-top-header" /> 1734 Stonecoal
                  Road
                </Nav.Link>
              </div>
              <div className="d-flex align-items-center">
                <Nav.Link href="#home">
                  <FaDollarSign className="icon-top-header" /> USD
                </Nav.Link>
                <Nav.Link href="#home">
                  <FaUser className="icon-top-header" /> My Account
                </Nav.Link>
              </div>
            </Nav>
          </Container>
        </div>
        {/* /TOP HEADER */}

        {/* MAIN HEADER */}
        <div id="header" className="pt-1">
          <Container>
            <Row>
              {/* LOGO */}
              <Col xs={12} sm={12} md={12} lg={3} className="header-logo col-3">
                <div>
                  <a href="#">
                    <img
                      src="src/assets/logo.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </Col>
              {/* /LOGO */}
              {/* SEARCH BAR */}
              <Col xs={12} sm={12} md={12} lg={6} className="col-3">
                <div className="py-4">
                  <form className="position-relative d-flex">
                    <select className="input-select">
                      <option value="0">All Categories</option>
                      <option value="1">Category 01</option>
                      <option value="1">Category 02</option>
                    </select>
                    <input className="input" placeholder="Search here" />
                    <Button type="submit" className="search-btn">
                      Search
                    </Button>
                  </form>
                </div>
              </Col>
              {/* /SEARCH BAR */}

              {/* ACCOUNT */}
              <Col xs={12} sm={12} md={12} lg={3} className="clearfix col-3">
                <div className="header-ctn d-flex">
                  {/* WISHLIST */}
                  <div className="wishlist">
                    <a href="#" className="text-decoration-none p-4">
                      <Row>
                        <Col className="col-12">
                          <CiHeart className="icon-wishlist" />
                          <div className="qty">2</div>
                        </Col>
                        <Col className="col-12">
                          <span>Your Wishlist</span>
                        </Col>
                      </Row>
                    </a>
                  </div>

                  {/* CART */}
                  <Dropdown drop="down">
                    <Dropdown.Toggle
                      variant="link"
                      className="items-dropdown text-decoration-none p-4"
                      id="dropdown-basic"
                    >
                      <Row>
                        <Col className="col-12">
                          <PiShoppingCartThin className="icon-yourcard" />
                          <div className="qty">3</div>
                        </Col>
                        <Col className="col-12">
                          <span>Your Cart</span>
                        </Col>
                      </Row>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="items-dropdown-menu">
                      <Dropdown.Item className="p-0">
                        <div className="cart-list p-2 mb-0">
                          {/* Cart */}
                          <div className="product-widget d-flex">
                            <div className="product-img me-2">
                              <img
                                src="src/assets/product01.png"
                                alt="logo product"
                                width="60"
                                height="60"
                              />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name">
                                <a
                                  href="#"
                                  className="text-decoration-none text-black text-uppercase"
                                >
                                  product name goes here
                                </a>
                              </h3>
                              <h4 className="product-price">
                                <span className="">1x</span> $980.00
                              </h4>
                            </div>
                            <Button className="btn btn-remove-item">
                              <FaTimes />
                            </Button>
                          </div>
                          {/* /Cart */}
                        </div>
                      </Dropdown.Item>

                      <Dropdown.Item disabled>
                        <div className="cart-summary">
                          <small className="fw-lighter">
                            3 Item(s) selected
                          </small>
                          <h6 className="text-black">SUBTOTAL: $2940.00</h6>
                        </div>
                      </Dropdown.Item>

                      <Dropdown.Item className="pt-0">
                        <div className="cart-btns">
                          <a href="#">View Cart</a>
                          <a href="#">
                            Checkout <FaRegArrowAltCircleRight />
                          </a>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
              {/* /ACCOUNT */}
            </Row>
          </Container>
          <Navbar expand="lg" className="custom-navbar">
            <Container className="p-0">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="custom-toggle"
              >
                <Row>
                  <Col className="col-12 p-0">
                    <FiMenu />
                  </Col>
                  <Col className="col-12 p-0">Menu</Col>
                </Row>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Hot Deals</Nav.Link>
                  <Nav.Link href="#link1">Laptops</Nav.Link>
                  <Nav.Link href="#link2">Smartphones</Nav.Link>
                  <Nav.Link href="#link3">Cameras</Nav.Link>
                  <Nav.Link href="#link4">Accessories</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* /MAIN HEADER */}
      </header>
    </>
  );
};

export default Header;
