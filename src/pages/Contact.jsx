import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/Contact.css";

function Contact() {
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

  const namePattern = /^[A-Z][a-zA-Z\s]*$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  const phonePattern = /^(09|08)[0-9]{8}$/;

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
      <div className="container py-4 py-md-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-secondary text-decoration-none">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item active text-dark"
              aria-current="page"
            >
              Contact
            </li>
          </ol>
        </nav>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card shadow-sm h-100" style={{ padding: 10 }}>
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    className="me-3"
                    src="src/assets/img/icons-phone.png"
                    alt="Phone icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <span className="fw-bold">Call To Us</span>
                </div>
                <p className="mt-3">We are available 24/7, 7 days a week.</p>
                <p className="mt-2 mb-4">Phone: +8801611112222</p>
                <hr />

                <div className="d-flex align-items-center mt-4">
                  <img
                    className="me-3"
                    src="src/assets/img/icons-mail.png"
                    alt="Email icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                  <span className="fw-bold">Write To US</span>
                </div>
                <p className="mt-3">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mt-2 mb-2">Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Your Name"
                        required
                        pattern="^[A-Z][a-zA-Z\s]*$"
                        title="Name must start with a capital letter"
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Your Email"
                        required
                        pattern="^[a-zA-Z0-9._-]+@gmail\.com$"
                        title="Email must end with @gmail.com"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`form-control ${
                          errors.phone ? "is-invalid" : ""
                        }`}
                        placeholder="Your Phone"
                        required
                        pattern="^(09|08)[0-9]{8}$"
                        title="Phone must have 10 digits and start with 09 or 08"
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <textarea
                      id="message"
                      rows="6"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="form-control"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-danger"
                      style={{ backgroundColor: "#DB4444" }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
