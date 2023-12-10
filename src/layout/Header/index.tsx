import React from "react";

import { useRouter } from "next/navigation";

import { AppBar, Toolbar, Button } from "@mui/material";

const Header = () => {
	const router = useRouter();
	const listOfButton = [
		{
			name: "Acceuil",
			href: "/",
		},
		{
			name: "Projet",
			href: "/Projet",
		},
		{
			name: "Competences",
			href: "/Competences",
		},
		{
			name: "Contact",
			href: "/Contact",
		},
	];

	return (
		<AppBar
			position='fixed'
			sx={{
				width: 500,
				borderRadius: 25,
				transform: "translateX(-50%)",
				left: "50%",
				marginTop: "1vh",
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: "center" }}>
				{listOfButton.map((button, index) => (
					<Button
						onClick={() => router.push(button.href)}
						key={index}
						sx={{ color: "white" }}
					>
						{button.name}
					</Button>
				))}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
