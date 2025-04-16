<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> TKhoa
import React, { useState, useEffect } from "react";

function Account({ user }) {
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    firstName: "",
    lastName: "Huy",
=======
    name: "",
>>>>>>> TKhoa
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
<<<<<<< HEAD
        firstName: user.name || "",
=======
        name: user.name || "",
>>>>>>> TKhoa
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

<<<<<<< HEAD
    if (!nameRegex.test(formData.firstName))
      tempErrors.firstName = "Invalid first name";
    if (!nameRegex.test(formData.lastName))
      tempErrors.lastName = "Invalid last name";
=======
    if (!nameRegex.test(formData.name)) tempErrors.name = "Invalid first name";
>>>>>>> TKhoa
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
<<<<<<< HEAD
    if (validate()) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/update-password",
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
              newPassword: formData.newPassword,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          setFormData((prev) => ({
            ...prev,
            password: "",
            newPassword: "",
            confirmPassword: "",
          }));
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Failed to update password. Please try again.");
=======

    const token = localStorage.getItem("token");
    if (validate()) {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/users/update-password",
          {
            currentPassword: formData.password,
            newPassword: formData.newPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert(response.data.message);
      } catch (error) {
        console.log("Failed to update user. Please try again.", error);
        alert(error.response?.data?.message || "Có lỗi xảy ra!");
>>>>>>> TKhoa
      }
    }
  };

  return (
<<<<<<< HEAD
    <div className="md:container md:mx-auto mt-15 h-200">
      <div className="flex justify-between">
        <div>
          <a href="#" className="text-sm text-gray-400">
            Home
          </a>
          <span className="mx-4">/</span>
          <a href="#" className="text-sm">
            My Account
          </a>
        </div>
        <div className="text-sm">
          <span>Welcome!</span>
          <span className="text-[#DB4444]"> User</span>
        </div>
      </div>

      <div className="mt-20 h-170">
        <div className="h-130 flex">
          <div className="h-100" style={{ width: "40%" }}>
            <div className="p-6">
              <ul className="ml-5 mt-1" style={{ fontSize: "15px" }}>
                <p className="font-bold">Manage My Account</p>
                <div className="pt-2 pl-5">
                  <li className="text-[#DB4444]">
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500">
                      Address Book
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500">
=======
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
>>>>>>> TKhoa
                      My Payment Options
                    </a>
                  </li>
                </div>
              </ul>
<<<<<<< HEAD
            </div>
          </div>

          <div className="h-130 shadow" style={{ width: "60%" }}>
            <div className="p-10">
              <span className="font-bold text-xl text-[#DB4444]">
                Edit Your Profile
              </span>
              <form
                className="grid gap-6 md:grid-cols-2"
                onSubmit={handleSubmit}
              >
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block mb-2 text-sm font-medium text-black">
=======
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
>>>>>>> TKhoa
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
<<<<<<< HEAD
=======
                      style={{ height: "50px" }}
>>>>>>> TKhoa
                      value={value}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.value })
                      }
<<<<<<< HEAD
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    {errors[key] && (
                      <p className="text-red-500 text-xs">{errors[key]}</p>
=======
                      className="form-control bg-light border border-light-subtle rounded-3 fs-6 w-100 p-2"
                    />
                    {errors[key] && (
                      <p
                        className="text-danger fs-6"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {errors[key]}
                      </p>
>>>>>>> TKhoa
                    )}
                  </div>
                ))}
                <button
                  type="submit"
<<<<<<< HEAD
                  className="col-span-2 text-white bg-[#DB4444] hover:bg-[#db2c2c] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
=======
                  className="col-12 btn text-white rounded-3 fs-6 w-100 p-2 mt-5"
                  style={{ backgroundColor: "#DB4444", marginTop: "0.5rem" }}
>>>>>>> TKhoa
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
