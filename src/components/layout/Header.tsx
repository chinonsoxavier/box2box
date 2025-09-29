import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";
import logo2 from "../../assets/images/logo.svg";
import { Button } from "../ui/button";
import menu from "../../assets/icons/hamburg-menu.svg";
import close from "../../assets/icons/close.svg";
import { ModeToggle } from "../ThemeToggle";
import useLandingStore from "@/pages/landing/landing_store";
import Animate from "../animation/animate";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
      const { theme } = useTheme(); // Get current theme and setter
    
  const location = useLocation();
  const { sideMenuOpen, toggleSideMenuOpen } = useLandingStore();
  const BottomIndicator = ({ isActive }: { isActive: boolean }) =>
    isActive && (
      <span className="absolute top-6 rounded border-accent w-3 border-3"></span>
    );

  const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Owners",
      link: "/owners",
    },
    {
      name: "Riders",
      link: "/riders",
    },
    {
      name: "Buissness",
      link: "/buissness",
    },
    {
      name: "Box",
      link: "/box",
    },
    {
      name: "Box Runners",
      link: "/box-runners",
    },
  ];

  

  return (
    <Animate type="fadeInDown">
      <div className="center h-25 relative z-10">
        <div className="h-[57px] w-full max_width flex items-center justify-between">
          <div className="flex items-center justify-start">
            <img src={theme=== "dark" ? logo2 : logo} alt="logo" className="max-w-[144px] w-full" />
          </div>

          <div className="items-center flex justify-end gap-5">
            <nav className="xlarge:flex hidden gap-6 items-center justify-center">
              {routes.map((route, index) => (
                <NavLink
                  key={index}
                  to={route.link}
                  className={({ isActive }) =>
                    isActive
                      ? "large:text-lg whitespace-nowrap center gap-2.5 relative text-accent font-extrabold"
                      : "large:text-lg whitespace-nowrap center gap-2.5 text-primary-foreground relative"
                  }
                >
                  {route.name}
                  <BottomIndicator
                    isActive={location.pathname === route.link}
                  />
                </NavLink>
              ))}
            </nav>

            <div className="hidden xs:flex">
              <ModeToggle />
            </div>

            <Button className="text-base sm:block hidden large:text-[22px]">
              Login
            </Button>
            <Button
              variant="secondary"
              className="hidden sm:block text-base large:text-[22px]"
            >
              Download App
            </Button>
            <div
              className="block min-w-8 cursor-pointer xlarge:hidden"
              onClick={toggleSideMenuOpen}
            >
              {sideMenuOpen ? (
                <img src={close} alt="close" className="w-full" />
              ) : (
                <img src={menu} alt="menu" className="w-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default Header;
