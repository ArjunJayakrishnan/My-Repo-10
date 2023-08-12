import NavigationBar from "./NavigationBar";
import stylesCrew from "./Crew.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Image from "./Image";

function Crew() {
	return (
		<div className={stylesCrew.crew}>
			<NavigationBar />
			<h5 className="heading5">
				<span>02</span>
				<p>MEET YOUR CREW</p>
			</h5>
			<div className={stylesCrew.content}>
				<div className={stylesCrew.crewWriting}>
					<Outlet />
					<div className="crewLinks">
						<NavLink to="douglas-hurley">1</NavLink>
						<NavLink to="mark-shuttleworth">2</NavLink>
						<NavLink to="victor-glover">3</NavLink>
						<NavLink to="anousheh-ansari">4</NavLink>
					</div>
				</div>
				<Image encounter="crew" defaultImage="douglas-hurley" format="webp" />
			</div>
		</div>
	);
}

export default Crew;
