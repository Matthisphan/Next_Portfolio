"use client";

import {
	Grid,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";

const TabCompetence = ({ typeSelected }: { typeSelected: string }) => {
	const listOfCompetence = [
		{
			image: "html5.png",
			title: "HTML",
			href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			type: "dev",
		},
		{
			image: "css.png",
			title: "css",
			href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
			type: "dev",
		},
		{
			image: "bootstrap.png",
			title: "Bootstrap",
			href: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
			type: "dev",
		},
		{
			image: "js.png",
			title: "JavaScript",
			href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			type: "dev",
		},
		{
			image: "react.png",
			title: "React",
			href: "https://legacy.reactjs.org/docs/getting-started.html",
			type: "dev",
		},
		{
			image: "angular.png",
			title: "Angular",
			href: "https://angular.io/docs",
			type: "dev",
		},
		{
			image: "webgl.png",
			title: "WebGL",
			href: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",
			type: "dev",
		},
		{
			image: "php.png",
			title: "PHP",
			href: "https://www.php.net/docs.php",
			type: "dev",
		},
		{
			image: "sql.png",
			title: "SQL",
			href: "https://dev.mysql.com/doc/",
			type: "dev",
		},
		{
			image: "python.png",
			title: "Python",
			href: "https://docs.python.org/3/",
			type: "dev",
		},
		{
			image: "figma.png",
			title: "Figma",
			href: "https://help.figma.com/hc/fr",
			type: "design",
		},
		{
			image: "office.png",
			title: "Microsoft Office",
			href: "https://www.office.com",
			type: "divers",
		},
		{
			image: "adobe.png",
			title: "Adobe Suite",
			href: "https://www.adobe.com/fr/creativecloud.html",
			type: "design",
		},
	];
	return (
		<Grid container spacing={5}>
			{listOfCompetence.map((competences) => {
				if (competences.type == typeSelected || typeSelected == "all") {
					return (
						<Grid item xs={12} md={3}>
							<Card onClick={() => window.open(competences.href, "_blank")}>
								<CardActionArea>
									<CardMedia
										sx={{
											position: "relative",
											transform: "translateX(-50%)",
											left: "50%",
											width: "50%",
											marginTop: "1vh",
										}}
										component='img'
										image={`/images/${competences.image}`}
										alt={competences.title}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant='h5'
											component='div'
											fontFamily='fantasy'
											textAlign='center'
										>
											{competences.title}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				}
			})}
		</Grid>
	);
};

export default TabCompetence;
