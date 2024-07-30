import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
	email: Yup.string()
		.matches(
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			'Invalid email format',
		)
		.email('Invalid email')
		.required('This field is required'),
	password: Yup.string().required('This field is required'),
});
