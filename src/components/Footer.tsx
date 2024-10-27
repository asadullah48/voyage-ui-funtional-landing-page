import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_LINKS } from "../../constants/index";

type NavbarProps = {
  theme: boolean;
};

const Footer = ({ theme }: NavbarProps) => {
  return (
    <footer className="padding-container max-container flex-col md:flex-row flex md:justify-between py-[64px] ">
      <div className="flex flex-col font-semibold text-sm ">
        <div className="flex gap-3 ">
          {theme ? (
            <Image src="/favorite.svg" alt="favorite" width={18} height={23} />
          ) : (
            <Image
              src="/dark-favorite.svg"
              alt="favorite"
              width={18}
              height={23}
            />
          )}
          <span className="dark:text-zinc-200 text-[#18181B]">
            Voyage Elite
          </span>
        </div>
        <p className="dark:text-zinc-200 text-[#18181B]">© 2024 Voyage Elite</p>
      </div>
      
      <ul className="flex justify-between  dark:text-zinc-200 text-[#18181B] pt-10 md:pt-0 gap-5">
        {FOOTER_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;