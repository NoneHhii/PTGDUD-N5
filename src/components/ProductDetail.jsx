import React, { useState } from "react";
import StarReview from "./StarReview";
import favor from "../assets/image/TymUnSlt.png"
import favorSlt from "../assets/image/TymSlt.png"
import { useEffect } from "react";

const colors = [
  { id: 1, name: "Red", hex: "#ff0000" },
  { id: 2, name: "Blue", hex: "#0000ff" },
  { id: 3, name: "Green", hex: "#008000" }
] 

const sizes = [
  { id: 1, name: "S", description: "Small" },
  { id: 2, name: "M", description: "Medium" },
  { id: 3, name: "L", description: "Large" }
]

const ProductDetail = ({ product }) => {
  const [srcFavor, setSrcFavor] = useState({});
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [numOfProduct, setNumOfProduct] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          const token = localStorage.getItem("token"); // Hoặc context nếu bạn lưu token ở đó

          if (!token) {
              console.error("Token không tồn tại!"); // Thông báo nếu không tìm thấy token
              return;
          }

          console.log(token);
          console.log(isFavored);

          const response = await axios.post(
              "http://localhost:5000/api/users/update-wishlist", 
              {
                  productId,
                  isFavored,
              },
              {
                  headers: {
                      Authorization: `Bearer ${token}`, // Gửi token trong header Authorization
                  },
              }
          );
          
          console.log(response.data);
      } catch (error) {
          console.error("Error update", error);
      }
  };

  return (
    <div className="d-flex justify-content-center row">
      <div classname="col-md-1"></div>
      <div className="d-flex flex-column me-4 col-md-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="py-1 mb-2 text-center border">
            <img src={product.image[i]} alt="extra" className="img-fluid mx-auto" style={{maxHeight: "138px"}}/>
          </div>
        ))}
      </div>
      <div className="border d-flex me-4 col-md-4">
        <img src={product.image[0]} alt="mainproduct" className="img-fluid my-auto" />
      </div>
      <div className="col-md-4">
        <h1 className="h4 fw-bold">{product?.name}</h1>
        <div className="d-flex align-items-center my-3">
          <StarReview star={product?.rating} text={`${product?.stock} Reviews`} />
          <div className="ms-3 ps-3 border-start text-success">In Stock</div>
        </div>
        <h2 className="h4 my-3 text-start">${product.price}</h2>
        <p className="border-bottom pb-3 text-start">{product?.description}</p>
        <div className="my-3 d-flex justify-content-start">
          <h5 className="me-3 my-auto">Colours:</h5>
          {colors.map((color) => (
            <button
              key={color.id}
              className={`btn me-2 rounded-circle ${selectedColor.id === color.id ? "border border-3" : ""}`}
              style={{ backgroundColor: color.hex, width: "30px", height: "30px" }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
        <div className="my-3 d-flex justify-content-start">
          <h5 className="me-3 my-auto">Size:</h5>
          {sizes.map((size) => (
            <button
              key={size.id}
              className={`btn me-2 ${selectedSize.id === size.id ? "btn-danger text-white" : "btn-outline-dark"}`}
              onClick={() => setSelectedSize(size)}
            >
              {size.name}
            </button>
          ))}
        </div>
        <div className="d-flex align-items-center my-4">
          <div className="input-group" style={{ width: "150px" }}>
            <button className="btn btn-outline-secondary" onClick={() => numOfProduct > 1 && setNumOfProduct(numOfProduct - 1)}>-</button>
            <input type="text" className="form-control text-center" value={numOfProduct} readOnly />
            <button className="btn btn-danger text-white" onClick={() => setNumOfProduct(numOfProduct + 1)}>+</button>
          </div>
          <button className="btn btn-danger text-white ms-3">Buy Now</button>
          <button className="btn border ms-3">
            <img 
                src={srcFavor[product.id] ? favorSlt : favor} 
                alt="" 
                className="" 
                style={{top: "10px", right: "10px"}} 
                onClick={() => handleSrc(product.id)}
            />
          </button>
        </div>
        <div className="border p-3">
          <div className="d-flex align-items-center border-bottom pb-3">
            <img src="/detail_page/truck.png" alt="truck" className="me-3" />
            <div>
              <p className="fw-bold mb-1">Free Delivery</p>
              <p className="text-muted">Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <img src="/detail_page/return.png" alt="return" className="me-3" />
            <div>
              <p className="fw-bold mb-1">Return Delivery</p>
              <p className="text-muted">Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
      <div classname="col-md-1"></div>
    </div>
  );
};

export default ProductDetail;