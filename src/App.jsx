import About from "./pages/About";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("useEffect is running...");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Stored User:", storedUser);
    if (storedUser) {
      setUser(storedUser); // Lưu thông tin người dùng vào state
    }
  }, []);

  return (
    <>
      <Router>
        <div className="app-container">
          <div className="main-content">
            <Routes>
              <Route path="/account" element={<Account user={user} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
