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

const Contact = () => {
	return (
		<Layout variant='main'>
			<Page title='Contact'>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={6}>
						<Typography variant='h1' component='h1' gutterBottom>
							Contact
						</Typography>
						<Typography variant='h5' component='h2' gutterBottom>
							Email :
						</Typography>
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
};

export default Contact;
