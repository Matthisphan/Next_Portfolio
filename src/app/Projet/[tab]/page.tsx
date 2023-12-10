"use client";

import React, { useState } from "react";

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
} from "@mui/material";

import TabBasic from "../basic";
import TabJeux from "../jeux";

const Projet = ({ params }: { params: any }) => {
	const router = useRouter();
	const tab = params.tab;

	const [value, setValue] = useState("basic");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
		router.push(`/Projet/${newValue}`);
	};
	return (
		<Layout>
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
					<Box sx={{ mt: 2.5 }}>
						{tab === "basic" && <TabBasic />}
						{/* {tab === "personal" && <TabPersonal />} */}
					</Box>

					<Box sx={{ mt: 2.5 }}>
						{tab === "jeux" && <TabJeux />}
						{/* {tab === "personal" && <TabPersonal />} */}
					</Box>
				</Card>
			</Page>
		</Layout>
	);
};

export default Projet;
