import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FormLogin.css";

const FormLogin = (props) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!userName || !password) {
			history.push("/fail");
		} else {
			history.push("/success");
		}
	};

	return (
		<div>
			<form className="login" onSubmit={handleSubmit}>
				<label>
					<span> UserName</span>
					<input
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</label>
				<label>
					<span> Password</span>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button> Submit</button>
			</form>
		</div>
	);
};

export default FormLogin;
