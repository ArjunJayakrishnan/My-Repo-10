import stylesCrewMember from "./CrewMember.module.css";
import PropTypes from "prop-types";

const crewMembersInfo = [
	{
		crewMemberName: "DOUGLAS HURLEY",
		paragraph:
			"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
		position: "COMMANDER",
	},
	{
		crewMemberName: "MARK SHUTTLEWORTH",
		paragraph:
			"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
		position: "MISSION SPECIALIST",
	},
	{
		crewMemberName: "VICTOR GLOVER",
		paragraph:
			"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
		position: "PILOT",
	},
	{
		crewMemberName: "ANOUSHEH ANSARI",
		paragraph:
			"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
		position: "FLIGHT ENGINEER",
	},
];

function CrewMember({ crewMemberName }) {
	const matchingCrewMemberObj = crewMembersInfo.filter((crewMemberObj) => {
		return crewMemberObj.crewMemberName.split(" ")[0] === crewMemberName;
	});
	return (
		<>
			<h4 className={stylesCrewMember.position}>
				{matchingCrewMemberObj[0].position}
			</h4>
			<h3 className={stylesCrewMember.crewMemberName}>
				{matchingCrewMemberObj[0].crewMemberName}
			</h3>
			<p className={stylesCrewMember.paragraph}>
				{matchingCrewMemberObj[0].paragraph}
			</p>
		</>
	);
}

CrewMember.propTypes = {
	crewMemberName: PropTypes.string.isRequired,
};

export default CrewMember;
