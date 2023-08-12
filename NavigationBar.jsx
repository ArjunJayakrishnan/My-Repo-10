import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
	return (
		<nav className={styles.nav}>
			<img src="/logo.svg" />
			<div className={styles.line}></div>
			<div className="NavBarLinks">
				<NavLink to="/home">
					<span>00</span> Home
				</NavLink>
				<NavLink to="/destination">
					<span>01</span> Destination
				</NavLink>
				<NavLink to="/crew">
					<span>02</span> Crew
				</NavLink>
				<NavLink to="/technology">
					<span>03</span> Technology
				</NavLink>
			</div>
		</nav>
	);
}

export default NavigationBar;
