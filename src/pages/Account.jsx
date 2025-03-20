import React from "react";

function Account({ user }) {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <div>
          <a href="#" className="text-muted">
            Home
          </a>

          <span className="mx-3">/</span>

          <a href="#" className="text-muted">
            My Account
          </a>
        </div>
        <div className="text-muted">
          <span>Welcome!</span>
          <span className="text-danger"> User</span>
        </div>
      </div>

      <div className="mt-5">
        <div className="d-flex">
          <div className="col-md-4">
            <div className="p-4">
              <ul style={{ fontSize: "15px" }} className="ms-3 mt-2">
                <p style={{ fontWeight: "bold" }}>Manage My Account</p>
                <div className="pt-2 ms-3">
                  <li className="text-danger">
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#" className="text-muted">
                      Address Book
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted">
                      My Payment Options
                    </a>
                  </li>
                </div>
              </ul>

              <ul style={{ fontSize: "15px" }} className="ms-3 mt-4">
                <p style={{ fontWeight: "bold" }}>My Orders</p>
                <div className="pt-2 ms-3">
                  <li>
                    <a href="#" className="text-muted">
                      My Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted">
                      My Cancellations
                    </a>
                  </li>
                </div>
              </ul>

              <ul style={{ fontSize: "15px" }} className="ms-3 mt-4">
                <p style={{ fontWeight: "bold" }}>My WishList</p>
              </ul>
            </div>
          </div>

          <div className="col-md-8 shadow-sm">
            <div className="p-4">
              <span className="font-weight-bold text-xl text-danger">
                Edit Your Profile
              </span>
              <form>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="first_name" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="form-control"
                      placeholder={user.name}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="last_name" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="form-control"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder={user.email}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder={
                      user.address.length === 0 ? "abc-dce" : user.address
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password Changes
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Current Password"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="new_password"
                    className="form-control"
                    placeholder="New Password"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    id="confirm_password"
                    className="form-control"
                    placeholder="Confirm New Password"
                    required
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <div></div>
                  <div className="d-flex p-3">
                    <p className="p-3">Cancel</p>
                    <button
                      type="submit"
                      className="btn btn-danger ms-3"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
