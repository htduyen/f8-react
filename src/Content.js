import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const Content = () => {
	const [type, setType] = useState("posts");
	const [title, setTitle] = useState("");

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((resp) => resp.json())
			.then((posts) => {
				setPosts(posts);
			});
	}, [type]);

	return (
		<div>
			{tabs.map((tab) => (
				<button key={tab} onClick={() => setType(tab)} style={type === tab ? {color: "white", backgroundColor: "black"} : {}}>
					{tab}
				</button>
			))}

			<input value={title} onChange={(e) => setTitle(e.target.value)} />
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title || post.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Content;
