/*
 * @Author: lixiaoming
 * @Date: 2022-08-04 17:17:56
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 09:57:22
 * @FilePath: \react18-admin\src\components\LayoutForm\components\FormItem.tsx
 * @Description:
 *
 */
import { Form, Input, DatePicker, Select, Col } from "antd";
const { RangePicker } = DatePicker;
const FormItem = (props: any) => {
	let { submitType } = props;
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
	const spanConfig =
		submitType === "search"
			? {
					xxl: 4,
					xl: 6,
					lg: 8,
					md: 8,
					sm: 8,
					xs: 12
			  }
			: {
					xxl: 8,
					xl: 8,
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12
			  };
	delete props.allowClear;
	delete props.submitType;
	console.log("props", props);
	return (
		<Col {...spanConfig}>
			<Form.Item {...props}>{Element}</Form.Item>
		</Col>
	);
};
export default FormItem;
