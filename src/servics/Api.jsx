const API_URL = 'http://localhost:5000';

export async function fetchWishlist() {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Lỗi khi lấy Wishlist');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchRecommendations() {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Lỗi khi lấy Recommendations');

    const products = await response.json();

    // Sắp xếp theo rating giảm dần
    return products.sort((a, b) => b.rating - a.rating);
  } catch (error) {
    console.error(error);
    return [];
  }
}
