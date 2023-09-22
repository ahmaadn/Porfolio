import { useEffect, useState } from "react";

type themeProvide = "dark" | "light" | "system";

const setLocalTheme = (theme: themeProvide) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("ui-theme", theme);
	}
};

const getThemeLocal = () => {
	if (typeof window !== "undefined") {
		return (localStorage.getItem("ui-theme") as themeProvide) || "dark";
	} else {
		return "dark";
	}
};

const useTheme = () => {
	const [theme, setTheme] = useState<themeProvide>(getThemeLocal);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
		setLocalTheme(theme);
	}, [theme]);

	return { theme, setTheme };
};

export { useTheme };
