import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getStoredData = (key, defaultValue) => {
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : defaultValue;
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return defaultValue;
    }
  };

  const [cart, setCart] = useState(() => getStoredData('cart', []));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // 🛒 Thêm vào giỏ hàng (nếu đã có thì tăng số lượng, nếu chưa có thì thêm mới)
  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Không giới hạn số lượng
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  // 🔄 Cập nhật số lượng sản phẩm
  const updateQuantity = useCallback((id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  // ❌ Xóa sản phẩm khỏi giỏ hàng và cập nhật localStorage ngay lập tức
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Xóa ngay trong localStorage
      return updatedCart;
    });
  }, []);

  // 🗑 Xóa toàn bộ giỏ hàng
  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem('cart'); // Xóa hoàn toàn dữ liệu trong localStorage
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartProvider;
