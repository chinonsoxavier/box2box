import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
const Header = () => {
    const location = useLocation();

  const BottomIndicator = ({isActive}:{isActive:boolean}) =>
   isActive && (<span className="absolute top-6 rounded border-accent w-3 border-3"></span>);

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
    <div className="center h-25 max_width mx-auto">
      <div className="h-[57px] max_width px-5 mx-auto flex items-center justify-between">
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
                 <BottomIndicator isActive={location.pathname === route.link} />                 
              </NavLink>
            ))}
          </nav>

          <Switch />

          <Button>Login</Button>
          <Button variant="secondary"  className="h-14" >Download App</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
