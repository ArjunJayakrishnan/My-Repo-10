import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

Image.propTypes = {
	encounter: PropTypes.string.isRequired,
	defaultImage: PropTypes.string.isRequired,
	format: PropTypes.string.isRequired,
};

function Image({ encounter, defaultImage, format }) {
	const location = useLocation();
	const imageName =
		location.pathname.split("/").at(-1) === encounter
			? defaultImage
			: location.pathname.split("/").at(-1);
	return (
		<img src={`/image-${imageName}-landscape.${format}`} alt={imageName} />
	);
}

export default Image;
