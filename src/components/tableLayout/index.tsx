/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 15:47:52
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-04 11:19:17
 * @FilePath: \react18-admin\src\components\tablelayout\index.tsx
 * @Description:
 *
 */
import { RightSquareTwoTone, LeftSquareTwoTone } from "@ant-design/icons";
import "./index.less";
import { useState } from "react";
const Tablelayout = (props: any) => {
	const { config, LayoutTree, LayoutForm, LayoutTable } = props;
	const { buttons, columns, data } = config;
	const [isOpen, setIsOpen] = useState(true);
	const treeStyle = {
		width: isOpen ? "20%" : "40px"
	};
	const buttonsHandle = (e: any) => {
		console.log("buttonsHandle", e);
	};
	const treeContentStyle = isOpen
		? {}
		: {
				position: "absolute",
				left: "-9999px",
				transition: "all 3s"
		  };

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
							<LayoutTable columns={columns} data={data} buttons={buttons} buttonsHandle={buttonsHandle} />
						</div>
					) : null}
				</div>
			) : null}
		</div>
	);
};
export default Tablelayout;
