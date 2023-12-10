import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

const TabBasic = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={4}>
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='140'
							image='/images/img_cooldown.png'
							alt='Cooldown'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='div'
								fontFamily={"fantasy"}
							>
								Cooldown
							</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
								fontFamily={"Poppins"}
							>
								Conception en local d'un réseau social similaire à Twitter en
								HTML / CSS / JS / PHP / JSON pour un projet de fin de deuxième
								année.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia component='img' image='/images/img_burn.png' alt='Burn' />
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia
						component='img'
						image='/images/img_palan_consulting.png'
						alt='Palan_consulting'
					/>
				</Card>
			</Grid>
			<Grid item xs={12} md={4}>
				<Card>
					<CardMedia
						component='img'
						image='/images/img_Flynt.png'
						alt='Flynt'
					/>
				</Card>
			</Grid>
		</Grid>
	);
};

export default TabBasic;
