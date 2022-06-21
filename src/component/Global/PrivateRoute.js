import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import decoder from "jwt-decode";
import Start from "../Auth/Start";
import AdminScreen from "../HomeComp/Admin/AdminScreen";
import StudentScreen from "../HomeComp/Student/StudentScreen";
import HomeScreen from "../HomeComp/HomeScreen";
import StaffDashScreen from "../HomeComp/Teacher/StaffDashScreen";
import TeacherEndpoint from "../HomeComp/Teacher/TeacherEndpoint";

const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state.user);

	if (user) {
		const token = decoder(user?.token);
		if (token) {
			return token?.status === "admin" ? (
				<HomeScreen />
			) : token?.status === "teacher" ? (
				<TeacherEndpoint />
			) : token?.status === "student" ? (
				<StudentScreen />
			) : null;
		}
	}

	return <Start />;
};

export default PrivateRoute;
