import { NavLink, Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import stylesTechnology from "./Technology.module.css";
import Image from "./Image";

function Technology() {
	return (
		<div className={stylesTechnology.technology}>
			<NavigationBar />
			<h5 className="heading5">
				<span>03</span>
				<p>SPACE LAUNCH 101</p>
			</h5>
			<div className={stylesTechnology.content}>
				<div className="technologyLinks">
					<NavLink to="launch-vehicle">1</NavLink>
					<NavLink to="spaceport">2</NavLink>
					<NavLink to="space-capsule">3</NavLink>
				</div>
				<div className={stylesTechnology.technologyWriting}>
					<Outlet />
				</div>
				<Image
					encounter="technology"
					defaultImage="launch-vehicle"
					format="jpg"
				/>
			</div>
		</div>
	);
}

export default Technology;
