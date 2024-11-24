import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "@mui/material/Alert";

export default function Searchbox({ fetchWeatherInfo }) {
	const [city, setCity] = useState("");
	const [error, setError] = useState(false);

	const API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = "0f6f53b474843e4efabe5f9980b4a59a";

	const fetchWeather = async () => {
		try {
			const res = await fetch(
				`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
			);
			const data = await res.json();
			const result = {
				city: city,
				temp: data.main.temp,
				temp_max: data.main.temp_max,
				temp_min: data.main.temp_min,
				feels_like: data.main.feels_like,
				humidity: data.main.humidity,
				description: data.weather[0].description,
			};
			return result;
		} catch (err) {
			setError(true);
			return null;
		}
	};

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setCity("");
		const newInfo = await fetchWeather();
		if (newInfo) {
			fetchWeatherInfo(newInfo);
		}
	};

	return (
		<div>
			{error && (
				<Alert severity="error" sx={{ marginBottom: "10px" }}>
					City not found
				</Alert>
			)}
			<h2>Searchbox</h2>
			<form onSubmit={handleSubmit} className="searchbox">
				<TextField
					id="cityName"
					label="City Name"
					variant="outlined"
					value={city}
					onChange={handleChange}
					required
				/>
				<br />
				<br />

				<Button variant="outlined" endIcon={<SearchIcon />} type="submit">
					Search
				</Button>
			</form>
		</div>
	);
}
