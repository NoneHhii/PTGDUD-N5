import { useState, useEffect } from "react";
import { useCart } from "../Cart/CartContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaShoppingCart, FaEye, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Wishlist.css";
import { useWishList } from "../../context/WishlistContext";

export function Wishlist() {
  const { addToCart } = useCart();
  const {wishlist, setWishlist, updateWishlist} = useWishList();
  const [recommendations, setRecommendations] = useState([]);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  const removeFromWishlist = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/wishlist/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const text = await response.text(); // Lấy dữ liệu trả về dưới dạng text
      console.log("Response Text:", text); // Kiểm tra dữ liệu trả về

      const data = JSON.parse(text); // Chuyển thành JSON
      if (!response.ok) {
        throw new Error(data.message || "Lỗi khi xoá sản phẩm khỏi wishlist");
      }

      setWishlist((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Lỗi xoá wishlist:", error);
      alert(error.message);
    }
  };

  const moveAllToBag = () => {
    wishlist.forEach((item) => addToCart(item));
    setWishlist([]);
  };

  const handleSeeAll = async () => {
    if (!showAllRecommendations) {
      const fullRecommendations = await fetchRecommendations();
      setRecommendations(fullRecommendations);
    } else {
      const limitedRecommendations = (await fetchRecommendations()).slice(0, 4);
      setRecommendations(limitedRecommendations);
    }
    setShowAllRecommendations(!showAllRecommendations);
  };

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Wishlist ({wishlist.length})</h3>
        <Button variant="outline-dark" onClick={moveAllToBag}>
          Move All To Bag
        </Button>
      </div>
      <Row className="g-3">
        {wishlist.map((item) => (
          <Col key={item.id} xs={6} md={3}>
            <Card className="border-0 shadow-sm position-relative card-hover">
              <div
                className="position-relative bg-light text-center"
                style={{ height: "200px" }}
              >
                {item.discount && (
                  <span className="badge bg-danger position-absolute top-0 start-0">
                    -{item.discount}%
                  </span>
                )}
                <Button
                  variant="link"
                  className="position-absolute top-0 end-0 text-dark"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <FaTrash />
                </Button>
                <Card.Img
                  variant="top"
                  src={item.image[0]}
                  className="img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
              </div>
              <Button
                variant="dark"
                className="w-100 add-to-cart"
                onClick={() => addToCart(item)}
              >
                <FaShoppingCart className="me-2" /> Add To Cart
              </Button>
              <Card.Body className="text-start">
                <Card.Title className="fw-bold">{item.name}</Card.Title>
                <Card.Text>
                  <span className="text-danger fw-bold">${item.price}</span>{" "}
                  {item.oldPrice && (
                    <span className="text-muted text-decoration-line-through">
                      ${item.oldPrice}
                    </span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <h3 className="text-danger">🟥 Just For You</h3>
          <Button variant="outline-dark" onClick={handleSeeAll}>
            {showAllRecommendations ? "Show Less" : "See All"}
          </Button>
        </div>
        <Row className="g-3 mt-1">
          {recommendations.map((item) => (
            <Col key={item.id} xs={6} md={3}>
              <Card className="border-0 shadow-sm card-hover">
                <div
                  className="position-relative bg-light text-center"
                  style={{ height: "200px" }}
                >
                  {item.discount && (
                    <span className="badge bg-success position-absolute top-0 start-0">
                      {item.discount}
                    </span>
                  )}
                  <Button
                    variant="link"
                    className="position-absolute top-0 end-0 text-dark"
                  >
                    <FaEye />
                  </Button>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="img-fluid"
                    style={{ maxHeight: "180px", objectFit: "contain" }}
                  />
                </div>
                <Button
                  variant="dark"
                  className="w-100 add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  <FaShoppingCart className="me-2" /> Add To Cart
                </Button>
                <Card.Body className="text-start">
                  <Card.Title className="fw-bold">{item.name}</Card.Title>
                  <div className="d-flex align-items-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const fullStars = Math.floor(item.rating);
                      const decimal = item.rating - fullStars;
                      const isHalfStar = i === fullStars && decimal > 0;

                      return (
                        <span
                          key={i}
                          className="position-relative star-container"
                        >
                          {i < fullStars ? (
                            <span className="star-full">★</span>
                          ) : isHalfStar ? (
                            <span className="position-relative">
                              <span
                                className="star-full"
                                style={{
                                  position: "absolute",
                                  width: `${decimal * 100}%`,
                                  overflow: "hidden",
                                  display: "inline-block",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                ★
                              </span>
                              <span className="star-outline">★</span>
                            </span>
                          ) : (
                            <span className="star-outline">★</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                  <Card.Text>
                    <span className="text-danger fw-bold">${item.price}</span>{" "}
                    {item.oldPrice && (
                      <span className="text-muted text-decoration-line-through">
                        ${item.oldPrice}
                      </span>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
