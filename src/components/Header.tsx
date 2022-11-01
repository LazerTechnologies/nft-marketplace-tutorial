import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NavMenus from "./NavMenus";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useAddress } from "@thirdweb-dev/react";

const Navbar = () => {
  const address = useAddress();
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const menus = [
    {
      name: "Explore",
      href: "#",
    },
    {
      name: "Stats",
      href: "#",
    },
    {
      name: "Resources",
      href: "#",
    },
    {
      name: "Create",
      href: "#",
    },
  ];

  const style = {
    themeSwitcher: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300`,
    wrapper: `sticky top-0 z-50 bg-white px-4 py-2 ${
      scrolling ? "shadow-md" : ""
    } dark:bg-gray-900 flex items-center justify-between space-x-6 transition ease-in-out delay-100`,
    logoContainer: `xl:pr-40`,
    searchContainer: `ml-8 hidden flex-1 sm:block`,
    menusContainer: `hidden pr-6 lg:block xl:pl-8,`,
    iconsContainer: `flex items-center space-x-6`,
    icons: `h-8 w-8 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300 hover:dark:text-white`,
    desktopIcons: `hidden lg:block`,
    mobileIcons: `sm:hidden`,
    tabletIcons: `lg:hidden`,
  };

  return (
    <header className={style.wrapper}>
      <div className={style.logoContainer}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>

      <div className={style.searchContainer}>
        <SearchInput />
      </div>

      <div className={style.menusContainer}>
        <NavMenus menus={menus} />
      </div>

      <div className={style.iconsContainer}>
        <Link href={`/profile/${address}`}>
          <UserCircleIcon className={style.icons} />
        </Link>
        <a
          href={"https://github.com/namdao2000/lazersea"}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className={style.icons} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
