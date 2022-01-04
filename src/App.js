import "./App.css";
import { Route, Switch } from "react-router-dom";
import FormLogin from "./Pages/FormLogin";
import Successfull from "./Pages/Successfull";
import Fail from "./Pages/Fail";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={FormLogin} />
				<Route path="/success" component={Successfull} />
				<Route path="/fail" component={Fail} />
				<Route path="/loginPage" component={FormLogin} />
			</Switch>
		</div>
	);
}

export default App;
