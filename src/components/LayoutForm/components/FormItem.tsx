/*
 * @Author: lixiaoming
 * @Date: 2022-08-04 17:17:56
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-04 17:52:30
 * @FilePath: \react18-admin\src\components\LayoutForm\components\FormItem.tsx
 * @Description:
 *
 */
import { Form, Input } from "antd";
const FormItem = (props: any) => {
	const { type } = props;
	let Element = null;
	switch (type) {
		case "input" || "Input":
			Element = <Input {...props}></Input>;
			break;
	}
	return <Form.Item {...props}>{Element}</Form.Item>;
};
export default FormItem;
