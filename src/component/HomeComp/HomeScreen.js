import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdminScreen from "./Admin/AdminScreen";
import AllTeacher from "./Admin/AllTeacher";
import AllStudents from "./Admin/AllStudents";
import OverView from "./Admin/OverView";
import TeacherDetail from "./Admin/TeacherDetail";
import UpdateAdminProfile from "./Admin/UpdateAdminProfile";
import StudentDetail from "./Admin/StudentDetail";
import AddExpens from "./Admin/AddExpens";
import FeeCollection from "./Admin/FeeCollection";
import AllExpense from "./Admin/AllExpense";

const HomeScreen = () => {
	const user = useSelector((state) => state.user);
	return (
		<>
			{user?.status === "admin" ? (
				<div>
					<AdminScreen />
					<Routes>
						<Route path="/overview" element={<OverView />} />
						<Route path="/teachers" element={<AllTeacher />} />
						<Route path="/students" element={<AllStudents />} />
						<Route path="/teachers/detail/:id/" element={<TeacherDetail />} />
						<Route path="/students/detail" element={<StudentDetail />} />
						<Route path="/admin-update/:id" element={<UpdateAdminProfile />} />
						<Route path="/add-expense" element={<AddExpens />} />
						<Route path="/fee-collection" element={<FeeCollection />} />
						<Route path="/all-expense" element={<AllExpense />} />
					</Routes>
				</div>
			) : null}{" "}
		</>
	);
};

export default HomeScreen;
