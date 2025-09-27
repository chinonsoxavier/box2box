import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import { useTheme } from "@/hooks/useTheme";

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // Get current theme and setter

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="rounded-full cursor-pointer flex items-center justify-center relative border min-w-[98px] h-[40px]"
      onClick={toggleTheme}
      aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
    >
      <img
        src={sun}
        alt="light mode"
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-opacity duration-300`}
      />
      <img
        src={moon}
        alt="dark mode"
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-opacity duration-300`}
      />
      <div
        className={`w-[34px] h-[34px] bg-secondary rounded-full absolute transition-all duration-700 ${
          theme === "light" ? "left-[calc(100%-38px)]" : "left-1"
        }`}
      ></div>
    </button>
  );
}
