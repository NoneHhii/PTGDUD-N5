import axios from 'axios';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);

    const fetchWishlist = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            "http://localhost:5000/api/users/wishlist",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          setWishlist(data);
        } catch (error) {
          console.error("Lỗi khi lấy wishlist:", error);
        }
    };

    const updateWishlist = async (productId, isFavored) => {
        try {

            const token = localStorage.getItem("token"); // Hoặc context nếu bạn lưu token ở đó

            if (!token) {
                console.error("Token không tồn tại!"); // Thông báo nếu không tìm thấy token
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
                        Authorization: `Bearer ${token}`, // Gửi token trong header Authorization
                    },
                }
            );
            
            console.log(response.data);
            fetchWishlist();
        } catch (error) {
            console.error("Error update", error);
        }
    };

    useEffect(() => {
        fetchWishlist();
    }, []);

  return (
    <WishlistContext.Provider value={{wishlist, setWishlist,updateWishlist}}>
        {children}
    </WishlistContext.Provider>
  )
}

export const useWishList = () => useContext(WishlistContext);

