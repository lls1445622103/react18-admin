/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-03 13:09:00
 * @FilePath: \react18-admin\src\components\tableLayout\LayoutTable.tsx
 * @Description:
 *
 */
import { Table } from "antd";
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
	return <Table dataSource={dataSource} columns={columns} />;
};
export default LayoutTable;
