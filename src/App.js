import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainAuth from "./component/Auth/MainAuth";
import HomeScreen from "./component/HomeComp/HomeScreen";
import TeacherEndpoint from "./component/HomeComp/Teacher/TeacherEndpoint";

const App = () => {
	return (
		<BrowserRouter>
			<MainAuth />
			<HomeScreen />
			<TeacherEndpoint />
		</BrowserRouter>
	);
};

export default App;
