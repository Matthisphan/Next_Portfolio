'use client';

import React from 'react';

import Layout from '@/layout';

import Page from '@/components/Page';

import { Grid, Typography, Card, CardMedia, Box, Button } from '@mui/material';

const Projet = () => {
	return (
		<Layout>
			<Page title='Projet'>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={12} >
						<Typography textAlign='center' variant='h1' fontFamily='fantasy'
							sx={{
								letterSpacing: '3vh',
								border: 'solid black 1px',
								padding: '1vh'
							}}
						>
							PORTFOLIO
						</Typography>
					</Grid>

					<Grid item xs={3} lg={3}>
					<Typography textAlign='center' variant='h4' fontFamily='fantasy'
							sx={{
								width: '3vh',
								fontSize: '3vh',
								'&:hover': {
                                    color: '#3E77B6',
                                    cursor: 'pointer',
								}
							}}
						>
							Tous
						</Typography>
					</Grid>

					<Grid item xs={3} lg={3}>
					<Typography textAlign='center' variant='h4' fontFamily='fantasy'
							sx={{
								fontSize : '3vh',
								'&:hover': {
                                    color: '#3E77B6',
                                    cursor: 'pointer',
								}
							}}
						>
							Jeux
						</Typography>
					</Grid>

					<Grid item xs={3} lg={3} >
						<Typography textAlign='center' variant='h4' fontFamily='fantasy'
							sx={{
								fontSize : '3vh',
								'&:hover': {
                                    color: '#3E77B6',
                                    cursor: 'pointer',
								}
							}}
						>
							Site Web
						</Typography>
					</Grid>

					<Grid item xs={3} lg={3} >
						<Typography textAlign='center' variant='h4' fontFamily='fantasy'
							sx={{
								fontSize : '3vh',
								'&:hover': {
                                    color: '#3E77B6',
                                    cursor: 'pointer',
								}
							}}
						>
							Production Graphique
						</Typography>
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
};

export default Projet;
