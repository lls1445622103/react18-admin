/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 09:41:37
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-04 16:38:05
 * @FilePath: \react18-admin\src\components\LayoutTree\index.tsx
 * @Description:
 *
 */
import { Tree } from "antd";
const treeData = [
	{
		title: "parent 1",
		key: "0-0",
		children: [
			{
				title: "parent 1-0",
				key: "0-0-0",
				disabled: true,
				children: [
					{
						title: "leaf",
						key: "0-0-0-0",
						disableCheckbox: true
					},
					{
						title: "leaf",
						key: "0-0-0-1"
					}
				]
			}
		]
	}
];
const LayoutTree = () => {
	return <Tree treeData={treeData} />;
};
export default LayoutTree;
