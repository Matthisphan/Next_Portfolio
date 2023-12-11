"use client";

import React, { useState, SyntheticEvent } from "react";

import Layout from "@/layout";

import Page from "@/components/Page";

import { Box, Tabs, Tab, Typography } from "@mui/material";

import TabCompetence from "./tab";

const Competences = () => {
	const [value, setValue] = useState("all");

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Layout>
			<Page title='Compétences'>
				<Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
					<Typography variant='h1' component='h1' gutterBottom>
						<div
							style={{
								color: "#3E77B6",
								fontFamily: "Monoton, sans-serif",
								textAlign: "center",
								border: "solid black 1px",
								padding: "2vh",
								fontSize: "7vh",
							}}
						>
							COMPÉTENCES
						</div>
					</Typography>
					,
					<Tabs
						value={value}
						onChange={handleChange}
						variant='scrollable'
						scrollButtons='auto'
					>
						<Tab label='Tous' value='all' />
						<Tab label='Développements' value='dev' />
						<Tab label='Design' value='design' />
						<Tab label='Divers' value='divers' />
					</Tabs>
				</Box>
				<TabCompetence typeSelected={value} />
			</Page>
		</Layout>
	);
};

export default Competences;
