import { useState } from 'react';
import { ILoginPayload } from '../../interfaces/users.interface';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { ToastContainer } from 'react-toastify';
import { errorAlert, successAlert } from '../../services/toastifyAlerts';
import { registerUser } from '../../api/users';
import { registerFormSchema } from './register-form.schema';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
export default function RegisterForm() {
	const [formSubmited, setFormSubmited] = useState(false);

	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	const handleSubmit = async (
		values: ILoginPayload,
		{ setSubmitting }: FormikHelpers<ILoginPayload>,
	) => {
		try {
			await registerUser(values);
			successAlert('Register successful');
			setFormSubmited(true);
			// navigate('/');
		} catch (error) {
			if (error instanceof Error) {
				errorAlert(error.message);
			} else throw error;
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={registerFormSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form className='flex flex-col'>
						<div className='my-5'>
							<label
								htmlFor='username'
								className='block mb-2 text-sm font-medium text-[#111827]'
							>
								Email
							</label>
							<div className='relative text-gray-400'>
								<span className='absolute inset-y-0 left-0 flex items-center p-1 pl-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='lucide lucide-mail'
									>
										<rect
											width='20'
											height='16'
											x='2'
											y='4'
											rx='2'
										></rect>
										<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
									</svg>
								</span>
								<Field
									type='email'
									name='email'
									placeholder='name@company.com'
									required
									className='pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4'
								/>
							</div>
							{touched.email && errors.email && (
								<div className=' text-red-600'>
									<p>{errors.email}</p>
								</div>
							)}
						</div>

						{/* password */}

						<div className='pb-6'>
							<label
								htmlFor='password'
								className='block mb-2 text-sm font-medium text-[#111827]'
							>
								Password
							</label>
							<div className='relative text-gray-400'>
								<span className='absolute inset-y-0 left-0 flex items-center p-1 pl-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='lucide lucide-square-asterisk'
									>
										<rect
											width='18'
											height='18'
											x='3'
											y='3'
											rx='2'
										></rect>
										<path d='M12 8v8'></path>
										<path d='m8.5 14 7-4'></path>
										<path d='m8.5 10 7 4'></path>
									</svg>
								</span>
								<Field
									type='password'
									name='password'
									required
									placeholder='••••••••••'
									className='pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4'
								/>
							</div>
							{touched.password && errors.password && (
								<div className=' text-red-600'>
									<p>{errors.password}</p>
								</div>
							)}
						</div>
						<div className='grid place-content-center'>
							{formSubmited && (
								<p className=' text-green-600 mb-4'>
									Register succesfull
								</p>
							)}
						</div>
						<button
							type='submit'
							className='w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6'
						>
							Register
						</button>
						<div className='text-sm font-light text-[#6B7280]'>
							You have an account?
							<Link
								to='/login'
								className='font-medium text-[#4F46E5] hover:underline'
							>
								Sign In
							</Link>
						</div>
					</Form>
				)}
			</Formik>
			<ToastContainer />
		</>
	);
}
