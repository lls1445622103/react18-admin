/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lls
 * @LastEditTime: 2022-08-04 23:24:49
 * @FilePath: \react18-admin\src\views\dataScreen\index.tsx
 * @Description:
 *
 */
import { PoweroffOutlined } from "@ant-design/icons";
import TableLayout from "@/components/tableLayout";
import LayoutTree from "@/components/LayoutTree";
import LayoutTable from "@/components/LayoutTable";
import LayoutForm from "@/components/LayoutForm";
const DataScreen = () => {
	let config = {
		formConfig: {},
		formItem: [
			{ itemType: "Input", name: "test1", label: "测试" },
			{ itemType: "DatePicker", name: "test2", label: "测试2" },
			{ itemType: "RangePicker", name: "test3", label: "测试2" },
			{
				itemType: "Select ",
				name: "test4",
				label: "测试2",
				options: [
					{ label: "22", value: 1 },
					{ label: "zs", value: "22222222222" }
				]
			}
		],
		buttons: [
			{
				label: "新增",
				type: "primary",
				role: "add",
				icon: <PoweroffOutlined />
			}
		],
		data: [
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
		],
		columns: [
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
		]
	};
	return (
		<TableLayout LayoutForm={LayoutForm} LayoutTable={LayoutTable} LayoutTree={false && LayoutTree} config={config}></TableLayout>
	);
};

export default DataScreen;
