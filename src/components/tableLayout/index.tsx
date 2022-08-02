/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 15:47:52
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-02 17:37:21
 * @FilePath: \react18-admin\src\components\tablelayout\index.tsx
 * @Description:
 *
 */
import { Tree } from "antd";
const treeData = [
	{
		title: "parent 1",
		key: "0-0",
		children: [
			{
				title: "parent 1-0",
				key: "0-0-0",
				disabled: true,
				children: [
					{
						title: "leaf",
						key: "0-0-0-0",
						disableCheckbox: true
					},
					{
						title: "leaf",
						key: "0-0-0-1"
					}
				]
			}
		]
	}
];
import { RightSquareTwoTone, LeftSquareTwoTone } from "@ant-design/icons";
import "./index.less";
import { useState } from "react";
const Tablelayout = (props: any) => {
	const [isOpen, setIsOpen] = useState(true);
	const treeStyle = {
		width: isOpen ? "20%" : "40px"
	};
	const treeContentStyle = isOpen
		? {}
		: {
				position: "absolute",
				left: "-9999px",
				transition: "all 3s"
		  };
	const { config, children } = props;
	console.log("config", children);
	return (
		<div className="layout-container">
			{config.tree ? (
				<div className="tree" style={treeStyle}>
					<div style={treeContentStyle as any}>
						<Tree treeData={treeData} />
					</div>
					{isOpen ? (
						<LeftSquareTwoTone className="arrow" onClick={() => setIsOpen(!isOpen)} />
					) : (
						<RightSquareTwoTone className="arrow" onClick={() => setIsOpen(!isOpen)} />
					)}
				</div>
			) : null}
			{config.content ? <div className="contents">content</div> : null}
		</div>
	);
};
export default Tablelayout;
