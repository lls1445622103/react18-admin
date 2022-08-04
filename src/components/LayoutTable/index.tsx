/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-04 15:51:38
 * @FilePath: \react18-admin\src\components\LayoutTable\index.tsx
 * @Description: 通用表格封装
 *
 */

import "./index.less";
import { Table } from "antd";
import Buttons from "@/components/Buttons/index";
const LayoutTable = (props: any) => {
	console.log("LayoutTable-props", props);
	let { buttons, data, columns, buttonsHandle } = props;
	return (
		<div className="l-table-content">
			{buttons ? <Buttons buttons={buttons} buttonsHandle={buttonsHandle} /> : null}
			<Table dataSource={data} columns={columns} />
		</div>
	);
};
export default LayoutTable;
