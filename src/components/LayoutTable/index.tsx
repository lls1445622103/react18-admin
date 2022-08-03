/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-03 14:58:53
 * @FilePath: \react18-admin\src\components\LayoutTable\index.tsx
 * @Description: 通用表格封装
 *
 */

import "./index.less";
import { Button, Table } from "antd";
const LayoutTable = () => {
	const dataSource = [
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		},
		{
			key: "2",
			name: "胡彦祖",
			age: 42,
			address: "西湖区湖底公园1号"
		}
	];

	const columns = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address"
		}
	];
	return (
		<div className="l-table-content">
			<div style={{ marginBottom: "10px" }}>
				<Button>测试</Button>
			</div>
			<Table dataSource={dataSource} columns={columns} />
		</div>
	);
};
export default LayoutTable;
