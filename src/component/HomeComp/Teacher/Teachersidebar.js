import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { HiOfficeBuildinge } from "react-icons/hi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { onToggleFalse, onToggleTrue } from "../../Global/Global";
import {
	IoMdNotificationsOutline,
	IoIosArrowDown,
	IoIosArrowUp,
	IoIosArrowForward,
} from "react-icons/io";

const Teachersidebar = ({ change }) => {
	const toggle = useSelector((state) => state.toggle);
	const dispatch = useDispatch();
	return (
		<>
			<Container>
				<Wrapper2>
					<LogoHolder>
						<Logo>S</Logo>
						<LogoTitle> SkoolKode</LogoTitle>
					</LogoHolder>
				</Wrapper2>
				<Wrapper>
					<Title>Main Menu </Title>
					<Holder to="/teacher-overview">
						<Icon />
						<Text>Overview</Text>
					</Holder>

					<Holder to="/students">
						<Icon />
						<Text>Students</Text>
					</Holder>
					<Holder to="/management">
						<Icon />
						<Text>Resources</Text>
						{toggle ? (
							<Icon3
								onClick={() => {
									dispatch(onToggleFalse());
									console.log("This is True");
								}}
							/>
						) : (
							<IconI
								onClick={() => {
									dispatch(onToggleTrue());
									console.log("This is false");
								}}
							/>
						)}
					</Holder>
					{toggle ? (
						<HolderDown>
							<Holder1 to="/add-student">
								{/* <Icon /> */}
								<Text>Add Student</Text>
							</Holder1>
							<Holder1 to="/all-student">
								{/* <Icon /> */}
								<Text>All Students</Text>
							</Holder1>
							<Holder1 to="/create-class">
								{/* <Icon /> */}
								<Text>Create Class</Text>
							</Holder1>
							<Holder1 to="/my-classes">
								{/* <Icon /> */}
								<Text>View Classes</Text>
							</Holder1>
							<Holder1 to="/fee-collection">
								{/* <Icon /> */}
								<Text>Fee Collection</Text>
							</Holder1>
						</HolderDown>
					) : null}
				</Wrapper>
			</Container>
		</>
	);
};

export default Teachersidebar;

const Holder1 = styled(NavLink)`
	color: black;
	text-decoration: none;
	height: 60px;
	display: flex;
	align-items: center;
	color: #742e9d;
	overflow: hidden;

	&.active {
		/* border-left: 5px solid red; */
		color: darkorange;
		background-color: white;
	}
`;

const HolderDown = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	padding-left: 80px;
`;

const IconI = styled(IoIosArrowForward)`
	font-size: 20px;
	color: lightblue;
	padding: 0 20px;
	height: 100%;
`;

const Icon4 = styled(IoIosArrowUp)`
	/* font-size: 20px; */
	color: lightblue;
`;

const Icon3 = styled(IoIosArrowDown)`
	font-size: 20px;
	/* color: lightblue; */
	padding: 0 20px;
	height: 100%;
`;

const Icon = styled(AiFillHome)`
	padding-left: 30px;
	font-size: 24px;
	margin-right: 10px;
`;
const Text = styled.div`
	font-weight: 500;
	flex: 1;
	&.active {
		color: darkorange;
	}
`;

const Holder = styled(NavLink)`
	color: black;
	text-decoration: none;
	height: 60px;
	display: flex;
	align-items: center;
	color: #742e9d;
	overflow: hidden;
	/* width: 92%; */

	&.active {
		border-left: 5px solid red;
		color: darkorange;
		background-color: white;
	}
`;

const Title = styled.div`
	height: 50px;
	margin-left: 30px;
	display: flex;
	align-items: center;
`;

const LogoTitle = styled.div`
	font-weight: 500;
	font-size: 20px;
`;

const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;
const Wrapper2 = styled.div`
	width: 100%;
	overflow: hidden;
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 10px;
	margin-right: 10px;
	font-weight: 900;
	font-size: 30px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const LogoHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid silver;
	height: 70px;
	color: #742e9d;
`;

const Container = styled.div`
	width: 300px;
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	position: fixed;
	overflow: hidden;
	/* border-right: 1px solid silver; */
	/* top: 70px; */
	background-color: lightgray;
	height: 100vh;
	z-index: 1;
`;

const Container1 = styled.div`
	width: 80px;
`;
