import React from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
const BestStudents = () => {
	return (
		<Container>
			<Title>Best Performing Students</Title>
			<TopLine>
				<Text>
					{/* <Image src={pix} /> */}
					Picture
				</Text>
				<Text1>Name</Text1>
				<Text>Mark</Text>
				<Text>Percentage</Text>
			</TopLine>
			<TopLine1>
				<Text>
					<Image src={pix} />
				</Text>
				<Text1>Name</Text1>
				<Text>Mark</Text>
				<Text>Percentage</Text>
			</TopLine1>
		</Container>
	);
};

export default BestStudents;

const Image = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
`;
const Title = styled.div`
	text-align: center;
	padding: 10px;
	font-weight: 700;
	text-transform: uppercase;
`;
const Text1 = styled.div`
	padding: 0 10px;
	width: 200px;
`;
const Text = styled.div`
	padding: 0 10px;
	width: 100px;
`;
const TopLine1 = styled.div`
	display: flex;
	padding: 10px 0;
	border-top: 1px solid silver;
	transition: all 350ms;

	:hover {
		background-color: whitesmoke;
	}
`;
const TopLine = styled.div`
	display: flex;
	padding: 10px 0;
`;
const Container = styled.div`
	background-color: white;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
