import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import OverView from "../Teacher/OverView";
import AddClass from "./AddClass";
import AddStudent from "./AddStudent";
import AllStudents from "./AllStudents";
import ClassDetailStudents from "./ClassDetailStudents";
import MyClasses from "./MyClasses";
import StaffDashScreen from "./StaffDashScreen";
import StudentDetail from "./StudentDetail";
import UpdateTeacherProfile from "./UpdateTeacherProfile";

const TeacherEndpoint = () => {
	const user = useSelector((state) => state.user);

	return (
		<>
			{user?.status === "teacher" ? (
				<div>
					<StaffDashScreen />

					<Routes>
						<Route path="/teacher-overview" element={<OverView />} />
						<Route path="/add-student" element={<AddStudent />} />
						<Route path="/create-class" element={<AddClass />} />
						<Route path="/all-student" element={<AllStudents />} />
						<Route path="/student-detail" element={<StudentDetail />} />
						<Route path="/teacherProfile" element={<UpdateTeacherProfile />} />
						<Route path="/my-classes" element={<MyClasses />} />
						<Route
							path="/class-student/:id"
							element={<ClassDetailStudents />}
						/>
						<Route
							path="/class-student/:id/detail/:props"
							element={<StudentDetail />}
						/>
					</Routes>
				</div>
			) : null}
		</>
	);
};

export default TeacherEndpoint;
