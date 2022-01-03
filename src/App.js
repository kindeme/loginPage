import "./App.css";
import { Route, Switch } from "react-router-dom";
import FormLogin from "./Pages/FormLogin";
import Successfull from "./Pages/Successfull";
import Fail from "./Pages/Fail";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/loginPage" exact component={FormLogin} />
				<Route path="/sucess" exact component={Successfull} />
				<Route path="/fail" exact component={Fail} />
			</Switch>
		</div>
	);
}

export default App;
