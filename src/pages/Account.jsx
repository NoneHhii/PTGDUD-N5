import React, { useState, useEffect } from "react";

function Account() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      firstName: "Gia",
      lastName: "Huy",
      email: "giahuytruonn@gmail.com",
      address: "Ho Chi Minh Go Vap",
      password: "",
      newPassword: "",
      confirmPassword: "",
    });
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Profile updated successfully!");
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

      <div className="mt-20 h-170 ">
        <div className="h-130 flex">
          <div className="h-100" style={{ width: "40%" }}>
            <div className="p-6">
              <div>
                <ul style={{ fontSize: "15px" }} className="ml-5 mt-1">
                  <p style={{ fontWeight: "bold" }}>Mangage My Account</p>
                  <div className="pt-2 pl-5">
                    <li className="text-[#DB4444]">
                      <a href="">My Profile</a>
                    </li>
                    <li>
                      <a href="" className="text-gray-500">
                        Address Book
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-gray-500">
                        My Payment Options
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
              <div>
                <ul style={{ fontSize: "15px" }} className="ml-5 mt-5">
                  <p style={{ fontWeight: "bold" }}>My Orders</p>
                  <div className="pt-2 pl-5">
                    <li className="">
                      <a href="" className="text-gray-500">
                        My Returns
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-gray-500">
                        My Cancellations
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
              <div>
                <ul style={{ fontSize: "15px" }} className="ml-5 mt-5">
                  <p style={{ fontWeight: "bold" }}>My WishList</p>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-130 shadow" style={{ width: "60%" }}>
            <div className="p-10">
              <span className="font-bold text-xl text-[#DB4444]">
                Edit Your Profile
              </span>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-6 md:grid-cols-2"
                >
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                      <label className="block mb-2 text-sm font-medium text-black">
                        {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                      </label>
                      <input
                        type={
                          [
                            "newPassword",
                            "confirmPassword",
                            "password",
                          ].includes(key)
                            ? "password"
                            : "text"
                        }
                        value={value}
                        onChange={(e) =>
                          setFormData({ ...formData, [key]: e.target.value })
                        }
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder={value}
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
    </div>
  );
}

export default Account;
