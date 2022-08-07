/*
 * @Author: lls
 * @Date: 2022-08-07 14:52:29
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 16:13:38
 * @FilePath: \react18-admin\src\api\opera\dict.ts
 * @Description:
 *
 */
import { ResPage, User } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
// 获取用户列表
export const getDictList = (params: Partial<User.ReqGetUserParams>) => {
	return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
};
export const editDictList = (params: Partial<User.ReqGetUserParams>) => {
	return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
};
export const deleDictList = (params: Partial<User.ReqGetUserParams>) => {
	return http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
};
