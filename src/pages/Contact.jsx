import React from "react";

function Contact() {
  return (
    <>
      <div className="md:container md:mx-auto mt-15 h-200">
        <div className="">
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
        <div style={{ width: "100%", height: "700px" }} className=" mt-30 flex">
          <div
            className="shadow mr-10"
            style={{ width: "30%", height: "600px" }}
          >
            <div className="p-10">
              <div className="flex items-center call-to-us">
                <img
                  className="mr-5"
                  src="src/assets/img/icons-phone.png"
                  alt=""
                />
                <span className="font-medium">Call To Us</span>
              </div>
              <p className="pt-5">We are available 24/7, 7 days a week.</p>
              <p className="pt-5 mb-7">Phone: +8801611112222</p>
              <hr />
            </div>
            <div className="pl-10 pt">
              <div className="flex items-center call-to-us">
                <img
                  className="mr-5"
                  src="src/assets/img/icons-mail.png"
                  alt=""
                />
                <span className="font-medium">Write To US</span>
              </div>
              <p className="pt-5 w-70">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="pt-5 mb-7">Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="shadow" style={{ width: "60%", height: "600px" }}>
            <div className="p-10">
              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="company"
                      className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-50 p-2.5 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your massage"
                  ></textarea>
                </div>
                <div className="flex justify-between">
                  <div></div>

                  <div className="mt-20 p-5">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-50 px-5 py-2.5 text-center dark:bg-[#DB4444] dark:hover:bg-[#db2c2c] dark:focus:ring-blue-800"
                    >
                      Send Massage
                    </button>
                  </div>
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
