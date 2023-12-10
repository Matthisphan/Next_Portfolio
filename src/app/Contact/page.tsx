"use client";

import React, { useState, SyntheticEvent } from "react";

import Layout from "@/layout";

import Page from "@/components/Page";

import { Grid, Card, CardContent } from "@mui/material";

import FormContact from "./form";

const Contact = () => {
	return (
		<Layout variant='main'>
			<Page title='Contact'>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={6}>
						<iframe src='CV_PHAN_Matthis.pdf' width='100%' height='850' />
					</Grid>
					<Grid item xs={12} lg={6}>
						<Card>
							<CardContent>
								<FormContact />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
};

export default Contact;
