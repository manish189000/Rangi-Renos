import React from "react";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FiFacebook } from "react-icons/fi";
import rangilogo from "../images/rangilogo.png";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  const footerNavs = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/homeservice",
      name: "Service",
    },

    {
      href: "/contact",
      name: "Contact Us",
    },

    // {
    //   href: "javascript:void()",
    //   name: "Support",
    // },
  ];
  return (
    <>
      <footer className="bg-[#28334a] py-16 max-w-screen-xl mx-auto px-20 air:px-12 m480:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className=" mx-auto font-arial font-semibold  text-[#fff]">
            <img
              src={rangilogo}
              className="h-36 w-36 m480:h-24 m480:w-24 mx-auto"
            />
            {/* <span className="text-5xl">Rangi Renos</span> */}
          </div>
          <p className="leading-relaxed mt-2 text-lg m480:text-base text-[#fff] font-arial">
            Thank you for choosing Rangi Renos. We appreciate your interest in
            our services. Our expert team is dedicated to the art of
            transformative design, ensuring every detail aligns with your
            vision. Contact us today to learn more about how we can turn your
            renovation dreams into reality.
          </p>
        </div>
        <ul className="items-center justify-center text-[#fff] mt-8 flex space-x-6 space-y-0 font-arial">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-[#d6d3d1]">
              <Link key={idx} to={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center ">
          <div className="mt-20 font-mons text-center text-[#fff]">
            <span className="text-[#d6d3d1]">&copy; 2024 </span>
            Rangi Renos All rights reserved.
          </div>
          {/* <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10  rounded-full bg-[#d6d3d1] flex items-center justify-center">
                <FaXTwitter className="w-5 h-5 text-black" />
              </li>

              <li className="w-10 h-10 rounded-full bg-[#d6d3d1] flex items-center justify-center">
                <FaInstagram className="w-5 h-5 text-black" />
              </li>

              <li className="w-10 h-10 rounded-full bg-[#d6d3d1] flex items-center justify-center">
                <FiFacebook className="w-5 h-5 text-black" />
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
