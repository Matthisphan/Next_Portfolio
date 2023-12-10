"use client";

import React, { useEffect, useState, SyntheticEvent } from "react";

import { useRouter } from "next/navigation";

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

import TabBasic from "../basic";
import TabJeux from "../jeux";

const Projet = ({ params }: { params: any }) => {
	const router = useRouter();

	const [tab, setTab] = useState(params.tab);

	useEffect(() => {
		setTab(params.tab);
	}, [params]);

	const [value, setValue] = useState(tab);

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
		router.push(`/Projet/${newValue}`);
	};

	return (
		// <Layout>
		<Page title='Projet'>
			<Card>
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
							value='basic'
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
							value='produc_graph'
							iconPosition='start'
						/>
					</Tabs>
				</Box>
				<CardContent>
					<Box sx={{ mt: 2.5 }}>
						{tab === "basic" && <TabBasic />}
						{tab === "jeux" && <TabJeux />}
						{/* {tab === "personal" && <TabPersonal />} */}
					</Box>
				</CardContent>
			</Card>
		</Page>
		// </Layout>
	);
};

export default Projet;
