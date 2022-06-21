import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pix from "./babe.jpeg";

import { BsGrid3X3, BsBookmark, BsPersonBoundingBox } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const TeacherDetail = () => {
	const { id } = useParams();

	const userID = useSelector((state) => state.user);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [data, setData] = useState({});
	const [mainUser, setMainUser] = useState({});
	const [readUser, setReadUser] = useState({});
	const [mainPost, setMainPost] = useState([]);

	const [post, setPost] = useState(true);
	const [video, setVideo] = useState(false);
	const [save, setSave] = useState(false);
	const [tag, setTag] = useState(false);

	const getTeacher = async () => {
		const mainURL = ``;
		const localURL = "http://localhost:2331";
		const url = `${localURL}/api/teacher/${id}`;

		await axios.get(url).then((res) => {
			setData(res.data.data);
		});
	};

	useEffect(() => {
		getTeacher();
	}, [data]);

	return (
		<Container>
			<Wrapper>
				<BottonBack
					onClick={() => {
						navigate(-1);
					}}
				>
					Go Back
				</BottonBack>
				<Top>
					{/* <Image src={pix} /> */}
					<div style={{ marginRight: "40px" }}>
						{data.avatar ? (
							<Image src={data.avatar} />
						) : (
							<Div>{data.fullName.charAt(0)}</Div>
						)}
					</div>
					<Contents>
						<NameDetails>
							<ProfileName>{data.displayName}</ProfileName>
							<Space />

							{/* <EditButton to={`/update/}`}>Edit Profile</EditButton> */}
							{/* 
							<div>
								<Botton>Unfollow</Botton>

								<Botton>Follow</Botton>
							</div> */}

							{/* <Icon /> */}
						</NameDetails>

						<NameDetails>
							<Post>
								<Count>{data?.class?.length}</Count>
								<Title>Classes</Title>
							</Post>
							<Post>
								<Count>{0}</Count>
								<Title>Students</Title>
							</Post>
							<Post>
								<Count>{0}</Count>
								<Title>Ratings</Title>
							</Post>
						</NameDetails>

						<Detail>
							<Name>{data.fullName}</Name>
							<Bio>{data.profile}</Bio>
							<WebSite>+234{data.phoneNumber}</WebSite>
						</Detail>
					</Contents>
				</Top>

				<Nav>
					<NavHolder
						bg={post ? "bg" : ""}
						onClick={() => {
							setPost(true);
							setVideo(false);
							setSave(false);
							setTag(false);
						}}
					>
						<NavIcon />
						<Title cap fs>
							Classes
						</Title>
					</NavHolder>
					<NavHolder
						bg={video ? "bg" : ""}
						onClick={() => {
							setPost(false);
							setVideo(true);
							setSave(false);
							setTag(false);
						}}
					>
						<NavIcon1 />
						<Title cap fs>
							Students
						</Title>
					</NavHolder>
					<NavHolder
						bg={save ? "bg" : ""}
						onClick={() => {
							setPost(false);
							setVideo(false);
							setSave(true);
							setTag(false);
						}}
					>
						<NavIcon2 />
						<Title cap fs>
							Save
						</Title>
					</NavHolder>
					<NavHolder
						bg={tag ? "bg" : ""}
						onClick={() => {
							setPost(false);
							setVideo(false);
							setSave(false);
							setTag(true);
						}}
					>
						<NavIcon3 />
						<Title cap fs>
							Tags
						</Title>
					</NavHolder>
				</Nav>
				{post ? (
					<PostImages>
						{mainUser?.post?.map((props) => (
							<ImagePost src={props.avatar} key={props._id} />
						))}
					</PostImages>
				) : video ? (
					<PostImages>
						{mainUser?.video?.map((props) => (
							<ImagePost src={props.avatar} key={props._id} />
						))}
					</PostImages>
				) : save ? (
					<PostImages>
						{mainUser?.save?.map((props) => (
							<ImagePost src={props.avatar} key={props._id} />
						))}
					</PostImages>
				) : tag ? (
					<PostImages>
						{mainUser?.tag?.map((props) => (
							<ImagePost src={props.avatar} key={props._id} />
						))}
					</PostImages>
				) : null}
			</Wrapper>
		</Container>
	);
};

export default TeacherDetail;

const Div = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	overflow: hidden;
	background-color: #742e9d;
	color: white;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 100px;
`;

const BottonBack = styled.div`
	width: 70px;
	margin-top: 30px;
	margin-bottom: 50px;
	margin-left: 50px;
	background-color: #742e9d;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-weight: 500;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	padding: 5px 20px;

	:hover {
		cursor: pointer;
		background-color: rgba(16, 143, 233, 0.8);
	}
`;

const Botton = styled.div`
	margin: 10px;
	background-color: rgb(16, 143, 233);
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-weight: 500;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	padding: 5px 40px;
	:hover {
		cursor: pointer;
		background-color: rgba(16, 143, 233, 0.8);
	}
`;

const ImagePost = styled.img`
	width: 245px;
	height: 245px;
	object-fit: cover;
	margin: 5px;
`;

const Space = styled.div`
	flex: 1;
`;

const PostImages = styled.div`
	width: 100%;
	justify-content: center;
	flex-wrap: wrap;
	display: flex;
`;

const NavIcon3 = styled(BsPersonBoundingBox)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon2 = styled(BsBookmark)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon1 = styled(MdSlowMotionVideo)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavIcon = styled(BsGrid3X3)`
	font-size: 10px;
	margin-right: 3px;
`;

const NavHolder = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
	position: relative;

	:after {
		content: "";
		height: 2px;
		background-color: ${({ bg }) => (bg ? "purple" : "transparent")};
		width: 100%;
		position: absolute;
		top: -21px;
	}

	cursor: pointer;
`;

const Nav = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	border-top: 1px solid silver;
	padding: 20px 0;
`;

const WebSite = styled.a`
	color: rgba(16, 143, 233);
	font-style: italic;
	cursor: pointer;
	text-decoration: none;
`;
const Bio = styled.div``;

const Name = styled.div`
	font-weight: 500;
`;

const Detail = styled.div`
	font-size: 13px;
`;

const Title = styled.div`
	text-transform: ${({ cap }) => (cap ? "uppercase" : "normal")};
	font-size: ${({ fs }) => (fs ? "10px" : "12px")};
	font-weight: ${({ fs }) => (fs ? "500" : "normal")};
	color: ${({ fs }) => (fs ? "lightgray" : "black")};
`;

const Count = styled.div`
	font-weight: 500;
	margin-right: 5px;
`;

const Post = styled.div`
	display: flex;
	margin-right: 20px;
	font-size: 13px;
`;

const Icon = styled(FiSettings)`
	font-size: 30px;
	:hover {
		cursor: pointer;
	}
`;

const EditButton = styled(Link)`
	color: black;
	text-decoration: none;
	padding: 10px 20px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	margin-right: 20px;
	font-size: 12px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

const ProfileName = styled.div`
	font-size: 25px;
	font-weight: lighter;
	margin-right: 20px;
`;

const NameDetails = styled.div`
	display: flex;
	margin: 10px 0;
	align-items: center;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 80px;
`;

const Top = styled.div`
	margin: 20px 40px;
	display: flex;
`;

const Wrapper = styled.div`
	width: 768px;
`;

const Container = styled.div`
	/* padding-top: 70px; */
	width: calc(100vw - 300px);
	display: flex;
	justify-content: center;
	background-color: #fafafa;
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
