import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import footerImage from "../assets/655698dc6d1f91e5ffdca4cc_Logo VRESCO blanc.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-start mt-10 px-20">
        {/* Left Section: Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-12">Navigation</h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/home"
                className="hover:text-[#08c9bd] hover:pl-2 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#08c9bd] hover:pl-2 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#08c9bd] hover:pl-2 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#08c9bd] hover:pl-2 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-12">Contact</h2>
          <Link
            href="mailto:contact@invoic-vsc.com?subject=Get%20in%20touch"
            className=" px-[22px] py-[10px] font-[600] rounded-full  bg-[#08c9bd] hover:text-black hover:bg-white duration-200 hover:border-transparent"
          >
            Email Us
          </Link>
          <Link
            href="/legal"
            className="hover:text-[#08c9bd] hover:pl-2 transition-all duration-300 mt-12"
          >
            legal
          </Link>
        </div>
      </div>
      <div className="h-[1px] bg-gray-900 mt-10 px-20"></div>

      <div className="flex justify-between items-center px-20 mt-6">
        <Image src={footerImage} alt="footer image" height={82} width={82} />

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-[#08c9bd] transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-[#08c9bd] transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
