/*
 * @Author: lls
 * @Date: 2022-08-01 22:14:34
 * @LastEditors: lls
 * @LastEditTime: 2022-08-01 22:16:47
 * @FilePath: \react18-admin\src\routers\modules\opera.tsx
 * @Description:
 *
 */
import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "操作模块"
		},
		children: [
			{
				path: "/opera/user",
				element: lazyLoad(React.lazy(() => import("@/views/opera/user/index"))),
				meta: {
					requiresAuth: true,
					title: "数据可视化",
					key: "user"
				}
			},
			{
				path: "/opera/warehouse",
				element: lazyLoad(React.lazy(() => import("@/views/opera/warehouse/index"))),
				meta: {
					requiresAuth: true,
					title: "仓库管理",
					key: "warehouse"
				}
			},
			{
				path: "/opera/dict",
				element: lazyLoad(React.lazy(() => import("@/views/opera/dict/index"))),
				meta: {
					requiresAuth: true,
					title: "字典管理",
					key: "dict"
				}
			}
		]
	}
];

export default dashboardRouter;
