"use client";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { NAV_LINKS } from "../../constants/index";
import Link from "next/link";
import Button from "./Button";
import { useFirebase } from "../";

type NavbarProps = {
  theme: boolean;
  setTheme: (darkMode: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const firebase = useFirebase();

  const isLoggedIn = firebase?.isLoggedIn;

  const handleLogout = async () => {
    try {
      await firebase?.logout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="padding-container max-container flexBetween items-center py-2 dark:text-zinc-200 text-[#18181B] bg-zinc-200 dark:bg-[#18181B]">
      <Link href={"/"}>
        <div className="flex gap-0 dark:gap-3 font-semibold text-sm">
          {theme ? (
            <Image src="/logo.svg" alt="logo" width={18} height={23} />
          ) : (
            <Image src="/dark-logo.svg" alt="logo" width={18} height={23} />
          )}
          <span>Voyage Elite</span>
        </div>
      </Link>

      <div className="gap-5 flexCenter">
        <ul className="hidden lg:flex font-semibold text-xs gap-11">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          {isLoggedIn ? (
            <Button
              title="Log Out"
              onClick={handleLogout}
              className="dark:text-zinc-200 text-[#18181B] bg-transparent font-semibold text-xs rounded-[8px] dark:border-zinc-200 border-[1px] border-zinc-900 py-3 px-6"
            />
          ) : (
            <>
              <Link href={"/register"}>
                <Button
                  title="Sign Up"
                  type="button"
                  className="dark:text-zinc-200 text-[#18181B] bg-transparent font-semibold text-xs rounded-[8px] dark:border-zinc-200 border-[1px] border-zinc-900 py-3 px-6"
                />
              </Link>
              <Link href={"/login"}>
                <Button
                  title="Login"
                  type="button"
                  className="bg-[#FFD015] text-[#111827] font-semibold text-xs rounded-[8px] py-3 px-6"
                />
              </Link>
            </>
          )}

          <div
            className="relative w-16 h-8 flex items-center dark:bg-[#323238] bg-neutral-600 cursor-pointer rounded-full p-[4px]"
            onClick={() => setTheme(!theme)}
          >
            <FaMoon className="text-white" size={18} />
            <div
              style={theme ? { left: "2px" } : { right: "2px" }}
              className="absolute bg-white dark:bg-[#69696e] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
            ></div>
            <BsSunFill size={18} className="ml-auto text-[#FFD015]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;