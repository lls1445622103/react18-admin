/*
 * @Author: lls
 * @Date: 2022-07-30 23:43:41
 * @LastEditors: lls
 * @LastEditTime: 2022-07-31 01:10:58
 * @FilePath: \react18-admin\src\routers\modules\assembly.tsx
 * @Description:
 *
 */
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 常用组件模块
const assemblyRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "常用组件"
		},
		children: [
			{
				path: "/assembly/selectIcon",
				element: lazyLoad(React.lazy(() => import("@/views/assembly/selectIcon/index"))),
				meta: {
					requiresAuth: true,
					title: "Icon 选择",
					key: "selectIcon"
				}
			},
			{
				path: "/assembly/batchImport",
				element: lazyLoad(React.lazy(() => import("@/views/assembly/batchImport/index"))),
				meta: {
					requiresAuth: true,
					title: "导入数据",
					key: "selectIcon"
				}
			}
		]
	}
];

export default assemblyRouter;
