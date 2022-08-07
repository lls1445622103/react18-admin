/*
 * @Author: lls
 * @Date: 2022-08-07 14:52:29
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 15:02:41
 * @FilePath: \react18-admin\src\api\opera\user.ts
 * @Description:
 *
 */
import { ResPage, User } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
// 获取用户列表
export const getUserList = (params: Partial<User.ReqGetUserParams>) => {
	return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
};
export const editUserList = (params: Partial<User.ReqGetUserParams>) => {
	return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
};
