import React from "react";

function Account() {
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
                <form>
                  <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="last_name"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="company"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="company"
                        class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="phone"
                        class="block mb-2 text-sm font-medium text-black"
                      >
                        Address
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                  </div>

                  <div class="mb-2">
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-black"
                    >
                      Password Changes
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Current Password"
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <input
                      type="password"
                      id="confirm_password"
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="New Password"
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <input
                      type="password"
                      id="confirm_password"
                      class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Confirm New Password"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div></div>

                    <div className="flex p-5">
                      <p className="p-3">Cancel</p>
                      <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-50 px-5 py-2.5 text-center dark:bg-[#DB4444] dark:hover:bg-[#db2c2c] dark:focus:ring-blue-800"
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
    </div>
  );
}

export default Account;
