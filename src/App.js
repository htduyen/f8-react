import { useEffect, useState } from "react";

function App() {
	const [avatar, setAvatar] = useState();

	useEffect(() => {
		return () => {
			avatar && URL.revokeObjectURL(avatar.url);
		};
	}, [avatar]);

	const choseImgHandler = (e) => {
		const file = e.target.files[0];
		file.url = URL.createObjectURL(file);
		setAvatar(file);
	};

	return (
		<div className="App">
			<input type="file" onChange={choseImgHandler} />

			{avatar && <img src={avatar.url} alt="" width="50%" />}
		</div>
	);
}

export default App;
