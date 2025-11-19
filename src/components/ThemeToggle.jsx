import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
            
            const isDark = storedTheme === "dark";
            setIsDarkMode(isDark);
            document.documentElement.classList.toggle("dark", isDark);
        } else {
            
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "p-2 rounded-full transition-colors duration-300 border border-border",
                "bg-background hover:bg-muted"
            )}
        >
            {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-300" />
            ) : (
                <Moon className="w-6 h-6 text-blue-900" />
            )}
        </button>
    );
};

export default ThemeToggle;


