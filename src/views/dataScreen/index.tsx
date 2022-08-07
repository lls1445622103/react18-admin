/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 10:51:37
 * @FilePath: \react18-admin\src\views\dataScreen\index.tsx
 * @Description:
 *
 */
import { useState } from "react";
import { Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableLayout from "@/components/tableLayout";
import LayoutTree from "@/components/LayoutTree";
import LayoutTable from "@/components/LayoutTable";
import LayoutForm from "@/components/LayoutForm";
import ModalForm from "@/components/ModalForm";

const DataScreen = () => {
	const [modelShow, setModelShow] = useState(true);
	const [page, setPage] = useState({
		total: 21, // 总页数
		current: 1, // 当前页码
		pageSize: 10 // 每页数据条数
	});
	const buttonsHandle = (e: any) => {
		setModelShow(true);
		console.log("buttonsHandle", setModelShow, e);
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
				icon: <PlusOutlined />
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
				align: "center",
				render: (text: any, record: any, index: any) => {
					// 数据参数分别为当前行的值，当前行数据，行索引
					console.log("text", text);
					console.log("record", record);
					console.log("index", index);
					return (
						<Space size="middle">
							<a>编辑 </a>
							<a style={{ color: "red" }}>删除</a>
						</Space>
					);
				}
			}
		]
	};

	const modalConfig = {
		modelShow: modelShow,
		setModelShow: setModelShow,
		destroyOnClose: true,
		maskClosable: false,
		onCancel: () => {
			setModelShow(false);
		}
	};
	const modalFormItem: any = [
		{ itemType: "Input", name: "test1", label: "测试" },
		{ itemType: "DatePicker", name: "test2", label: "测试2" },
		{
			itemType: "Select ",
			name: "test4",
			label: "测试2",
			options: [
				{ label: "22", value: 1 },
				{ label: "zs", value: "22222222222" }
			]
		}
	];
	const modalFormConfig = {
		resetForm: () => {
			console.log("重置表单");

			(config.pagination as any)["current"] = 1;
			(config.pagination as any)["total"] = 50;
		},
		onFinish: (e: any) => {
			setModelShow(false);
			console.log(e, "表单数据");
		},
		formButtonConfig: {
			submitType: "submit",
			submitText: "提交"
		}
	};
	return (
		<>
			<TableLayout
				buttonsHandle={buttonsHandle}
				LayoutForm={LayoutForm}
				LayoutTable={LayoutTable}
				LayoutTree={false && LayoutTree}
				config={config}
			></TableLayout>
			<ModalForm modalConfig={modalConfig} formItem={modalFormItem} modalFormConfig={modalFormConfig} />
		</>
	);
};

export default DataScreen;
