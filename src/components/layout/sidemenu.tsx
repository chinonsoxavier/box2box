import rightArrow from "@/assets/icons/right-arrow-black.svg";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect } from "react";
import useLandingStore from "@/pages/landing/landing_store";
import Header from "./Header";
import footerName from "../../assets/images/footer name.svg";

const SideMenu = () => {
  const { sideMenuOpen, closeSideMenu } = useLandingStore();
  const location = useLocation();

  useEffect(() => {
    closeSideMenu();
  }, [location]);

  return (
    <div
      className={`fixed inset-0 z-20 bg-background top-0 overflow-hidden duration-800 w-full ${
        sideMenuOpen ? "h-dvh" : "h-0"
      } `}
    >
      <Header />

      <div className="flex flex-col max_width relative top-10 gap-8 items-center justify-start p-2 w-full">
        {/* <NavLink className="w-full" to="/">
          <div className="flex items-center justify-between w-full">
              <p className="md:text-lg text-sm font-semibold">Home</p>

            <div>
              <img src={close} alt="close arrow" />
            </div>
          </div>
        </NavLink> */}

        <NavLink className="w-full" to="/">
          <div className="flex items-center justify-between w-full">
            <p className="md:text-lg text-sm font-semibold">Home</p>

            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/owners">
          <div className="flex items-center justify-between w-full">
            <p className="md:text-lg text-sm font-semibold">Owners</p>

            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/riders">
          <div className=" flex items-center justify-between w-full">
            <p className="md:text-lg text-sm font-semibold">Riders</p>

            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/buissness">
          <div className="flex items-center justify-between w-full">
            <p className="md:text-lg text-sm font-semibold">Buissness</p>

            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/box">
          <div className="flex items-center justify-between w-full">
            <p className="md:text-lg text-sm font-semibold">Box</p>

            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </NavLink>

        <NavLink className="w-full" to="/box-runners">
          <div className="flex items-center justify-between w-full">
            <p className="md:text-lg text-sm font-semibold">Box Runners</p>

            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </NavLink>
      </div>

      <div className="flex px-4 items-center justify-center sm:hidden top-70 relative">
        <Button value="outline" className="w-full rounded-1000">
          Download Box2Box App
        </Button>
      </div>

      <img src={footerName} alt="footer name" className="w-full relative top-30" />
    </div>
  );
};

export default SideMenu;
