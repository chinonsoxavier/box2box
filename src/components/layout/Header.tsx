import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";
import { Button } from "../ui/button";
import menu from "../../assets/icons/hamburg-menu.svg";
import { ModeToggle } from "../ThemeToggle";
const Header = () => {
  const location = useLocation();

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
    <div className="center h-25 relative z-10">
      <div className="h-[57px] w-full max_width flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img src={logo} alt="logo" className="max-w-[144px] w-full" />
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
                <BottomIndicator isActive={location.pathname === route.link} />
              </NavLink>
            ))}
          </nav>

          <div className="hiddn sm:flex">
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
          <div className="block min-w-8 cursor-pointer xlarge:hidden">
            <img src={menu} alt="menu" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
