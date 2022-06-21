import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Private from "../Global/Private";
import PrivateRoute from "../Global/PrivateRoute";
import AdminScreen from "../HomeComp/Admin/AdminScreen";
import StudentScreen from "../HomeComp/Student/StudentScreen";
import TeacherScreen from "../HomeComp/Teacher/TeacherScreen";
import AdminNewPassword from "./admin/AdminNewPassword";
import ResetPassword from "./admin/ResetPassword";
import AdminSignIn from "./AdminSignin";
import Register from "./Register";
import SignIn from "./SignIn";
import Start from "./Start";
import StudentSignIn from "./StudentSignIn";
import TeacherResetPassword from "./Teacher/TeacherResetPassword";
import TeacherRegister from "./TeacherRegister";
import TeacherSignInVerification from "./TeacherSignInVerification";
import TeacherSignIn from "./TearchSignIn";

const MainAuth = () => {
	const user = useSelector((state) => state.user);
	return (
		<>
			<Routes>
				{!user ? (
					<>
						<Route path="/register" element={<Register />} />
						<Route path="/signin" element={<SignIn />} />
						<Route path="/api/admin/:id/:token" element={<AdminSignIn />} />
						<Route
							path="/api/admin/reset/:id/:token"
							element={<AdminNewPassword />}
						/>
						<Route path="/password-reset" element={<ResetPassword />} />

						{/* Teacher Auth  */}

						<Route path="/teacher-signin" element={<TeacherSignIn />} />
						<Route
							path="/api/teacher/:id/:token"
							element={<TeacherSignInVerification />}
						/>
						<Route path="/teacher-register" element={<TeacherRegister />} />
						<Route
							path="/teacher-register-reset"
							element={<TeacherResetPassword />}
						/>

						{/* Student Auth  */}
						<Route path="/student-signin" element={<StudentSignIn />} />

						<Route
							path="/"
							element={
								<PrivateRoute>
									<Start />
								</PrivateRoute>
							}
						/>

						<Route
							path="/admin-screen"
							element={
								<Private>
									<AdminScreen />
								</Private>
							}
						/>

						<Route
							path="/teacher-screen"
							element={
								<Private>
									<TeacherScreen />
								</Private>
							}
						/>

						<Route
							path="/student-screen"
							element={
								<Private>
									<StudentScreen />
								</Private>
							}
						/>
					</>
				) : (
					<Route
						path="/"
						element={
							<PrivateRoute>
								<Start />
							</PrivateRoute>
						}
					/>
				)}
			</Routes>
		</>
	);
};

export default MainAuth;
