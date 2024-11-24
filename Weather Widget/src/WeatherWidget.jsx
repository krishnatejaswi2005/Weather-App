import Searchbox from "./Searchbox";
import InfoCard from "./InfoCard";
import { useState } from "react";
export default function WeatherWidget() {
	const [weather, setWeather] = useState({
		city: "",
		temp: 0,
		temp_max: 0,
		temp_min: 0,
		feels_like: 0,
		humidity: 0,
		description: "",
	});

	let fetchWeatherInfo = (newInfo) => {
		return setWeather(newInfo);
	};
	return (
		<div>
			<Searchbox fetchWeatherInfo={fetchWeatherInfo} />
			<InfoCard info={weather} />
		</div>
	);
}
