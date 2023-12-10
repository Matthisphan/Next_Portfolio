export const metadata = {
	title: "Matthis Phan - Portfolio",
	description: "Matthis Phan - Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
