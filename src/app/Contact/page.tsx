"use client";

import React from "react";

import Layout from "@/layout";

import Page from "@/components/Page";

import { Grid } from "@mui/material";

const Contact = () => {
	return (
		<Layout variant='main'>
			<Page title='Contact'>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={12}>
						<iframe src='CV_PHAN_Matthis.pdf' width='100%' height='850' />
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
};

export default Contact;
