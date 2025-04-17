import React from "react";

function NotFound() {
  return (
    <>
      <div className="md:container md:mx-auto mt-15 h-200 ">
        <div className="">
          <a href="#" className="text-sm text-gray-400">
            Home
          </a>
          <span className="mx-4">/</span>
          <a href="#" className="text-sm">
            404 Error
          </a>
        </div>
        <div className="flex justify-center items-center mt-50">
          <div className="text-center">
            <div className="text-9xl">404 Not Found</div>
            <div className="mt-8">
              <span className="text-xl">
                Your visited page not found. You may go home page.
              </span>
            </div>
            <button className="text-white bg-[#DB4444] p-4 rounded-2xl mt-20 cursor-pointer hover:bg-[#de2d2d]">
              Back to home page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
