import React, { useState } from "react";
import styled from "styled-components";

import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGoogleCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import pix from "./babe.jpeg";
import { useSelector } from "react-redux";

const UpdateTeacherProfile = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [image, setImage] = useState(user.avatar);
	const [avatar, setAvatar] = useState("");

	const yupSchema = yup.object().shape({
		profile: yup.string().required("School profile has to be filled"),
		fullName: yup.string().required("full name has to be entered"),
		phoneNumber: yup.number().integer().required(),
		displayName: yup.string().required("displayed name has to be filled"),
		gender: yup.string().required("gender name has to be filled"),
	});

	const handlePix = (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);
		setAvatar(file);
	};

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) });

	const onSubmit = handleSubmit(async (val) => {
		console.log(val);
		const { gender, profile, displayName, phoneNumber } = val;

		const formData = new FormData();

		formData.append("profile", profile);
		formData.append("gender", gender);
		formData.append("displayName", displayName);
		formData.append("phoneNumber", phoneNumber);
		formData.append("avatar", avatar);

		const config = {
			"content-type": "multipart/form-data",
		};

		const localURL = "http://localhost:2331";
		const url = `${localURL}/api/teacher/${user._id}`;
		const bestURL = `http://localhost:2331/api/teacher/${user._id}`;

		await axios.patch(bestURL, formData, config);

		Swal.fire({
			position: "center",
			icon: "success",
			title: "Please check your email for account verification",
			showConfirmButton: false,
			timer: 2500,
		}).then(() => {
			navigate("/overview");
		});
	});

	return (
		<Container>
			<Wrapper>
				<Brand>
					<Logo to="/">
						{image ? (
							<Bar src={image} />
						) : (
							<Div>
								{user?.fullName.split(" ")[0].charAt(0) +
									user?.fullName.split(" ")[1].charAt(0)}
							</Div>
						)}

						<LogoTitle htmlFor="pix">update Pix</LogoTitle>
						<ImageInput
							id="pix"
							onChange={handlePix}
							type="file"
							accept="image/*"
						/>
					</Logo>
				</Brand>

				<Line />
				<MainCard onSubmit={onSubmit} type="multipart/form-data">
					<LogoTitle1>Update Teacher's Profile</LogoTitle1>
					<NameArea>
						<InputTitle>Your Profile</InputTitle>
						<InputArea
							placeholder="e.g: Brief Profile"
							{...register("profile")}
						/>
					</NameArea>
					<Error>{errors?.profile?.message}</Error>

					<br />

					<Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Full Name</InputTitle>
								<Input placeholder="e.g: Peter Oti" {...register("fullName")} />
							</Phone>
							<Error>{errors?.fullName?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Gender</InputTitle>
								<Input placeholder="e.g: Best_Ever" {...register("gender")} />
							</Phone1>
							<Error>{errors?.gender?.message}</Error>
						</PhoneData>
					</Hold>
					<Hold>
						<PhoneData>
							<Phone>
								<InputTitle>Phone No</InputTitle>
								<Input
									placeholder="e.g: 2348137204472"
									{...register("phoneNumber")}
								/>
							</Phone>
							<Error>{errors?.phoneNumber?.message}</Error>
						</PhoneData>

						<PhoneData>
							<Phone1>
								<InputTitle>Display Name</InputTitle>
								<Input
									placeholder="e.g: Best_Ever"
									{...register("displayName")}
								/>
							</Phone1>
							<Error>{errors?.displayName?.message}</Error>
						</PhoneData>
					</Hold>

					<Button type="submit">update profile</Button>
				</MainCard>
			</Wrapper>
		</Container>
	);
};

export default UpdateTeacherProfile;

const Div = styled.div`
	margin-bottom: 15px;
	width: 200px;
	height: 200px;
	border-radius: 10px;
	background-color: #742e9d;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
`;

const PhoneData = styled.div`
	width: 100%;
`;

const PhoneData21 = styled.div`
	/* width: 100%; */
	flex: 0.4;
`;
const PhoneData22 = styled.div`
	/* width: 100%; */
`;

const ImageInput = styled.input`
	display: none;
`;
const Error = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 3px;
	display: flex;
	justify-content: flex-start;
	width: 100%;
	font-weight: 500;
`;

const Span = styled(Link)`
	margin: 0 5px;
	color: #742e9d;
	font-weight: 700;
	text-decoration: none;
`;
const Icons = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
	font-size: 35px;
	color: #0077b7;
	:hover {
		cursor: pointer;
	}
`;

