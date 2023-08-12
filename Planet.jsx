import stylesPlanets from "./Planets.module.css";
import PropTypes from "prop-types";

const planetsInfo = [
	{
		planetName: "Moon",
		paragraph:
			"See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 km",
		travelTime: "3 days",
	},
	{
		planetName: "Mars",
		paragraph:
			"Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
		distance: "225 MIL. km",
		travelTime: "9 months",
	},
	{
		planetName: "Europa",
		paragraph:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 MIL. km",
		travelTime: "3 years",
	},
	{
		planetName: "Titan",
		paragraph:
			"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 BIL. km",
		travelTime: "7 years",
	},
];

function Planet({ planetName }) {
	const matchingPlanetObj = planetsInfo.filter((planetObj) => {
		return planetObj.planetName.toLowerCase() === planetName;
	});
	return (
		<>
			<h2 className={stylesPlanets.planetHeading}>
				{matchingPlanetObj[0].planetName}
			</h2>
			<p className={stylesPlanets.paragraph}>
				{matchingPlanetObj[0].paragraph}
			</p>
			<div className={stylesPlanets.line}></div>
			<div className={stylesPlanets.infoContainer}>
				<div className={stylesPlanets.distance}>
					<p>AVG. DISTANCE</p>
					<p>{matchingPlanetObj[0].distance}</p>
				</div>
				<div className={stylesPlanets.travelTime}>
					<p>Est. travel time</p>
					<p>{matchingPlanetObj[0].travelTime}</p>
				</div>
			</div>
		</>
	);
}

Planet.propTypes = {
	planetName: PropTypes.string.isRequired,
};
export default Planet;
