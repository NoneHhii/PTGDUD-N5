import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Pagination,
  Card,
  Container,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import StarRating from "../Components/StarRating";
import favor from "../assets/image/TymUnSlt.png";
import favorSlt from "../assets/image/TymSlt.png";
import "../assets/style/SearchPage.css"; // Import the separate CSS file

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchKey = location.state?.searchKey?.toLowerCase() || "";
  const [srcFavor, setSrcFavor] = useState({});

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/get-products"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm: ", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Lọc sản phẩm theo từ khóa
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchKey)
  );

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSrc = (id) => {
    setSrcFavor((srcPrev) => {
      const updatedFavor = {
        ...srcPrev,
        [id]: !srcPrev[id],
      };
      return updatedFavor;
    });

    // Chờ state cập nhật rồi mới gọi API
    setTimeout(() => {
      updateWishlist(id, !srcFavor[id]);
    }, 0);
  };

  const updateWishlist = async (productId, isFavored) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token không tồn tại!");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/users/update-wishlist",
        {
          productId,
          isFavored,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error update", error);
    }
  };

  const addToCart = (product) => {
    // Implementation for adding to cart
    console.log("Adding to cart:", product);
  };

  // Create pagination items
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  let paginationItems = [];

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading products...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          Search Results for: <span className="text-danger">"{searchKey}"</span>
        </h2>
        <Badge bg="danger" className="px-5 py-3">
          <span style={{ fontSize: "15px" }}>
            {filteredProducts.length} products found
          </span>
        </Badge>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <Row className="g-4">
            {currentProducts.map((product) => (
              <Col key={product.id} xl={3} lg={4} md={6} sm={6}>
                <Card className="h-100 product-card shadow-sm border-0">
                  <div className="position-relative overflow-hidden product-img-container">
                    <Card.Img
                      variant="top"
                      src={product.image[0]}
                      alt={product.name}
                      className="product-img p-3"
                      style={{ height: "200px", objectFit: "contain" }}
                    />
                    <div
                      className="favorite-icon"
                      onClick={() => handleSrc(product.id)}
                    >
                      <img
                        src={srcFavor[product.id] ? favorSlt : favor}
                        alt="favorite"
                        width="24"
                        height="24"
                      />
                    </div>
                    <div className="product-overlay">
                      <Button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-title h6 mb-2">
                      {product.name}
                    </Card.Title>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-danger fw-bold">
                          ${product.price}
                        </span>
                        <StarRating rating={product.rating} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-5">
            <Pagination>
              <Pagination.Prev
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
              {paginationItems}
              <Pagination.Next
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </>
      ) : (
        <div className="text-center py-5">
          <div className="mb-4">
            <i className="bi bi-search" style={{ fontSize: "3rem" }}></i>
          </div>
          <h3>No products found</h3>
          <p className="text-muted">
            We couldn't find any products matching "{searchKey}". Try different
            keywords or browse our categories.
          </p>
        </div>
      )}
    </Container>
  );
};

export default SearchPage;
