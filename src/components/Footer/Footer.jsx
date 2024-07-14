import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";


function Footer() {
  return (
    <section className="w-full overflow-hidden py-7 bg-bgColor text-textColor border-t border-gray-500">
      <div className="flex h-full items-center justify-between  mx-5 sm:mx-8 lg:mx-16">
        <div className="inline-flex items-center">
          <Logo width="100px" />
        </div>
        <div>
          <p className="text-sm font-semibold">
            &copy; 2024{" "}
            <Link
              to="https://abhishekjachak21.vercel.app/"
              target="_blank"
              className="text-primary"
            >
              Abhishek Jachak
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
