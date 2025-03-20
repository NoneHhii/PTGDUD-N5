import React, { useState, useEffect } from "react";

function Account({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        address: user.address || "",
      }));
    }
  }, [user]);

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-zÀ-ỹ\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /[\w\s,-]+/;
    const passwordRegex = /^.{6,}$/;

    if (!nameRegex.test(formData.name)) tempErrors.name = "Invalid first name";
    if (!emailRegex.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!addressRegex.test(formData.address))
      tempErrors.address = "Invalid address";
    if (!passwordRegex.test(formData.newPassword))
      tempErrors.newPassword = "At least 6 characters";
    if (formData.newPassword !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:5000/api/update-user", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            address: formData.address,
            newPassword: formData.newPassword || undefined,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Failed to update user. Please try again.");
      }
    }
  };
  return (
    <div
      className="container container-md mx-auto mt-5"
      style={{ marginTop: "3.75rem" }}
    >
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-secondary text-decoration-none">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active text-dark" aria-current="page">
            Account
          </li>
        </ol>
      </nav>

      <div className="mt-5" style={{ marginTop: "5rem", height: "42.5rem" }}>
        <div className="d-flex" style={{ height: "32.5rem" }}>
          <div style={{ width: "40%", height: "25rem" }}>
            <div className="">
              <ul className="mt-1 text-left" style={{ fontSize: "15px" }}>
                <p style={{ marginBottom: "10px" }} className="fw-bold">
                  Manage My Account
                </p>
                <div className="pb-3">
                  <li style={{ color: "#DB4444", listStyleType: "none" }}>
                    <a
                      href="#"
                      style={{ color: "#DB4444", textDecoration: "none" }}
                    >
                      My Profile
                    </a>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <a
                      href="#"
                      className="text-secondary"
                      style={{ textDecoration: "none" }}
                    >
                      Address Book
                    </a>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <a
                      href="#"
                      className="text-secondary"
                      style={{ textDecoration: "none" }}
                    >
                      My Payment Options
                    </a>
                  </li>
                </div>
              </ul>
              <ul style={{ fontSize: "15px" }} className="text-left">
                <p style={{ marginBottom: "10px" }} className="fw-bold">
                  My Orders
                </p>
                <div className="">
                  <li style={{ color: "#DB4444", listStyleType: "none" }}>
                    <a href="#" className="text-secondary">
                      My Returns
                    </a>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <a
                      href="#"
                      className="text-secondary"
                      style={{ textDecoration: "none" }}
                    >
                      My Cancellations
                    </a>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <a
                      href="#"
                      className="text-secondary"
                      style={{ textDecoration: "none" }}
                    >
                      My WishList
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="shadow" style={{ width: "60%", height: "35rem" }}>
            <div className="p-5">
              <span className="fw-bold fs-4" style={{ color: "#DB4444" }}>
                Edit Your Profile
              </span>
              <form className="row row-cols-2 g-4" onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="col">
                    <label className=" text-left fw-bold form-label d-block mb-2 fs-6 fw-medium">
                      {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                    </label>
                    <input
                      type={
                        ["newPassword", "confirmPassword", "password"].includes(
                          key
                        )
                          ? "password"
                          : "text"
                      }
                      style={{ height: "50px" }}
                      value={value}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.value })
                      }
                      className="form-control bg-light border border-light-subtle rounded-3 fs-6 w-100 p-2"
                    />
                    {errors[key] && (
                      <p
                        className="text-danger fs-6"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {errors[key]}
                      </p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="col-12 btn text-white rounded-3 fs-6 w-100 p-2 mt-5"
                  style={{ backgroundColor: "#DB4444", marginTop: "0.5rem" }}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
