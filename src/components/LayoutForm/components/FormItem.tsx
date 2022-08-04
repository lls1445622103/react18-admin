/*
 * @Author: lixiaoming
 * @Date: 2022-08-04 17:17:56
 * @LastEditors: lls
 * @LastEditTime: 2022-08-04 23:00:41
 * @FilePath: \react18-admin\src\components\LayoutForm\components\FormItem.tsx
 * @Description:
 *
 */
import { Form, Input, DatePicker, Select } from "antd";
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
	return <Form.Item {...props}>{Element}</Form.Item>;
};
export default FormItem;
