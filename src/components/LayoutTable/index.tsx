/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 14:16:58
 * @FilePath: \react18-admin\src\components\LayoutTable\index.tsx
 * @Description: 通用表格封装
 *
 */

import "./index.less";
import { Table, Space } from "antd";
import Buttons from "@/components/Buttons/index";
const LayoutTable = (props: any) => {
	let { buttons, data, columns, buttonsHandle, pagination, tableChange, tableConfig } = props;
	columns.unshift({
		title: "序号",
		align: "center",
		width: 60,
		render: (text: any, record: any, index: any) => {
			// 数据参数分别为当前行的值，当前行数据，行索引
			return <Space size="middle">{index}</Space>;
		}
	});
	pagination = pagination || false;
	return (
		<div className="l-table-content">
			{buttons ? <Buttons buttons={buttons} buttonsHandle={buttonsHandle} /> : null}
			<Table {...tableConfig} onChange={tableChange} pagination={pagination} dataSource={data} columns={columns} />
		</div>
	);
};
export default LayoutTable;
