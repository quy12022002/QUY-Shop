import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { DiVim } from "react-icons/di";
import { GoChevronRight } from "react-icons/go";
import Collections from "./Collections";

const data = [
  {
    id: 1,
    category: "Gaming Laptops",
    brands: [
      {
        id: 202,
        categoryarr: "Workstation Laptops1",
        namearr: [
          { id: 101, name: "MSI" },
          { id: 102, name: "ASUS" },
          { id: 103, name: "Acer" },
          { id: 1055, name: "MSI" },
          { id: 10255, name: "ASUS" },
          { id: 1035, name: "Acer" },
        ],
      },
      {
        id: 203,
        categoryarr: "Workstation Laptops6",
        namearr: [
          { id: 401, name: "Lenovo" },
          { id: 402, name: "Dell" },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Business Laptops",
    brands: [
      {
        id: 204,
        categoryarr: "Workstation Laptops2",
        namearr: [
          { id: 501, name: "HP" },
          { id: 502, name: "Dell" },
        ],
      },
      {
        id: 205,
        categoryarr: "Workstation Laptops8",
        namearr: [
          { id: 601, name: "Lenovo" },
          { id: 602, name: "Microsoft" },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Workstation Laptops",
    brands: [
      {
        id: 206,
        categoryarr: "Workstation Laptops10",
        namearr: [
          { id: 701, name: "Apple" },
          { id: 702, name: "HP" },
        ],
      },
      {
        id: 207,
        categoryarr: "Workstation Laptops9",
        namearr: [
          { id: 801, name: "MSI" },
          { id: 802, name: "Dell" },
        ],
      },
    ],
  },
];

const Category: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [checkMouse, setCheckMouse] = useState<boolean>(false);

  const handleMouseEnter = (categoryId: number) => {
    const product = data.find((item) => item.id === categoryId);
    setCheckMouse(true);
    setSelectedProduct(product);
  };

  const handleMouseLeave = () => {
    setCheckMouse(false);
    setSelectedProduct(null); // onMouseLeave={handleMouseLeave}
  };

  return (
    <Container>
      <Row>
        <Col className="col-3 category-top">
          <Container className="pt-2">
            <Nav>
              <Row>
                {data.map((item) => (
                  <Col className="col-12 col-nav-item">
                    <Nav.Link
                      key={item.id}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                      href="#home"
                      className="d-flex justify-content-between align-items-center"
                    >
                      {item.category} (ID: {item.id})
                      <GoChevronRight />
                      <div className="arrow-indicator" />
                    </Nav.Link>
                  </Col>
                ))}
              </Row>
            </Nav>
          </Container>
        </Col>
        <Col md={9} lg={9} className="categoryinfo-container">
          {checkMouse ? (
            <>
              {selectedProduct && (
                <Container className="pt-3">
                  <Row>
                    {selectedProduct.brands.map((brandGroup: any) => (
                      <Col key={brandGroup.id} md={6}>
                        <Nav className="flex-column">
                          <h5>{brandGroup.categoryarr}</h5>
                          {brandGroup.namearr.map((brand: any) => (
                            <Nav.Link className="px-0" key={brand.id}>
                              {brand.name}
                            </Nav.Link>
                          ))}
                        </Nav>
                      </Col>
                    ))}
                  </Row>
                </Container>
              )}
            </>
          ) : (
            <Collections />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
