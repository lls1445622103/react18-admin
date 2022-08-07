/*
 * @Author: lls
 * @Date: 2022-08-01 22:14:34
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 23:20:13
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
					title: "用户列表",
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
			},
			{
				path: "/opera/order",
				element: lazyLoad(React.lazy(() => import("@/views/opera/order/index"))),
				meta: {
					requiresAuth: true,
					title: "订单管理",
					key: "order"
				}
			}
		]
	}
];

export default dashboardRouter;
