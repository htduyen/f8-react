import { useEffect, useState } from "react";

const Interval = () => {
	const [count, setCount] = useState(180);

	useEffect(() => {
		const countNumber = setInterval(() => {
			setCount((prev) => prev - 1);
			console.log("Counting......");
		}, 1000);

		return () => {
			clearInterval(countNumber);
			console.log("CLear....");
		};
	}, []);
	return (
		<div>
			<p>{count}</p>
		</div>
	);
};

export default Interval;
