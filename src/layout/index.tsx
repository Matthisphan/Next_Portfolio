import React, { ReactElement } from "react";

import NextLink from "next/link";

import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

import "./globals.css";
interface Props {
	children: ReactElement;
	variant?: "main" | "blank";
}

const Layout = ({ children, variant = "main" }: Props) => {
	if (variant === "blank") {
		return { children };
	}

	// if (variant === "main") {
	// 	return (
	// 		<Box sx={{ position: "fixed" }}>
	// 			<AppBar position='static'>
	// 				<Toolbar>
	// 					<NextLink href='/' passHref>
	// 						<Typography
	// 							variant='h6'
	// 							component='a'
	// 							sx={{ cursor: "pointer", marginRight: 2 }}
	// 						>
	// 							Portfolio
	// 						</Typography>
	// 					</NextLink>
	// 					<NextLink href='/Competences' passHref>
	// 						<Typography variant='h6' component='a' sx={{ cursor: "pointer" }}>
	// 							Compétences
	// 						</Typography>
	// 					</NextLink>
	// 				</Toolbar>
	// 			</AppBar>
	// 			{children}
	// 		</Box>
	// 	);
	// }
	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6'>Portfolio</Typography>
					{/* other pages */}
				</Toolbar>
			</AppBar>
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
