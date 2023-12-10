import React, { ReactElement } from "react";

import { Container } from "@mui/material";

import Header from "./Header";

import "./globals.css";

interface Props {
	children: any;
	variant: "main" | "home" | "blank";
}

const Layout = ({ children, variant = "main" }: Props) => {
	if (variant === "blank") {
		return { children };
	}

	if (variant === "home") {
		return (
			<>
				<Header />
				{children}
			</>
		);
	}

	return (
		<>
			<Header />
			<Container sx={{ paddingTop: "10vh" }}>{children}</Container>
		</>
	);
};

export default Layout;
