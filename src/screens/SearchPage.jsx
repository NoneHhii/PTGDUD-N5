import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import StarRating from "../Components/StarRating";
import favor from "../assets/image/TymUnSlt.png"
import favorSlt from "../assets/image/TymSlt.png"

const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const searchKey = location.state?.searchKey?.toLowerCase() || "";
    const [srcFavor, setSrcFavor] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products/get-products");
                setProducts(res.data);
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm: ", error);
            }
        };
        fetchData();
    }, []);

    // Lọc sản phẩm theo từ khóa
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchKey)
    );

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
        <div className="container mt-4 mb-5">
            <h2 className="text-center mb-4">Search Results for: "{searchKey}"</h2>
            {filteredProducts.length > 0 ? (
                <div className="row">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="col-lg-2 col-md-4 col-sm-6 mb-3">
                            <div 
                                className="border rounded text-center product card-hover" 
                                style={{ maxWidth: "270px", maxHeight: "350px" }}
                            >
                                <div 
                                    className="position-relative d-flex justify-content-center align-items-center" 
                                    style={{ backgroundColor: "#f4f4f4", minWidth: "100%", height: "180px" }}
                                >
                                    <img 
                                        src={product.image[0]} 
                                        alt={product.name} 
                                        className="img-fluid" 
                                        style={{ maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                    <img 
                                        src={srcFavor[product.id] ? favorSlt : favor} 
                                        alt="favorite" 
                                        className="position-absolute" 
                                        style={{ top: "10px", right: "10px" }} 
                                        onClick={() => handleSrc(product.id)}
                                    />
                                </div>
                                <Button
                                    variant='dark'
                                    className='w-100 add-to-cart'
                                    style={{ borderRadius: "0px" }}
                                    onClick={() => addToCart(product)}
                                >
                                    Add To Cart
                                </Button>
                                <div className="p-3">
                                    <h6 className="mt-2 text-start">{product.name}</h6>
                                    <div className="d-flex">
                                        <p className="me-3 text-danger">${product.price}</p>
                                    </div>
                                    <StarRating rating={product.rating} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No products found.</p>
            )}
        </div>
    );
};

export default SearchPage;
