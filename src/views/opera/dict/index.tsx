/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 16:16:29
 * @FilePath: \react18-admin\src\views\opera\dict\index.tsx
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
import { getDictList, editDictList, deleDictList } from "@/api/opera/dict";

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
			name: "城市",
			time: "2022-1-7 13:12:56",
			dictValue: JSON.stringify([
				{
					label: "成都",
					value: 1
				},
				{
					label: "德阳",
					value: 2
				}
			])
		},
		{
			key: "2",
			name: "卡类型",
			time: "2022-4-7 13:12:56",
			dictValue: JSON.stringify([
				{
					label: "A类",
					value: 1
				},
				{
					label: "B类",
					value: 2
				},
				{
					label: "C类",
					value: 3
				}
			])
		}
	]);
	useEffect(() => {
		getList({}, page);
	}, []);
	const getList = async (form: any, page: any) => {
		const params = { ...form, ...page };
		// let res = await getDictList(params);
		// setList()
		// setPage
	};
	const editDict = async (row: any) => {
		console.log("row", row);
		// let res = await editDictList(row);
		getList({}, page);
	};
	const deleDict = async (id: string) => {};

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
			{ itemType: "RangePicker", name: "test2", label: "更新时间" }
		],
		buttons: [
			{
				label: "新增",
				type: "primary",
				role: "add",
				icon: <PlusOutlined />
			}
		],
		data: list,
		columns: [
			{
				title: "字典名称",
				dataIndex: "name",
				key: "name",
				align: "center"
			},
			{
				title: "字典值",
				dataIndex: "dictValue",
				align: "center"
			},
			{
				title: "更新时间",
				dataIndex: "time",
				key: "time",
				align: "center"
			},
			{
				title: "操作",
				align: "center",
				render: (text: any, record: any, index: any) => {
					// 数据参数分别为当前行的值，当前行数据，行索引
					return (
						<Space size="middle">
							<a onClick={() => editDict(record)}>编辑 </a>
							<a onClick={() => deleDict("222")} style={{ color: "red" }}>
								删除
							</a>
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
		{ itemType: "Input", name: "ccc", label: "字典名称" },
		{ itemType: "Input", name: "test2", label: "字典值" }
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
