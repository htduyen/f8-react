import React, { memo } from "react";

const TestMemo = ({onBtnClicked}) => {
	console.log("re-render");
	return (
		<>
		<div>Hello world</div>
			<button onClick={onBtnClicked}>Stop</button>
		</>
	);
};
export default memo(TestMemo);
