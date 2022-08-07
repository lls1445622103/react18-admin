/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 15:08:10
 * @FilePath: \react18-admin\src\views\opera\user\index.tsx
 * @Description:
 *
 */
import { useState, useEffect } from "react";
import { Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableLayout from "@/components/tableLayout";
import LayoutTree from "@/components/LayoutTree";
import LayoutTable from "@/components/LayoutTable";
import LayoutForm from "@/components/LayoutForm";
import ModalForm from "@/components/ModalForm";
import { getUserList, editUserList } from "@/api/opera/user";

const DataScreen = () => {
	const [modelShow, setModelShow] = useState(false);
	const [page, setPage] = useState({
		total: 2, // 总页数
		current: 1, // 当前页码
		pageSize: 10 // 每页数据条数
	});
	const [list, setList] = useState([
		{
			key: "1",
			name: "胡彦斌",
			time: "2022-3-5 13:12:56",
			address: "西湖区湖底公园1号",
			cardType: "A类",
			yearMoney: 600,
			city: "成都",
			position: "35.5,96.2"
		},
		{
			key: "2",
			name: "张三",
			time: "2022-4-7 13:12:56",
			age: 42,
			address: "西湖区湖底公园1号",
			cardType: "C类",
			yearMoney: 600,
			city: "德阳",
			position: "35.4,96.1"
		}
	]);
	useEffect(() => {
		getList({}, page);
	}, []);
	const getList = async (form: any, page: any) => {
		const params = { ...form, ...page };
		// let res = await getUserList(params);
		// setList()
		// setPage
	};
	const editList = async (row: any) => {
		console.log("row", row);
		// let res = await editUserList(row);
		getList({}, page);
	};

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
			getList({}, page);
		},
		tableConfig: {
			bordered: false
		},
		pagination: {
			showSizeChanger: true,
			showQuickJumper: true,
			showTotal: (total: any, range: any) => {
				return `总共${total}条`;
			},
			current: page.current,
			pageSize: page.pageSize,
			total: page.total
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
			{ itemType: "Input", name: "test1", label: "姓名" },
			{ itemType: "RangePicker", name: "test2", label: "注册时间" },
			{
				itemType: "Select ",
				name: "test4",
				label: "卡类型",
				options: [
					{ label: "A类", value: 1 },
					{ label: "B类", value: 2 },
					{ label: "C类", value: 3 }
				]
			},
			{
				itemType: "Select ",
				name: "test5",
				label: "城市",
				options: [
					{ label: "成都", value: 1 },
					{ label: "德阳", value: 2 }
				]
			}
		],
		buttons: [
			// {
			// 	label: "新增",
			// 	type: "primary",
			// 	role: "add",
			// 	icon: <PlusOutlined />
			// }
		],
		data: list,
		columns: [
			{
				title: "姓名",
				dataIndex: "name",
				key: "name",
				align: "center"
			},
			{
				title: "注册时间",
				dataIndex: "time",
				key: "time",
				align: "center"
			},
			{
				title: "住址",
				dataIndex: "address",
				key: "address",
				align: "center"
			},
			{
				title: "城市",
				dataIndex: "city",
				align: "center"
			},
			{
				title: "坐标",
				dataIndex: "position",
				align: "center"
			},
			{
				title: "卡类型",
				dataIndex: "cardType",
				align: "center"
			},
			{
				title: "年卡金额",
				dataIndex: "yearMoney",
				align: "center"
			},
			{
				title: "操作",
				// dataIndex: "address2",
				align: "center",
				render: (text: any, record: any, index: any) => {
					// 数据参数分别为当前行的值，当前行数据，行索引
					return (
						<Space size="middle">
							<a onClick={() => editList(record)}>编辑 </a>
							{/* <a style={{ color: "red" }}>删除</a> */}
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
		{ itemType: "Input", name: "姓名", label: "姓名" },
		{ itemType: "DatePicker", name: "test2", label: "测试2" },
		{
			itemType: "Select ",
			name: "test4",
			label: "姓名",
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
			getList({}, page);
		},
		onFinish: (e: any) => {
			setModelShow(false);
			console.log(e, "表单数据");
			getList(e, page);
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
