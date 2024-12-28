import React from "react";
import Image from "next/image";
import logo from "../assets/6767eb64e173c24cb84c25b5_Logo INVOIC' copie.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[30px] py-[26px]">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-[10px]"
        />
      </div>
      <div>
        <Link
          href="mailto:contact@invoic-vsc.com?subject=Get%20in%20touch"
          className=" px-[22px] py-[10px] font-[600] transition border-2 border-gray-800 rounded-full  hover:bg-[#08c9bd] hover:text-white duration-200 hover:border-transparent"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
