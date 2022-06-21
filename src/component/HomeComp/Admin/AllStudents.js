import React from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
import { Link } from "react-router-dom";

const AllStudents = () => {
	return (
		<Container>
			<Wrapper>
				<Text>All Students</Text>
				<Card>
					<Teacher to="detail">
						<Image src={pix} />
						<Name>name</Name>
					</Teacher>
					<Teacher to="detail">
						<Image src={pix} />
						<Name>name</Name>
					</Teacher>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default AllStudents;
const Nav = styled(Link)`
	text-decoration: none;
	color: red;
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
