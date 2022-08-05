/*
 * @Author: lixiaoming
 * @Date: 2022-08-04 17:17:56
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-05 14:58:41
 * @FilePath: \react18-admin\src\components\LayoutForm\components\FormItem.tsx
 * @Description:
 *
 */
import { Form, Input, DatePicker, Select, Col } from "antd";
const { RangePicker } = DatePicker;
const FormItem = (props: any) => {
	// 全部支持清除
	props = { rules: [], ...props, allowClear: true };
	//placeholder公共的placeholder变量用于设置默认提示
	let { placeholder } = props;
	placeholder = placeholder ? placeholder : `请选择的${props.label}`;
	const { itemType } = props;
	let Element = null;
	switch (itemType) {
		case "Input":
			Element = <Input {...props} />;
			break;
		case "DatePicker":
			Element = <DatePicker {...props} />;
			break;
		case "RangePicker":
			Element = <RangePicker {...props} />;
			break;
		case "Select ":
			props = { ...props, placeholder };
			Element = <Select {...props} />;
			break;
	}
	delete props.allowClear;
	return (
		<Col xxl={4} xl={6} lg={8} md={8} sm={8} xs={8}>
			<Form.Item {...props}>{Element}</Form.Item>
		</Col>
	);
};
export default FormItem;
