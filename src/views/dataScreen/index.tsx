/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-02 17:49:56
 * @FilePath: \react18-admin\src\views\dataScreen\index.tsx
 * @Description:
 *
 */
// import { Button } from "antd";
// import { getAuthorButtons } from "@/api/modules/login";
import TableLayout from "@/components/tableLayout";

const DataScreen = () => {
	// const requestMenuList = async () => {
	// 	const res = await getAuthorButtons();
	// 	console.log(res);
	// };
	let config = {
		tree: true,
		content: true
	};
	return (
		<TableLayout config={config}>
			<div>你好李银河</div>
			<template key="tree">
				<div>22</div>
			</template>
		</TableLayout>
	);
	// <div className="content-box">
	// 	<span className="text">DataScreen 🍓🍇🍈🍉</span>
	// 	<Button type="primary" onClick={requestMenuList}>
	// 		点我发起网络请求 😎
	// 	</Button>
	// </div>
};

export default DataScreen;
