'use client';

import Layout from '../layout';

import Page from '../components/Page';

import { Grid, Typography } from '@mui/material';

export default function Home() {
	return (
		<Layout>
			<Page title='Home'>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant='h4' component='h1' gutterBottom>
							MATHIS PHAN
						</Typography>
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
}
