/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-05 18:00:57
 * @FilePath: \react18-admin\src\views\dataScreen\index.tsx
 * @Description:
 *
 */
import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import TableLayout from "@/components/tableLayout";
import LayoutTree from "@/components/LayoutTree";
import LayoutTable from "@/components/LayoutTable";
import LayoutForm from "@/components/LayoutForm";
const DataScreen = () => {
	const [page, setPage] = useState({
		total: 21, // 总页数
		current: 1, // 当前页码
		pageSize: 10 // 每页数据条数
	});
	const buttonsHandle = (e: any) => {
		console.log("buttonsHandle", e);
	};
	let config = {
		// 表格内的分页、排序、筛选变化时触发
		tableChange: (pagination: any, filters: any, sorter: any, extra: any) => {
			// 重新设置分页
			setPage(pagination);
			console.log("pagination", pagination);
			console.log("filters", filters);
			console.log("sorter", sorter);
			console.log("extra", extra);
		},
		tableConfig: {
			bordered: false
		},
		pagination: {
			showSizeChanger: true,
			showQuickJumper: true,
			showTotal: (total: any, range: any) => {
				console.log("	", range);
				return `总共${total}条`;
			},
			current: page.current,
			pageSize: page.pageSize,
			total: page.total
			// onChange: (page: Number, pageSize: Number) => {

			// 	console.log("page,pageSize", page, pageSize);
			// }
		},
		formConfig: {
			// wrapperCol: { span: 8 },
			resetForm: () => {
				console.log("重置表单");

				(config.pagination as any)["current"] = 1;
				(config.pagination as any)["total"] = 50;
			},
			onFinish: (e: any) => {
				console.log(e, "表单数据");
			},
			formButtonConfig: {
				submitType: "search",
				submitText: "搜索"
			}
		},
		formItem: [
			{ itemType: "Input", name: "test1", label: "测试" },
			{ itemType: "DatePicker", name: "test2", label: "测试2" },
			// { itemType: "RangePicker", name: "test3", label: "测试2" },
			// { itemType: "Input", name: "test9", label: "测试" },
			// { itemType: "DatePicker", name: "test8", label: "测试2" },
			// { itemType: "RangePicker", name: "test7", label: "测试2" },
			// { itemType: "DatePicker", name: "test81", label: "测试2" },
			// { itemType: "RangePicker", name: "test72", label: "测试2" },
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
				align: "center"
			},
			{
				title: "操作",
				// dataIndex: "address2",
				key: "action",
				align: "center",
				render: (text: any, record: any, index: any) => {
					console.log("	", text);
					return (
						<div>
							{/* <div>{text}</div> */}
							<div>{record}</div>
							<div>{index}</div>
						</div>
					);
				}
			}
		]
	};
	return (
		<TableLayout
			buttonsHandle={buttonsHandle}
			LayoutForm={LayoutForm}
			LayoutTable={LayoutTable}
			LayoutTree={false && LayoutTree}
			config={config}
		></TableLayout>
	);
};

export default DataScreen;
