/*
 * @Author: lls
 * @Date: 2022-08-06 23:05:50
 * @LastEditors: lls
 * @LastEditTime: 2022-08-07 10:44:16
 * @FilePath: \react18-admin\src\components\ModalForm\index.tsx
 * @Description:
 *
 */
import { useEffect, useState } from "react";
import { Modal } from "antd";
import LayoutForm from "@/components/LayoutForm";

const ModalForm = (props: any) => {
	const { modalFormConfig, formItem, modalConfig } = props;
	const { modelShow, setModelShow } = modalConfig;
	console.log("setModelShow", setModelShow, modelShow, modalConfig);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		setWidth(document.getElementsByTagName("body")[0].clientWidth / 2);
	}, []);

	modalFormConfig["width"] = modalFormConfig["width"] ? modalFormConfig["width"] : width;
	// delete modalConfig.modelShow;
	// delete modalConfig.setModelShow;
	return (
		<Modal visible={modelShow} footer={null} {...modalConfig} width={width}>
			<LayoutForm formItem={formItem} formConfig={modalFormConfig} />
		</Modal>
	);
};

export default ModalForm;
