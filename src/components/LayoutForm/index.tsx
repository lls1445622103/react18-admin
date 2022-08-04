/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lls
 * @LastEditTime: 2022-08-04 23:22:53
 * @FilePath: \react18-admin\src\components\LayoutForm\index.tsx
 * @Description: 模板表单组件的封装
 *
 */
import "./index.less";
import { Form, Button } from "antd";
import FormItem from "./components/FormItem";
const LayoutForm = (props: any) => {
	const onFinish = (form: any) => {
		console.log("form", form);
	};
	console.log("props", props);
	let { formConfig, formItem } = props;
	// 配置表单默认值
	formConfig["layout"] = "inline";
	return (
		<div className="LF-container">
			<Form onFinish={onFinish} {...formConfig}>
				{formItem ? formItem.map((e: any, index: Number) => <FormItem key={index} {...e} />) : null}
			</Form>
			<div className="LF-submit">
				<Button className="search" type="primary" htmlType="submit">
					搜索
				</Button>
				<Button htmlType="submit">重置</Button>
			</div>
		</div>
	);
};
export default LayoutForm;
