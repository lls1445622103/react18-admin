/*
 * @Author: lixiaoming
 * @Date: 2022-08-02 13:27:46
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-03 22:47:20
 * @FilePath: \react18-admin\src\views\dataScreen\index.tsx
 * @Description:
 *
 */

import TableLayout from "@/components/tableLayout";
import LayoutTree from "@/components/tableLayout/LayoutTree";
import LayoutTable from "@/components/LayoutTable";
import LayoutForm from "@/components/tableLayout/LayoutForm";
const DataScreen = () => {
	let config = {};
	return (
		<TableLayout
			LayoutForm={false && LayoutForm}
			LayoutTable={LayoutTable}
			LayoutTree={false && LayoutTree}
			config={config}
		></TableLayout>
	);
};

export default DataScreen;
