import React, { useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaClock, FaFire, FaGift } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";

const HotDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Danh sách sản phẩm
  const products = [
    {
      id: 1,
      name: "PRODUCT NAME 1",
      price: "1500700",
      originalPrice: "$990.00",
      image: "src/assets/product01.png",
      tags: ["New", "Sell"],
    },
    {
      id: 2,
      name: "PRODUCT NAME 2",
      price: "$880.00",
      originalPrice: "$950.00",
      image: "src/assets/product01.png",
      tags: ["New"],
    },
    {
      id: 3,
      name: "PRODUCT NAME 3",
      price: "$780.00",
      originalPrice: "$890.00",
      image: "src/assets/product01.png",
      tags: ["Sell"],
    },
    {
      id: 4,
      name: "PRODUCT NAME 4",
      price: "$680.00",
      originalPrice: "$790.00",
      image: "src/assets/product01.png",
      tags: ["New", "Sell"],
    },
    {
      id: 5,
      name: "PRODUCT NAME 5",
      price: "$580.00",
      originalPrice: "$690.00",
      image: "src/assets/product01.png",
      tags: ["Sell"],
    },
    {
      id: 6,
      name: "PRODUCT NAME 6",
      price: "$480.00",
      originalPrice: "$590.00",
      image: "src/assets/product01.png",
      tags: ["New"],
    },
    {
      id: 7,
      name: "PRODUCT NAME 6",
      price: "$480.00",
      originalPrice: "$590.00",
      image: "src/assets/product01.png",
      tags: ["New"],
    },
    {
      id: 8,
      name: "PRODUCT NAME 6",
      price: "$480.00",
      originalPrice: "$590.00",
      image: "src/assets/product01.png",
      tags: ["New"],
    },
    {
      id: 9,
      name: "PRODUCT NAME 6",
      price: "$480.00",
      originalPrice: "$590.00",
      image: "src/assets/product01.png",
      tags: [""],
    },
  ];

  // Hiển thị 4 sản phẩm tại một thời điểm
  const visibleProducts = products.slice(currentIndex, currentIndex + 5);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 5 < products.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container className="p-0">
      <Row className="hot-deals m-0">
        <Col
          xs="auto"
          className="d-flex align-items-center hot-deals-countdown ps-3 pe-0 col-12 py-2"
        >
          <div className="tab-countdown d-flex align-items-center">
            <div className="time-box">00</div>
            <div className="colon">:</div>
            <div className="time-box">11</div>
            <div className="colon">:</div>
            <div className="time-box">47</div>
            <div className="colon">:</div>
            <div className="time-box">51</div>
          </div>

          <div className="flash-sale-container d-flex align-items-center justify-content-between w-100 ms-2">
            <div className="flash-sale-main d-flex align-items-center">
              <BsFillLightningChargeFill className="lightning-icon" />
              <span className="flash-text ms-1">FLASH SALE 10H MỖI NGÀY</span>
            </div>

            <div className="flash-sale-icons d-flex">
              <div className="icon-item mx-3">
                <FaFire className="icon me-1" />
                <span className="icon-text">Hot</span>
              </div>
              <div className="icon-item mx-3">
                <FaGift className="icon me-1" />
                <span className="icon-text">Quà tặng</span>
              </div>
              <div className="icon-item mx-3">
                <FaClock className="icon me-1" />
                <span className="icon-text">Giới hạn</span>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-12 list-hot-deals position-relative">
          {/* Nút điều hướng */}
          <Button
            className="position-absolute start-0 top-50 translate-middle-y btn-prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <GrPrevious />
          </Button>

          <CardGroup>
            {visibleProducts.map((product) => (
              <Card key={product.id} className="product-card mx-2">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="card-img-top"
                  />
                  <div className="product-tags">
                    {product.tags.includes("New") && (
                      <span className="product-tag new-tag">New</span>
                    )}
                    {product.tags.includes("Sell") && (
                      <span className="product-tag sell-tag">Sell</span>
                    )}
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <span className="text-muted text-decoration-line-through pe-2">
                      {product.originalPrice} ₫
                    </span>
                    <span className="text-danger">{product.price} ₫ </span>
                    <div className="product-rating mt-1">
                      <span className="text-warning small">0.0 ★</span>
                      <span className="text-muted small ms-2">
                        (0 đánh giá)
                      </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>

          <Button
            className="position-absolute end-0 top-50 translate-middle-y btn-prev"
            onClick={handleNext}
            disabled={currentIndex + 5 >= products.length}
          >
            <GrNext />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HotDeals;
