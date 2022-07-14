import React, { memo } from "react";

const TestMemo = () => {
	console.log("re-render");
	return <div>Hello world!</div>
};
export default memo(TestMemo);
