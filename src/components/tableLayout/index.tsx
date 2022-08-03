/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 15:47:52
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-03 11:18:50
 * @FilePath: \react18-admin\src\components\tablelayout\index.tsx
 * @Description:
 *
 */
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
	const { config, LayoutTree, LayoutForm, LayoutTable } = props;
	console.log("config", config);
	return (
		<div className="layout-container">
			{LayoutTree ? (
				<div className="tree" style={treeStyle}>
					<div style={treeContentStyle as any}>
						<LayoutTree />
					</div>
					{isOpen ? (
						<LeftSquareTwoTone className="arrow" onClick={() => setIsOpen(!isOpen)} />
					) : (
						<RightSquareTwoTone className="arrow" onClick={() => setIsOpen(!isOpen)} />
					)}
				</div>
			) : null}
			{LayoutForm || LayoutTable ? (
				<div className="contents">
					{LayoutForm ? (
						<div className="form">
							<LayoutForm />
						</div>
					) : null}
					{LayoutTable ? (
						<div className="table">
							<LayoutTable />
						</div>
					) : null}
				</div>
			) : null}
		</div>
	);
};
export default Tablelayout;
