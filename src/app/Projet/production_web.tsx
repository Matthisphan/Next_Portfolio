import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

const TabProduc = () => {
	const listOfProject = [
		{
			image: "img_Flynt.png",
			title: "Flynt",
			description:
				"Conception d'un personnage en 3D sur Blender pour la création d'un jeu vidéo en troisème année de BUT MMI",
		},
	];
	return (
		<Grid container spacing={2}>
			{listOfProject.map((project) => (
				<Grid item xs={12} md={4}>
					<Card sx={{ height: "100%", maxWidth: 345 }}>
						<CardActionArea sx={{ height: "100%" }}>
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

export default TabProduc;
