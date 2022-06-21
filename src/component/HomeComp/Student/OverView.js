import React from "react";
import styled from "styled-components";
import { FaUserGraduate } from "react-icons/fa";
import Card from "./AllProps/Card";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import BestStudents from "./BestStudents";
import TopTeachers from "./TopTeachers";

const OverView = () => {
	return (
		<Container>
			<Wrapper>
				<Div>
					<strong>Welcome Admin!</strong>
					<div>Dashboard</div>
				</Div>
				<Div2>
					<Card
						rate="50055"
						student="students"
						bg="#fedd9b"
						bc="#fdbb38"
						icon={<FaUserGraduate />}
					/>
					<Card
						rate="50+"
						student="Teachers"
						bg="#d1effe"
						bc="#19affb"
						icon={<BsFillPersonLinesFill />}
					/>
					<Card
						rate="30+"
						student="Department"
						bg="#fde1d9"
						bc="#f46841"
						icon={<AiFillHome />}
					/>
					<Card
						rate="50+"
						student="Expens "
						bg="#e2e1fe"
						bc="#6e6bfa"
						icon={<MdAccountBalanceWallet />}
					/>
				</Div2>
				<Div2>
					<BestStudents />
					<br />
					<TopTeachers />
				</Div2>
			</Wrapper>
		</Container>
	);
};

export default OverView;

const Comp = styled.div`
	display: flex;
`;

const Wrapper = styled.div`
	width: 90%;
	/* background-color: red; */
	display: flex;
	flex-direction: column;
	padding-top: 10px;
`;
const Div = styled.div`
	margin-bottom: 30px;
	strong {
		font-size: 30px;
	}
`;
const Div2 = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	strong {
		font-size: 30px;
	}

	width: 100%;
	/* background-color: pink; */
	display: flex;
`;
const Container = styled.div`
	width: calc(100vw - 300px);
	min-height: calc(100vh - 140px);
	/* height: 100%; */
	position: absolute;
	top: 0px;
	right: 0;
	padding-top: 70px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 995px) {
		width: 100vw;
	}
`;
