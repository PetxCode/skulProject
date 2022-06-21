import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TeacherHead from "./TeacherHead";
import Teachersidebar from "./Teachersidebar";

const StaffDashScreen = () => {
	const user = useSelector((state) => state.user);

	return (
		<Container>
			<SideBarHolder>
				<Teachersidebar />
			</SideBarHolder>

			<MainScreen>
				<TeacherHead />
			</MainScreen>
		</Container>
	);
};

export default StaffDashScreen;

const MainScreen = styled.div`
	width: calc(100vw - 300px);
	position: absolute;
	right: 0;
	@media screen and (max-width: 995px) {
		width: 100vw;
	}
`;
const SideBarHolder = styled.div`
	height: 100vh;
	background-color: lightgray;
	/* display: none; */

	@media screen and (max-width: 995px) {
		display: none;
	}
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	z-index: 100;
	position: absolute;
`;
