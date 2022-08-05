/*
 * @Author: lixiaoming
 * @Date: 2022-08-04 10:55:07
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-05 11:06:23
 * @FilePath: \react18-admin\src\components\Buttons\index.tsx
 * @Description:
 *
 */
import { Button } from "antd";

const Buttons = (props: any) => {
	let { buttons, buttonsHandle, buttonBoxStyle } = props;
	const handle = (e: any) => {
		buttonsHandle(e);
	};
	const style = buttonBoxStyle || { marginBottom: "10px" };
	return (
		<div style={style}>
			{buttons.map((e: any) => (
				<Button style={e.style} onClick={() => handle(e)} icon={e.icon} type={e.type} key={e.label}>
					{e.label}
				</Button>
			))}
		</div>
	);
};
export default Buttons;
