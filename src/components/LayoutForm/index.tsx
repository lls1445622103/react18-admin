/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-04 18:05:35
 * @FilePath: \react18-admin\src\components\LayoutForm\index.tsx
 * @Description: 模板表单组件的封装
 *
 */
import "./index.less";
import { Form } from "antd";
import FormItem from "./components/FormItem";
const LayoutForm = (props: any) => {
	console.log("props", props);
	let { formConfig, formItem } = props;
	// 配置表单默认值
	formConfig["layout"] = "inline";
	// formConfig["labelCol"] = { span: 3, offset: 2 };
	// formConfig["wrapperCol"] = { span: 17, offset: 2 };
	return (
		<div className="LF-container">
			<Form {...formConfig}>{formItem ? formItem.map((e: any, index: Number) => <FormItem key={index} {...e} />) : null}</Form>
		</div>
	);
};
export default LayoutForm;
