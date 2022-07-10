import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const Content = () => {
	const [type, setType] = useState("posts");
	const [title, setTitle] = useState("");

	const [posts, setPosts] = useState([]);
	const [goToTop, setGoToTop] = useState(false);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((resp) => resp.json())
			.then((posts) => {
				setPosts(posts);
			});
	}, [type]);

	useEffect(() => {
		const scrollHandler = () => {
			if (window.scrollY > 200) {
				setGoToTop(true);
				// console.log("value");
			} else {
				setGoToTop(false);
			}

			//setGoToTop(window.scrollY > 200)
		};
		window.addEventListener("scroll", scrollHandler);
		console.log('Add listener!!!!!!!!!!!!')

		///Clean up
		return () => {
			window.removeEventListener('scroll', scrollHandler)
			console.log('Clean up!!!!!!!!!!!!!!11')
		}
	}, []);

	// console.log('re-render')

	return (
		<div>
			{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => setType(tab)}
					style={
						type === tab
							? { color: "white", backgroundColor: "black" }
							: {}
					}
				>
					{tab}
				</button>
			))}

			<input value={title} onChange={(e) => setTitle(e.target.value)} />
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title || post.name}</li>
				))}
			</ul>
			{goToTop && <button style={{position: 'fixed', right: 10, bottom: 20}}>Go to top</button>}
		</div>
	);
};

export default Content;
