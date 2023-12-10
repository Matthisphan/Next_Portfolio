import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

const TabWeb = () => {
	const listOfProject = [
		{
			image: "img_cooldown.png",
			title: "Cooldown",
			description:
				"Conception en local d'un réseau social similaire à Twitter en HTML / CSS / JS / PHP / JSON pour un projet de fin de deuxième année en BUT MMI.",
		},
		{
			image: "img_palan_consulting.png",
			title: "PALAN Consulting",
			description:
				"Conception de maquettes détaillées et refonte de la charte graphique à l'aide de Figma et intégration des conceptions élaborées avec WordPress Elementor pour l'entreprise PALAN Consulting",
		},
	];
	return (
		<Grid container spacing={2}>
			{listOfProject.map((project) => (
				<Grid item xs={12} md={4}>
					<Card sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								component='img'
								height='140'
								image={`/images/${project.image}`}
								alt={project.title}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									component='div'
									fontFamily={"fantasy"}
								>
									{project.title}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
									fontFamily={"Poppins"}
								>
									{project.description}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default TabWeb;
