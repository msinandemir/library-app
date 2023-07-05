import { useEffect, useState } from "react";
import cs from "classnames";
import Logo from "../../../../components/Logo";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
import { LuMenu } from "react-icons/lu";
import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";

function NavBar() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { breakpoint } = useBreakpoint();

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) setIsScroll(true);
      else setIsScroll(false);
    };

    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (breakpoint === "desktop") {
      setIsMobileMenuOpen(false);
    }
  }, [breakpoint]);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <header
      className={cs("flex items-center  w-full  transition-all", {
        "border-b border-black/20 backdrop-blur-md bg-transparent fixed":
          isScroll,

        "h-[120px]": isMobileMenuOpen,
        "h-[60px]": !isMobileMenuOpen,
      })}
    >
      <div className={cs("w-[1000px] mx-auto flex flex-col gap-1 ")}>
        <div
          className={cs("flex items-center gap-6 w-full justify-between", {
            " px-2": breakpoint === "mobile",
          })}
        >
          <Logo responsive />

          {breakpoint === "desktop" && <DesktopMenu />}
          {breakpoint === "mobile" && (
            <LuMenu onClick={handleMobileMenu} size={24} />
          )}
        </div>
        <div>{isMobileMenuOpen && <MobileMenu />}</div>
      </div>
    </header>
  );
}

export default NavBar;
