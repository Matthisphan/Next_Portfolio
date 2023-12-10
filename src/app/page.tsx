'use client';

import Layout from '../layout';

import Page from '../components/Page';

import { Grid, Typography, Card, CardMedia, Box, Button } from '@mui/material';
import { Download } from '@mui/icons-material';

// import Monoton from '/fonts/Monoton-Regular.ttf';

const Description = () => {
	return (
		<>
			<Typography variant='h1' component='h1' gutterBottom fontFamily='fantasy'>
				<div style={{ display: 'flex' }}>
					<div style={{ paddingRight: 20 }}>MATTHIS</div>
					<div style={{ color: '#3E77B6', fontFamily: 'Monoton, sans-serif' }}>
						PHAN
					</div>
				</div>
			</Typography>
			<Typography variant='h3' component='h2' gutterBottom fontFamily='fantasy'>
				Développeur Web Fullstack
			</Typography>
			<br />
			<Typography
				variant='h5'
				component='h2'
				gutterBottom
				fontFamily='Poppins'
				fontSize= '2vh'
				color='#545454'
			>
				Bonjour ! Je suis étudiant en 3ème année de MMI (métiers du multimédia
				et l'internet) et bienvenue sur mon portfolio ! Je souhaite mettre à
				disposition ma créativité et ma motivation afin de pouvoir proposer une
				vision innovante et singulière à mon métier.
			</Typography>
		</>
	);
};

export default function Home() {
	return (
		<Layout variant='home'>
			<Page title='Home'>
				<Grid container sx={{ margin: 0 }}>
					<Grid item xs={12} lg={6}>
						<Box
							sx={{
								padding: '20px',
								marginLeft: 10,
								marginRight: 10,
								textAlign: 'justify',
								marginTop: 25,
							}}
						>
							<Description />
							<br />
							<Button
								variant='contained'
								endIcon={<Download sx={{ color: 'white' }} />}
								size='large'
								sx={{ borderRadius: 15, color: '#545454' }}
							>
								<div style={{ color: 'white', fontSize: 20 }}>Mon CV</div>
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Card
							sx={{
								height: '100vh',
								// top: 0,
								// left: '50%',
								// position: 'absolute',
								// width: '50%',
								// background: 'rgba(0, 0, 0, 0.25)',
								borderRadius: '0 0 0 0px',
							}}
						>
							<CardMedia
								component='img'
								alt='Matthis Phan'
								height='100%'
								image='/images/matthis_phan.jpg'
							/>
						</Card>
					</Grid>
				</Grid>
			</Page>
		</Layout>
	);
}
