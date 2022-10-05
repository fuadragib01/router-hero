import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
	const post = useLoaderData();
	const { title, body, userId } = post;
	const navigate = useNavigate();
	const getAuthorClkHandler = () => {
		navigate(`/friend/${userId}`);
	};
	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
			<button onClick={getAuthorClkHandler}>Get the Author</button>
		</div>
	);
};

export default PostDetails;
