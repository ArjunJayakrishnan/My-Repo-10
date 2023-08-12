import NavigationBar from "./NavigationBar";
import stylesHome from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	return (
		<div className={stylesHome.home}>
			<NavigationBar />
			<div className={stylesHome.content}>
				<div className={stylesHome.writingHome}>
					<h5>SO, YOU WANT TO TRAVEL TO</h5>
					<h1>SPACE</h1>
					<p>
						Let&apos;s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we&apos;ll give you a truly out of
						this world experience!
					</p>
				</div>
				<div
					className={stylesHome.whiteCircle}
					onClick={() => navigate("/destination")}
				>
					EXPLORE
				</div>
			</div>
		</div>
	);
}

export default Home;
