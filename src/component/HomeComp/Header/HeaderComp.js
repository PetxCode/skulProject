import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logOut, onToggleFalse, onToggleTrue } from "../../Global/Global";
import pix from "./babe.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import {
	IoMdNotificationsOutline,
	IoIosArrowDown,
	IoIosArrowUp,
} from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const HeaderComp = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const toggle = useSelector((state) => state.toggle);
	const dispatch = useDispatch();
	const [change, setChange] = useState(false);

	const onChangeHandle = () => {
		setChange(!change);
	};
	return (
		<Container>
			<Wrapper>
				<Holder>
					{toggle ? (
						<Icon
							onClick={() => {
								dispatch(onToggleFalse());
								console.log("This is True");
							}}
						/>
					) : (
						<Icon
							onClick={() => {
								dispatch(onToggleTrue());
								console.log("This is false");
							}}
						/>
					)}
					<SearchBar>
						<Input placeholder="Search Here" />
						<Icon1 />
					</SearchBar>
					{/* <span>{user?.code}</span> */}
					<span>{user?.status}</span>
				</Holder>

				<Holder>
					<Update to={`/admin-update/${0}`}>
						<Icon2 />
					</Update>

					<IconHolder>
						<Image src={pix} />

						<Log
							onClick={() => {
								dispatch(logOut());
								navigate("/");
							}}
						>
							Log Out
						</Log>
					</IconHolder>
				</Holder>
			</Wrapper>
		</Container>
	);
};

export default HeaderComp;

const Update = styled(Link)`
	color: black;
	text-decoration: none;
	height: 100%;
`;
const Log = styled.div`
	width: 80px;
	height: 40px;
	background-color: red;
	color: white;
	font-weight: 500;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	transition: all 350ms;
	margin-left: 5px;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	z-index: 100;
	align-items: center;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
	background-color: darkorange;
`;

const IconHolder = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 10px;
	transition: all 350ms;

	:hover {
		background-color: whitesmoke;
		cursor: pointer;
	}
`;

const Input = styled.input`
	background-color: transparent;
	border: 0;
	outline: none;
	flex: 1;
	height: 100%;
	padding-left: 10px;
`;

const Icon4 = styled(IoIosArrowUp)`
	font-size: 20px;
	color: lightblue;
`;

const Icon3 = styled(IoIosArrowDown)`
	font-size: 20px;
	color: lightblue;
`;

const Icon2 = styled(AiFillSetting)`
	font-size: 30px;
	transition: all 350ms;
	padding: 0 8px;
	height: 100%;

	:hover {
		background-color: whitesmoke;
		cursor: pointer;
	}
`;

const Icon1 = styled(BiSearchAlt)`
	margin-right: 10px;
	font-size: 20px;
	color: darkorange;
`;

const Icon = styled(GiHamburgerMenu)`
	font-size: 30px;
	margin-right: 15px;

	:hover {
		cursor: pointer;
	}
`;

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	border: 1px solid silver;
	width: 300px;
	border-radius: 30px;

	@media screen and (max-width: 695px) {
		display: none;
	}
`;

const Holder = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	z-index: 2;
`;

const Wrapper = styled.div`
	width: 93%;
	justify-content: space-between;
	display: flex;
	align-items: center;
	height: 100%;
`;

const Container = styled.div`
	width: calc(100vw - 300px);
	height: 70px;
	background-color: white;
	justify-content: center;
	display: flex;
	position: fixed;
	z-index: 100;

	@media screen and (max-width: 995px) {
		width: 100%;
	}

	@media screen and (max-width: 425px) {
		display: flex;
		width: 100vw;
	}
`;
