import { toast } from 'react-toastify';

export function successAlert(textToShow: string) {
	toast.success(textToShow, {
		position: 'top-center',
	});
}
export function errorAlert(textToShow: string) {
	toast.error(textToShow, {
		position: 'top-center',
	});
}
export function warningAlert(textToShow: string) {
	toast.warning(textToShow, {
		position: 'top-center',
	});
}

export function infoAlert(textToShow: string) {
	toast.info(textToShow, {
		position: 'top-center',
	});
}
export function defaultAlert(textToShow: string) {
	toast(textToShow, {
		position: 'top-center',
	});
}
