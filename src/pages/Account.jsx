import React, { useState, useEffect } from "react";

function Account({ user }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "Huy",
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
        firstName: user.name || "",
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

    if (!nameRegex.test(formData.firstName))
      tempErrors.firstName = "Invalid first name";
    if (!nameRegex.test(formData.lastName))
      tempErrors.lastName = "Invalid last name";
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
      }
    }
  };

  return (
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
                      My Payment Options
                    </a>
                  </li>
                </div>
              </ul>
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
                      value={value}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    {errors[key] && (
                      <p className="text-red-500 text-xs">{errors[key]}</p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="col-span-2 text-white bg-[#DB4444] hover:bg-[#db2c2c] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
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
