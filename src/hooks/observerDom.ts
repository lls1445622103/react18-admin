import ResizeObserver from "resize-observer-polyfill";
const observerDom = (dom: any, fn: any) => {
	const ro = new ResizeObserver((entries, observe) => {
		fn(entries, observe);
	});
	ro.observe(dom);
};
export default observerDom;
