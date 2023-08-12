import NavigationBar from "./NavigationBar";
import stylesDestination from "./Destination.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Image from "./Image";

function Destination() {
	return (
		<div className={stylesDestination.destination}>
			<NavigationBar />
			<h5 className="heading5">
				<span>01</span>
				<p>PICK YOUR DESTINATION</p>
			</h5>
			<div className={stylesDestination.content}>
				<Image encounter="destination" defaultImage="moon" format="png" />
				<div className={stylesDestination.destinationWriting}>
					<div className="links">
						<NavLink to="moon">Moon</NavLink>
						<NavLink to="mars">Mars</NavLink>
						<NavLink to="europa">Europa</NavLink>
						<NavLink to="titan">Titan</NavLink>
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Destination;
