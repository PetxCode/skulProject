import React, { useState } from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AllTeacher = () => {
	const [teacher, setTeacher] = useState([]);
	const user = useSelector((state) => state.user);
	console.log(user._id);
	const getTeachers = async () => {
		const mainURL = "";
		const localURL = "http://localhost:2331";
		const url = `${localURL}/api/admin/${user._id}/teachers/get`;

		await axios.get(url).then((res) => {
			setTeacher(res.data.data);
		}, []);
	};

	useEffect(() => {
		getTeachers();
		console.log(teacher);
	}, []);
	return (
		<Container>
			<Wrapper>
				<Text>All Teachers</Text>

				{teacher?.teacher?.map((props) => (
					<Card key={props._id}>
						<Teacher to={`detail/${props._id}`}>
							<div>
								{props.avatar ? (
									<Image src={props.avatar} />
								) : (
									<Div>{props.fullName.charAt(0)}</Div>
								)}
							</div>

							<Name>{props.fullName}</Name>
						</Teacher>
					</Card>
				))}
				{/* 
				<Text>
					<Nav to="/">Let's Go</Nav>
				</Text> */}
			</Wrapper>
		</Container>
	);
};

export default AllTeacher;
const Nav = styled(Link)`
	text-decoration: none;
	color: red;
`;

const Div = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 5px;
	overflow: hidden;
	background-color: #742e9d;
	color: white;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 100px;
`;

const Name = styled.div``;

const Image = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 5px;
	object-fit: cover;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Teacher = styled(Link)`
	margin-right: 10px;
	margin-bottom: 10px;
	transition: all 350ms;
	text-decoration: none;
	color: black;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Card = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Text = styled.div`
	font-weight: 500;
	text-transform: uppercase;
	margin-bottom: 40px;
`;

const Wrapper = styled.div`
	width: 95%;
	margin-top: 20px;
`;
const Container = styled.div`
	/* padding-top: 70px; */
	width: calc(100vw - 300px);
	display: flex;
	justify-content: center;
	/* background-color: #fafafa; */
	height: 100%;
	min-height: calc(100vh - 70px);
	position: absolute;
	right: 0;
	top: 70px;
	z-index: 100;

	@media screen and (max-width: 995px) {
		width: 100vw;
	}
`;
