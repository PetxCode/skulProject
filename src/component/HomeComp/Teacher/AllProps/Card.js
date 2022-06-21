import React from "react";
import styled from "styled-components";
import { FaUserGraduate } from "react-icons/fa";
const Card = ({ icon, bc, rate, student, bg }) => {
	return (
		<Container bg={bg} bc={bc}>
			<IconHold>
				{/* <Icon bc={bc} /> */}
				<Icon bc={bc}>{icon}</Icon>
			</IconHold>
			<Hold>
				<strong>{rate}</strong>
				<div>{student}</div>
			</Hold>
		</Container>
	);
};

export default Card;

const IconHold = styled.div`
	height: 120px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Icon = styled.div`
	font-size: 30px;
	color: #fff;
	padding: 20px 30px;
	background-color: ${({ bc }) => bc};
	border-radius: 10px;
`;

// const Icon = styled(FaUserGraduate)`
// 	font-size: 30px;
// 	color: #fff;
// 	padding: 20px;
// 	background-color: ${({ bc }) => bc};
// 	border-radius: 10px;
// `;
const Hold = styled.div`
	line-height: 1.2;
	color: rgba(0, 0, 0, 0.8);
	strong {
		font-size: 30px;
	}
	div {
		font-size: 16px;
	}
`;

const Container = styled.div`
	width: 230px;
	display: flex;
	padding: 10px 0;
	background-color: ${({ bg }) => bg};
	border-radius: 25px 0 25px 0;
	justify-content: space-around;
	margin: 20px;
	align-items: center;
	padding: 0 20px;
	height: 160px;
	border: 3px solid;
	border-color: ${({ bc }) => bc};
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

	@media screen and (max-width: 425px) {
		display: flex;
		width: 100%;
		margin: 10px 0px;
	}
`;
