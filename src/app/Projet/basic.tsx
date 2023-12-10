"use client";

import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { Router } from "next/router";

const TabBasic = () => {
	const router = useRouter();

	const listOfProject = [
		{
			image: "img_cooldown.png",
			title: "Cooldown",
			description:
				"Conception en local d'un réseau social similaire à Twitter en HTML / CSS / JS / PHP / JSON pour un projet de fin de deuxième année en BUT MMI.",
			href: "https://www.google.com/search?client=opera-gx&q=désactiver+le+scroll+css&sourceid=opera&ie=UTF-8&oe=UTF-8",
		},
		{
			image: "img_burn.png",
			title: "Burn",
			description:
				"Projet de Terminal codé en python où le but est de survivre le plus longtemps possible tout en esquivant des boules de feu.",
			href: "https://www.google.com/search?client=opera-gx&q=désactiver+le+scroll+css&sourceid=opera&ie=UTF-8&oe=UTF-8",
		},
		{
			image: "img_palan_consulting.png",
			title: "PALAN Consulting",
			description:
				"Conception de maquettes détaillées et refonte de la charte graphique à l'aide de Figma et intégration des conceptions élaborées avec WordPress Elementor pour l'entreprise PALAN Consulting",
			href: "https://www.google.com/search?client=opera-gx&q=désactiver+le+scroll+css&sourceid=opera&ie=UTF-8&oe=UTF-8",
		},
		{
			image: "img_Flynt.png",
			title: "Flynt",
			description:
				"Conception d'un personnage en 3D sur Blender pour la création d'un jeu vidéo en troisème année de BUT MMI",
			href: "https://www.google.com/search?client=opera-gx&q=désactiver+le+scroll+css&sourceid=opera&ie=UTF-8&oe=UTF-8",
		},
	];
	return (
		<Grid container spacing={2}>
			{listOfProject.map((project) => (
				<Grid item xs={12} md={4}>
					<Card sx={{ height: "100%", maxWidth: 345 }}>
						<CardActionArea sx={{ height: "100%" }}>
							<a href={project.href} target='_blank'>
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
							</a>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default TabBasic;
