import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div className="container mt-5 mb-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#" className="text-secondary text-decoration-none">Home</a>
          </li>
          <li className="breadcrumb-item active text-dark" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-4">
          <div className="shadow p-4 h-100 bg-white rounded">
            <div className="mb-4">
              <div className="d-flex align-items-center">
                <img src="src/assets/img/icons-phone.png" alt="Phone" style={{ width: "24px", height: "24px" }} className="me-3" />
                <span className="fw-bold fs-5">Call To Us</span>
              </div>
              <p className="mt-2 text-muted">We are available 24/7, 7 days a week.</p>
              <p className="text-muted">Phone: +8801611112222</p>
              <hr />
            </div>

            <div>
              <div className="d-flex align-items-center">
                <img src="src/assets/img/icons-mail.png" alt="Email" style={{ width: "24px", height: "24px" }} className="me-3" />
                <span className="fw-bold fs-5">Write To Us</span>
              </div>
              <p className="mt-2 text-muted">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-muted">Email: customer@exclusive.com</p>
              <p className="text-muted">Email: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-8">
          <div className="shadow p-4 h-100 bg-white rounded">
            <form>
              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-4">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-md-4">
                  <input type="tel" className="form-control" placeholder="Your Phone" required />
                </div>
              </div>

              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-danger px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
