import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoCard.css";

export default function InfoCard({ info }) {
	const SUNNY_IMG =
		"https://images.unsplash.com/photo-1575408027221-9ab2855ba891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bm55JTIwZGF5fGVufDB8fDB8fHww";
	const RAINY_IMG =
		"https://images.unsplash.com/photo-1558920778-a82b686f0521?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55JTIwZGF5fGVufDB8fDB8fHww";
	const COLD_IMG =
		"https://images.unsplash.com/photo-1645648990356-3a69b450f66e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bm55JTIwZGF5fGVufDB8fDB8fHww";
	return (
		<div className="info-card">
			<Card sx={{ maxWidth: 370 }}>
				<CardMedia
					sx={{ height: 190 }}
					image={
						info.humidity > 50
							? RAINY_IMG
							: info.temp > 20
							? SUNNY_IMG
							: COLD_IMG
					}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{info.city.charAt(0).toUpperCase() + info.city.slice(1)}
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: "text.secondary", padding: "0px" }}
						component={"span"}
					>
						<p>Temperature: {info.temp}&deg;C</p>
						<p>Max Temperature: {info.temp_max}&deg;C</p>
						<p>Min Temperature: {info.temp_min}&deg;C</p>
						<p>Humidity: {info.humidity}</p>
						<p>
							The weather can be described as {info.description} and feels like{" "}
							{info.feels_like}&deg;C
						</p>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
