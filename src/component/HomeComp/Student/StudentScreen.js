import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logOut } from "../../Global/Global";

const StudentScreen = () => {
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
			Student Screen
		</div>
	);
};

export default StudentScreen;

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