const Icon2 = styled(AiFillTwitterSquare)`
	font-size: 35px;
	color: #50abf1;
	:hover {
		cursor: pointer;
	}
`;

const Icon1 = styled(AiFillFacebook)`
	font-size: 35px;
	color: #475993;
	:hover {
		cursor: pointer;
	}
`;
const Icon = styled(AiFillGoogleCircle)`
	font-size: 35px;
	color: red;
	:hover {
		cursor: pointer;
	}
`;

const SocialText = styled.div`
	font-size: 12px;
	display: flex;
	margin-top: 50px;
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Button = styled.button`
	outline: none;
	border: 0;
	font-family: Poppins;
	background-color: #742e9d;
	height: 45px;
	width: 100%;
	color: white;
	font-size: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	transition: all 350ms;
	z-index: 151;
	:hover {
		cursor: pointer;
		transform: scale(0.99);
	}
`;

const InputTitle = styled.div`
	font-size: 13px;
	position: absolute;
	top: -10px;
	left: 7px;
	padding: 0 3px;
	background-color: #f7eff1;
	/* background-clip: content-box; */
	font-weight: 700;
	color: #742e9d;
`;

const Input = styled.input`
	background-color: transparent;
	outline: none;
	border: 0;
	width: 100%;
	height: 100%;
	padding-left: 10px;

	::placeholder {
		color: lightgray;
		font-family: Poppins;
	}
`;

const InputArea = styled.textarea`
	background-color: transparent;
	outline: none;
	border: 0;
	width: 100%;
	height: 100%;
	padding-left: 10px;
	padding-top: 10px;
	resize: none;

	::placeholder {
		color: lightgray;
		font-family: Poppins;
	}
`;

const Hold22 = styled.div`
	display: flex;
	margin: 0 10px;
	justify-content: space-between;
	width: 100%;
	margin: 17px 0;
`;

const Hold = styled.div`
	display: flex;
	margin: 0 10px;
	justify-content: space-between;
	width: 100%;
	margin: 17px 0;
`;

const Phone11 = styled.div`
	width: 96%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
	margin-left: 5px;
`;

const Phone1 = styled.div`
	width: 96%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
	margin-left: 5px;
`;

const Phone2 = styled.div`
	/* width: 96%; */
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
	margin-right: 5px;
`;

const Phone = styled.div`
	width: 96%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
	margin-right: 5px;
`;

const NameArea = styled.div`
	width: 100%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 150px;
	position: relative;
`;
const Name = styled.div`
	width: 100%;
	border: 1px solid silver;
	border-radius: 5px;
	height: 40px;
	position: relative;
`;

const MainCard = styled.form`
	width: 400px;
	flex-direction: column;
	display: flex;
	align-items: center;
	padding-top: 50px;
	z-index: 100;
`;

const Line = styled.div`
	height: 400px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	margin: 0 50px;

	@media screen and (max-width: 725px) {
		display: none;
	}
`;

const Brief = styled.div`
	margin-top: 20px;
	color: gray;
	font-size: 10px;
	text-align: center;
`;

const Text = styled.div`
	font-weight: 700;
	margin-top: 25px;
	text-align: center;
	width: 300px;
	font-size: 25px;
	line-height: 1.2;
	color: #742e9d;
`;

const Logo = styled.div`
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 60px 0;

	@media screen and (max-width: 725px) {
		margin: 0;
	}
`;

const LogoTitle1 = styled.div`
	font-weight: 700;
	color: gray;
	margin-bottom: 50px;
	color: #742e9d;
	font-size: 30px;
	/* text-transform: uppercase; */
	font-family: Pacifico;
`;

const LogoTitle = styled.label`
	background-color: #742e9d;
	font-weight: 500;
	color: white;
	padding: 10px 20px;
	font-size: 12px;
	border-radius: 2px;
	transition: all 350ms;
	z-index: 151;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const Bar = styled.img`
	object-fit: cover;
	width: 200px;
	height: 200px;
	border-radius: 10px;
	margin-bottom: 15px;
	background-color: #fffbf8;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
	font-weight: 900;
	color: purple;
`;

const Brand = styled.div`
	width: 200px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	width: 900px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 725px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0;
		position: absolute;
		top: 70;
		margin-top: 140px;
	}
`;

const Container = styled.div`
	width: calc(100vw - 300px);
	min-height: 100vh;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	top: 70;
	/* z-index: -1; */

	@media screen and (max-width: 995px) {
		width: 100vw;
		top: 150;
	}
`;
