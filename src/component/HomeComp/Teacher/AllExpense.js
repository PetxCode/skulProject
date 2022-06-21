import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";

const AllExpense = () => {
	const [tog, setTog] = useState(false);
	const user = useSelector((state) => state.user);
	const id = user._id;

	const [expense, setExpense] = useState({});

	const getExpense = async () => {
		const mainURL = "";
		const localURL = "http://localhost:2331";
		const url = `${localURL}/api/expense/${id}`;

		await axios.get(url).then((res) => {
			setExpense(res.data.data);
		});
	};

	useEffect(() => {
		getExpense();
	}, []);
	return (
		<Container>
			<Wrapper>
				<Title>Total Expenses</Title>
				<TopLine>
					<Text1>Item Name</Text1>
					<Text>Item Quantity</Text>
					<Text>Expense Amount</Text>
					<Text>Source Purchase</Text>
					<Text>Purchase Date</Text>
				</TopLine>
				{expense?.expense?.map((props) => (
					<TopLine1 key={props._id}>
						<Text1>{props.itemName}</Text1>
						<Text>{props.itemQuantity}</Text>
						<Text>{props.expenseAmount}</Text>
						<Text>{props.sourcePurchase}</Text>
						<Text>{props.createdAt}</Text>
					</TopLine1>
				))}
			</Wrapper>
		</Container>
	);
};

export default AllExpense;

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
	width: 100%;

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
	z-index: 100;
	@media screen and (max-width: 995px) {
		width: 100vw;
	}
`;
