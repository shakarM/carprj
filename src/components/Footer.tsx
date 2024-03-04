import React from "react";
import Image from "next/image";
import { footerLinks } from "../../constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 items-center mt-5  border-t border-gray-100">
      <div className="flex max-md:flex flex-wrap  justify-between gap-12 sm:px-16 px-6 py-10">
        <div className="grid text-right grid-cols-1 sm:grid-cols-3 gap-8">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500 text-right hover:text-slate-900 duration-500 transition-all ease-in-out"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-start items-right gap-6">
          <h1 className="text-right text-[2rem]">شاکار</h1>
          <p className="text-right text-[0.5rem] mt-[-1rem] text-gray-600">
            شاکارئۆتۆ <br /> مافی لەبەرگرتنەوەی پارێزراوە
          </p>
        </div>
        <div className="flex justify-between  items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 pt-3">
          <p className="font-small  text-xs">
            @2023 ShakarMototr. All rights reserved
          </p>

          <div className="footer__copyrights-link text-[9px]">
            <Link href="/" className="text-gray-500  text-[19px]">
              پاراستنی نهێنی و یاساکان
            </Link>
            <Link href="/" className="text-gray-500 text-[19px]">
              مەرج و ڕێساکان
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
