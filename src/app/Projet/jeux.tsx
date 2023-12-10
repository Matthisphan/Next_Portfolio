import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

const TabJeux = () => {
	const listOfProject = [
		{
			image: "img_burn.png",
			title: "Burn",
			description:
				"Projet de Terminal codé en python où le but est de survivre le plus longtemps possible tout en esquivant des boules de feu.",
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

export default TabJeux;
