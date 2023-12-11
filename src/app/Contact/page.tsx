"use client";

import React from "react";

import Layout from "@/layout";

import Page from "@/components/Page";

import { Grid, Typography } from "@mui/material";

const Contact = () => {
	return (
		<Layout variant='main'>
			<Page title='Contact'>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={12}>
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
								CONTACT
							</div>
						</Typography>
					</Grid>

					<Grid item xs={12} lg={12}>
						<iframe src='CV_PHAN_Matthis.pdf' width='100%' height='850' />
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
};

export default Contact;
