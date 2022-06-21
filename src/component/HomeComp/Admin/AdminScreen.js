import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../../Global/Global";
import HeaderComp from "../Header/HeaderComp";
import AllTeacher from "./AllTeacher";
import SideBar from "./SideBar";

const AdminScreen = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	return (
		<Container>
			<SideBarHolder>
				<SideBar />
			</SideBarHolder>

			<MainScreen>
				<HeaderComp />
			</MainScreen>
		</Container>
	);
};

export default AdminScreen;

const Button = styled.div`
	background-color: #742e9d;
	width: 100px;
	justify-content: center;
	display: flex;
	align-items: center;
	height: 40px;
	color: white;

	:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;

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
