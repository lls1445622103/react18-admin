/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-05 17:45:37
 * @FilePath: \react18-admin\src\components\LayoutTable\index.tsx
 * @Description: 通用表格封装
 *
 */

import "./index.less";
import { Table } from "antd";
import Buttons from "@/components/Buttons/index";
const LayoutTable = (props: any) => {
	let { buttons, data, columns, buttonsHandle, pagination, tableChange, tableConfig } = props;
	pagination = pagination || false;
	console.log("pagination", pagination);
	return (
		<div className="l-table-content">
			{buttons ? <Buttons buttons={buttons} buttonsHandle={buttonsHandle} /> : null}
			<Table {...tableConfig} onChange={tableChange} pagination={pagination} dataSource={data} columns={columns} />
		</div>
	);
};
export default LayoutTable;
