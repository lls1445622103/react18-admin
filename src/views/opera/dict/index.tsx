/*
 * @Author: lls
 * @Date: 2022-08-01 22:05:26
 * @LastEditors: lls
 * @LastEditTime: 2022-08-02 21:14:14
 * @FilePath: \react18-admin\src\views\opera\dict\index.tsx
 * @Description:
 *
 */
import { useEffect, useState, useCallback } from "react";
import { Table, Button, Space } from "antd";
import "./index.less";
const UseHooks = () => {
	// 按钮权限
	// const { RangePicker } = DatePicker;
	// const authRef = useRef<HTMLDivElement>(null);
	const authRef = useCallback((node: any) => {
		console.log("node", node);
		if (node !== null) {
			const height = node.getBoundingClientRect().height;
			setTableStyle({ ...tableStyle, height: `calc( 100% - ${height}px )` });
		}
	}, []);
	useEffect(() => {
		// if (authRef) {
		// 	let height: any = 2;
		// 	setTableStyle({ ...tableStyle, height: `calc( 100% - ${height}px )` });
		// 	console.log("操作了");
		// }
		console.log("authRef", authRef);
	}, []);
	const [tableStyle, setTableStyle] = useState({
		height: "auto"
	});
	const [dataSource, setDataSource] = useState([
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		}
	]);

	const columns: any[] = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			align: "center"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age",
			align: "center"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address",
			align: "center",
			width: "50%"
		}
	];
	return (
		<div className="box">
			<div className="center" ref={authRef}>
				<div className="auth">
					<Space>
						{
							<Button
								type="primary"
								onClick={() =>
									setDataSource([
										...dataSource,
										{
											key: "2",
											name: "胡彦祖",
											age: 42,
											address: "西湖区湖底公园1号"
										}
									])
								}
							>
								新增
							</Button>
						}
					</Space>
				</div>
			</div>

			<Table style={tableStyle} dataSource={dataSource} columns={columns} />
		</div>
	);
};

export default UseHooks;
