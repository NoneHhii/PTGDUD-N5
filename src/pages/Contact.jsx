import React, { useState } from "react";

function Contact() {
  // State to manage form validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Validation patterns
  const namePattern = /^[A-Z][a-zA-Z\s]*$/; // Starts with capital letter
  const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/; // Ends with @gmail.com
  const phonePattern = /^(09|08)[0-9]{8}$/; // Starts with 09 or 08 and has 10 digits

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Validate on change
    validateField(id, value);
  };

  const validateField = (field, value) => {
    let errorMessage = "";

    switch (field) {
      case "name":
        if (!namePattern.test(value)) {
          errorMessage = "Name must start with a capital letter";
        }
        break;
      case "email":
        if (!emailPattern.test(value)) {
          errorMessage = "Email must end with @gmail.com";
        }
        break;
      case "phone":
        if (!phonePattern.test(value)) {
          errorMessage = "Phone must have 10 digits and start with 09 or 08";
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [field]: errorMessage,
    });

    return errorMessage === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isPhoneValid = validateField("phone", formData.phone);

    if (isNameValid && isEmailValid && isPhoneValid) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="mb-6">
          <div>
            <a href="#" className="text-sm text-gray-400">
              Home
            </a>
            <span className="mx-4">/</span>
            <a href="#" className="text-sm">
              About
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 p-30">
          <div className="w-full lg:w-1/3 shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  className="mr-4 w-6 h-6"
                  src="src/assets/img/icons-phone.png"
                  alt="Phone icon"
                />
                <span className="font-medium">Call To Us</span>
              </div>
              <p className="pt-4">We are available 24/7, 7 days a week.</p>
              <p className="pt-3 mb-6">Phone: +8801611112222</p>
              <hr />
            </div>

            <div className="p-6 pt-4">
              <div className="flex items-center">
                <img
                  className="mr-4 w-6 h-6"
                  src="src/assets/img/icons-mail.png"
                  alt="Email icon"
                />
                <span className="font-medium">Write To US</span>
              </div>
              <p className="pt-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="pt-3 mb-4">Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 shadow rounded-lg">
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-6 grid-cols-1 md:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-gray-50 border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Your Name"
                      required
                      pattern="^[A-Z][a-zA-Z\s]*$"
                      title="Name must start with a capital letter"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-gray-50 border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Your Email"
                      required
                      pattern="^[a-zA-Z0-9._-]+@gmail\.com$"
                      title="Email must end with @gmail.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`bg-gray-50 border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="Your Phone"
                      required
                      pattern="^(09|08)[0-9]{8}$"
                      title="Phone must have 10 digits and start with 09 or 08"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#DB4444] dark:hover:bg-[#db2c2c] dark:focus:ring-blue-800"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
