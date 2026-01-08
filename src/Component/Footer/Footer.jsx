import React from "react";
import footerImg from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col bg-black text-white">
      <div className="py-20">
        <img className="mx-auto" src={footerImg} alt="" />
        <div className="flex flex-col md:flex-row justify-between container mx-auto mt-10">
          <div>
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="w-72 mt-3 text-gray-500">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="flex flex-col leading-8 mt-3 text-gray-500">
              <a href="home">
                <i>Home</i>
              </a>
              <a href="service">
                <i>Service</i>
              </a>
              <a href="about">
                <i>About</i>
              </a>
              <a href="contact">
                <i>Contact</i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Subscribe</h3>
            <p className="text-gray-500 w-75 mt-3">Subscribe to our newsletter for the latest updates.</p>
            <div>
                <input className="mt-5 pl-5 py-2 bg-white text-gray-500 w-70 rounded-l-lg outline-0" type="email" placeholder="enter your email" />
                <button className="bg-gradient-to-l from-yellow-400 to-red-400 cursor-pointer py-2 px-4 text-black rounded-r-lg">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 border-t-2 border-gray-800">
        <p className="text-center mt-4 text-gray-500">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
