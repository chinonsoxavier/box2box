import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
const Header = () => {
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
    <div className="center h-25">
      <div className="h-[57px] max_width mx-auto flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img src={logo} alt="logo" className="max-w-[144px] w-full" />
        </div>

        <div className="flex items-center justify-end gap-5">
          <nav className="flex gap-6 items-center justify-center">
            {routes.map((route, index) => (
              <NavLink
                key={index}
                to={route.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg center gap-2.5 relative text-accent font-extrabold"
                    : "text-lg center gap-2.5 text-primary-foreground relative"
                }
              >
                {route.name}
                {({ isActive }) => isActive && <span className="absolute top-6 rounded border-accent w-3 border-3"></span>}
              </NavLink>
            ))}
          </nav>

          <Switch />

          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
