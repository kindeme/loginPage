import { Link } from "react-router-dom";
const Fail = () => {
	return (
		<div>
			<h2> Form fail</h2>
			<Link to="/">
				<button> Back to home</button>
			</Link>
		</div>
	);
};

export default Fail;
