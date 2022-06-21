import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logOut } from "../../Global/Global";

const TeacherScreen = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<Button
				onClick={() => {
					dispatch(logOut());
				}}
			>
				Log Out
			</Button>
			TeacherScreen
		</div>
	);
};

export default TeacherScreen;

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

const Container = styled.div``;
