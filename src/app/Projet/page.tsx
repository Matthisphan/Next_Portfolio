"use client";

import React, { useState, SyntheticEvent } from "react";

import Layout from "@/layout";

import Page from "@/components/Page";

import {
	Grid,
	Typography,
	Card,
	CardMedia,
	Box,
	Button,
	Tabs,
	Tab,
	CardContent,
} from "@mui/material";

import TabProjects from "./tab";

const Projet = () => {
	const [value, setValue] = useState("all");

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Layout variant='main'>
			<Page title='Projet'>
				{/* <Card> */}
				<Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						variant='scrollable'
						scrollButtons='auto'
						aria-label='account profile tab'
					>
						<Tab
							label='Tous'
							// icon={<UserOutlined />}
							value='all'
							iconPosition='start'
						/>

						<Tab
							label='Jeux'
							// icon={<UserOutlined />}
							value='jeux'
							iconPosition='start'
						/>

						<Tab
							label='Site Web'
							// icon={<UserOutlined />}
							value='web'
							iconPosition='start'
						/>

						<Tab
							label='Production Graphique'
							// icon={<UserOutlined />}
							value='product_graph'
							iconPosition='start'
						/>
					</Tabs>
				</Box>
				<TabProjects typeSelected={value} />
			</Page>
		</Layout>
	);
};

export default Projet;
