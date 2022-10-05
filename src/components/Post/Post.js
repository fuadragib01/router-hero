import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
	const { id, title, body } = post;
	const navigate = useNavigate();
	const postDetailsClkHandler = () => {
		navigate(`/post/${id}`);
	};

	return (
		<div className="post">
			<h2>{title}</h2>
			<p>{body}</p>
			<Link to={`/post/${id}`}>Post Details</Link>
			<Link to={`/post/${id}`}>
				<button>Post Details</button>
			</Link>
			<button onClick={postDetailsClkHandler}>Show Details</button>
		</div>
	);
};

export default Post;
