import { Link } from "react-router-dom";
const Successfull = () => {
	return (
		<div>
			<h3> Form Successful</h3>
			<Link to="/">
				<button> Back to home</button>
			</Link>
		</div>
	);
};

export default Successfull;
