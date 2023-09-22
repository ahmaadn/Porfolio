import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/lib/use-theme";
import React from "react";

interface Props {
	children: React.ReactNode;
}

export const ToggleTheme = ({ children }: Props) => {
	const { theme, setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="relative">
					{children}
					<span className="sr-only">toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>system</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
