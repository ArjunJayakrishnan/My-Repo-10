import stylesTechnologyType from "./TechnologyType.module.css";
import PropTypes from "prop-types";

TechnologyType.propTypes = {
	technologyId: PropTypes.string.isRequired,
};

const technologyTypes = [
	{
		technologyId: "launch-vehicle",
		technologyName: "LAUNCH VEHICLE",
		paragraph:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
	},
	{
		technologyId: "spaceport",
		technologyName: "SPACE PORT",
		paragraph:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
	},
	{
		technologyId: "space-capsule",
		technologyName: "SPACE CAPSULE",
		paragraph:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
	},
];

function TechnologyType({ technologyId }) {
	const matchingtechnologyTypesObj = technologyTypes.filter(
		(technologyTypeObj) => {
			return technologyTypeObj.technologyId === technologyId;
		}
	);
	return (
		<>
			<p className={stylesTechnologyType.subHeading1}>THE TERMINOLOGY…</p>
			<h4 className={stylesTechnologyType.technologyName}>
				{matchingtechnologyTypesObj[0].technologyName}
			</h4>
			<p className={stylesTechnologyType.paragraph}>
				{matchingtechnologyTypesObj[0].paragraph}
			</p>
		</>
	);
}

export default TechnologyType;
