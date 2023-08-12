import stylesLoader from "./Loader.module.css";

function Loader() {
	return (
		<div className={stylesLoader.container}>
			<h1 className={stylesLoader.message}>Loading...</h1>
		</div>
	);
}

export default Loader;
