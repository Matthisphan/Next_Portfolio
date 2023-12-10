import React, { ReactElement } from "react";

import NextLink from "next/link";

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

import Header from "./Header";

import "./globals.css";
interface Props {
	variant: "main" | "home" | "blank";
	children: ReactElement;
}

const Layout = ({ variant = "main", children }: Props) => {
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
