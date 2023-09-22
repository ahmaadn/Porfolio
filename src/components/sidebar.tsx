import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import React from "react";

interface Props {
	children: React.ReactNode;
	button?: React.ReactNode;
}

export const Sidebar = ({ children, button }: Props) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="md:hidden group">
					{button}
					<span className="sr-only">sidebar button</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left">{children}</SheetContent>
		</Sheet>
	);
};
