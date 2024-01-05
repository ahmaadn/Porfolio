import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { SITE } from "@/config";
import React from "react";

interface Props {
	children: React.ReactNode;
	button?: React.ReactNode;
}

export const Sidebar = ({ children, button }: Props) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden group">
					{button}
					<span className="sr-only">sidebar button</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>{SITE.title}</SheetTitle>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	);
};
