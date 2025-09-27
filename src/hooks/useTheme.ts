import { ThemeProviderContext } from "@/context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within AppThemeProvider");
  }
  return context;
}
