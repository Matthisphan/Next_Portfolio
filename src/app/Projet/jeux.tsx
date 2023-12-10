import { Grid, Card, CardMedia } from "@mui/material";

const TabJeux = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia
						component='img'
						image='https://source.unsplash.com/random'
						alt='random'
					/>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia
						component='img'
						image='https://source.unsplash.com/random'
						alt='random'
					/>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia
						component='img'
						image='https://source.unsplash.com/random'
						alt='random'
					/>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia
						component='img'
						image='https://source.unsplash.com/random'
						alt='random'
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default TabJeux;