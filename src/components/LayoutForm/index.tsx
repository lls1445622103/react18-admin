/*
 * @Author: lixiaoming
 * @Date: 2022-08-03 10:38:06
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 09:52:17
 * @FilePath: \react18-admin\src\components\LayoutForm\index.tsx
 * @Description: 模板表单组件的封装
 *
 */
import "./index.less";
import { Form, Button, Row } from "antd";
import FormItem from "./components/FormItem";
const LayoutForm = (props: any) => {
	console.log("props", props);
	let { formConfig, formItem } = props;
	let { resetForm, formButtonConfig } = formConfig;
	formButtonConfig = formButtonConfig || {
		submitType: "submit",
		submitText: "提交"
	};
	let { submitType, submitText } = formButtonConfig;
	submitText = submitText || "搜索";
	submitType = submitType || "search";
	// 处理多余字段
	delete formConfig.resetForm;
	delete formConfig.formButtonConfig;
	// 校验成功后提交返回表单数据
	const formReset = () => {
		resetForm ? resetForm() : null;
	};
	let gutter = { xs: 8, sm: 16, md: 24, lg: 32 };
	// 配置表单默认值
	console.log("gutter", gutter);
	return (
		<div className="LF-container">
			<Form {...formConfig}>
				<Row gutter={gutter}>
					{formItem ? formItem.map((e: any, index: Number) => <FormItem key={index} submitType={submitType} {...e} />) : null}
				</Row>
				<div className="LF-submit">
					<Button className="search" type="primary" htmlType="submit">
						{submitText}
					</Button>
					{submitType && submitType === "search" ? <Button onClick={formReset}>重置</Button> : null}
				</div>
			</Form>
		</div>
	);
};
export default LayoutForm;
