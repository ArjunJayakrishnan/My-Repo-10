import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Loader = lazy(() => import("./components/Loader"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Home = lazy(() => import("./components/Home"));
const Destination = lazy(() => import("./components/Destination"));
const Planet = lazy(() => import("./components/Planet"));
const Crew = lazy(() => import("./components/Crew"));
const CrewMember = lazy(() => import("./components/CrewMember"));
const Technology = lazy(() => import("./components/Technology"));
const TechnologyType = lazy(() => import("./components/TechnologyType"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="home" element={<Home />} />
					<Route path="destination" element={<Destination />}>
						<Route index element={<Planet planetName="moon" />} />
						<Route path="moon" element={<Planet planetName="moon" />} />
						<Route path="mars" element={<Planet planetName="mars" />} />
						<Route path="europa" element={<Planet planetName="europa" />} />
						<Route path="titan" element={<Planet planetName="titan" />} />
					</Route>
					<Route path="crew" element={<Crew />}>
						<Route index element={<CrewMember crewMemberName="DOUGLAS" />} />
						<Route
							path="douglas-hurley"
							element={<CrewMember crewMemberName="DOUGLAS" />}
						/>
						<Route
							path="mark-shuttleworth"
							element={<CrewMember crewMemberName="MARK" />}
						/>
						<Route
							path="victor-glover"
							element={<CrewMember crewMemberName="VICTOR" />}
						/>
						<Route
							path="anousheh-ansari"
							element={<CrewMember crewMemberName="ANOUSHEH" />}
						/>
					</Route>
					<Route path="technology" element={<Technology />}>
						<Route
							index
							element={<TechnologyType technologyId="launch-vehicle" />}
						/>
						<Route
							path="launch-vehicle"
							element={<TechnologyType technologyId="launch-vehicle" />}
						/>
						<Route
							path="spaceport"
							element={<TechnologyType technologyId="spaceport" />}
						/>
						<Route
							path="space-capsule"
							element={<TechnologyType technologyId="space-capsule" />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
