/*
 * @Author: lixiaoming
 * @Date: 2022-08-04 10:55:07
 * @LastEditors: lixiaoming
 * @LastEditTime: 2022-08-04 11:16:25
 * @FilePath: \react18-admin\src\components\Buttons\index.tsx
 * @Description:
 *
 */
import { Button } from "antd";

const Buttons = (props: any) => {
	let { buttons, buttonsHandle } = props;
	const handle = (e: any) => {
		buttonsHandle(e);
	};
	return (
		<div style={{ marginBottom: "10px" }}>
			{buttons.map((e: any) => (
				<Button onClick={() => handle(e)} icon={e.icon} type={e.type} key={e.label}>
					{e.label}
				</Button>
			))}
		</div>
	);
};
export default Buttons;
