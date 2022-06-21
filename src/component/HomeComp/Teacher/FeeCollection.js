import React, { useState } from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
const FeeCollection = () => {
	const [tog, setTog] = useState(false);
	return (
		<Container>
			<Wrapper>
				<Title>Fee Collections</Title>
				<TopLine>
					<Text>
						{/* <Image src={pix} /> */}
						Picture
					</Text>
					<Text1>Name</Text1>
					<Text>Gender</Text>
					<Text>Amount</Text>
					<Text>Paid Date</Text>
					<Text>Status</Text>
				</TopLine>
				<TopLine1>
					<Text>
						<Image src={pix} />
					</Text>
					<Text1>Peter Oti</Text1>
					<Text>Male</Text>
					<Text>2000</Text>
					<Text>12-07-22</Text>
					<Text>
						{tog ? <Status bg>Paid</Status> : <Status>Unpaid</Status>}
					</Text>
				</TopLine1>
				<TopLine1>
					<Text>
						<Image src={pix} />
					</Text>
					<Text1>Peter Oti</Text1>
					<Text>Male</Text>
					<Text>2000</Text>
					<Text>12-07-22</Text>
					<Text>
						{tog ? <Status bg>Paid</Status> : <Status>Unpaid</Status>}
					</Text>
				</TopLine1>
			</Wrapper>
		</Container>
	);
};

export default FeeCollection;

const Status = styled.div`
	color: white;
	background-color: ${({ bg }) => (bg ? "green" : "red")};
	padding: 5px 10px;
	border-radius: 30px;
	font-size: 10px;
	width: 40px;
`;

const Wrapper = styled.div`
	margin-top: 70px;
	width: 800px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 839px) {
		width: 100%;
	}
`;

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
	width: 100%;
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
	padding-left: 5px;
`;
const Container = styled.div`
	margin: 10px;

	position: absolute;
	top: 70;
	right: 0;
	width: calc(100vw - 300px);
	display: flex;
	justify-content: center;

	@media screen and (max-width: 995px) {
		width: 100vw;
	}
`;
