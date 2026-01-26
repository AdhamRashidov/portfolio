import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  showText?: boolean;
}

export const ThemeToggle = ({
  variant = "ghost",
  size = "icon",
  showText = false,
}: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button onClick={toggleTheme} variant={variant} size={size}>
      {isDark ? (
        <>
          <Sun className={showText ? "mr-2 h-4 w-4" : "h-4 w-4"} />
          {showText && "Light Mode"}
        </>
      ) : (
        <>
          <Moon className={showText ? "mr-2 h-4 w-4" : "h-4 w-4"} />
          {showText && "Dark Mode"}
        </>
      )}
    </Button>
  );
};
