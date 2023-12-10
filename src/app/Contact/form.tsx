import React from "react";

import {
	Button,
	FormHelperText,
	Grid,
	InputLabel,
	Stack,
	TextField,
	Select,
	MenuItem,
	InputAdornment,
} from "@mui/material";

import { Formik } from "formik";

import * as Yup from "yup";

const FormContact = () => {
	return (
		<Formik
			initialValues={{
				first_name: "",
				last_name: "",
				email: "",
				phone: "",
				message: "",
			}}
			validationSchema={Yup.object().shape({
				first_name: Yup.string().max(255).required("First name is required"),
				last_name: Yup.string().max(255).required("Last name is required"),
				email: Yup.string().email().max(255).required("Email is required"),
				phone: Yup.string().max(255).required("Phone is required"),
				message: Yup.string().max(255).required("Message is required"),
			})}
			onSubmit={async (
				values,
				{ resetForm, setErrors, setStatus, setSubmitting }
			) => {
				try {
					setSubmitting(false);

					const json = JSON.stringify({
						first_name: values.first_name,
						last_name: values.last_name,
						email: values.email,
						phone: values.phone,
						message: values.message,
						accessKey: "f2e7e3a0-2b3a-4f2e-8f2a-5b7b3a9b9b9b",
					});

					console.log(json);

					const response = await fetch("https://api.web3forms.com/submit", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: json,
					});
					console.log(response);
					// if (!response) {
					// 	setStatus({ success: true });

					// 	dispatch(
					// 		openSnackbar({
					// 			open: true,
					// 			message: messageSuccess,
					// 			variant: "alert",
					// 			alert: {
					// 				color: "success",
					// 			},
					// 			close: false,
					// 		})
					// 	);
					// 	resetForm();
					// 	queryClient.invalidateQueries(["deals"]);
					// 	setOpen(false);
					// } else {
					// 	setStatus({ success: false });
					// 	const errorMessage = response?.message;
					// 	const errors: any = {
					// 		password: errorMessage,
					// 	};
					// 	setErrors(errors);
					// 	dispatch(
					// 		openSnackbar({
					// 			open: true,
					// 			message: errorMessage,
					// 			variant: "alert",
					// 			alert: {
					// 				color: "error",
					// 			},
					// 			close: true,
					// 		})
					// 	);
					// }
				} catch (err: any) {
					resetForm();
					setStatus({ success: false });
					setErrors({ submit: err.message });
					setSubmitting(false);
				}
			}}
		>
			{({
				errors,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting,
				touched,
				values,
				resetForm,
			}) => (
				<form noValidate onSubmit={handleSubmit}>
					<Grid item container spacing={3} xs={12} sm={12}>
						<Grid item xs={12} lg={6}>
							<Stack spacing={1.25}>
								<InputLabel htmlFor='first_name'>First Name</InputLabel>
								<TextField
									id='first_name'
									placeholder='Enter first name'
									type='text'
									value={values.first_name}
									name='first_name'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched.first_name && errors.first_name && (
									<FormHelperText error id='first_name-helper'>
										{errors.first_name as any}
									</FormHelperText>
								)}
							</Stack>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Stack spacing={1.25}>
								<InputLabel htmlFor='last_name'>Last Name</InputLabel>
								<TextField
									id='last_name'
									placeholder='Enter last name'
									type='text'
									value={values.last_name}
									name='last_name'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched.last_name && errors.last_name && (
									<FormHelperText error id='last_name-helper'>
										{errors.last_name as any}
									</FormHelperText>
								)}
							</Stack>
						</Grid>
						<Grid item xs={12} lg={12}>
							<Stack spacing={1.25}>
								<InputLabel htmlFor='email'>Email</InputLabel>
								<TextField
									id='email'
									placeholder='Enter email'
									type='email'
									value={values.email}
									name='email'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched.email && errors.email && (
									<FormHelperText error id='email-helper'>
										{errors.email as any}
									</FormHelperText>
								)}
							</Stack>
						</Grid>
						<Grid item xs={12} lg={12}>
							<Stack spacing={1.25}>
								<InputLabel htmlFor='phone'>Phone</InputLabel>
								<TextField
									id='phone'
									placeholder='Enter phone'
									type='phone'
									value={values.phone}
									name='phone'
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched.phone && errors.phone && (
									<FormHelperText error id='phone-helper'>
										{errors.phone as any}
									</FormHelperText>
								)}
							</Stack>
						</Grid>
						<Grid item xs={12} lg={12}>
							<Stack spacing={1.25}>
								<InputLabel htmlFor='message'>Message</InputLabel>
								<TextField
									id='message'
									placeholder='Enter message'
									type='message'
									value={values.message}
									name='message'
									onBlur={handleBlur}
									onChange={handleChange}
									multiline
									rows={8}
								/>
								{touched.message && errors.message && (
									<FormHelperText error id='message-helper'>
										{errors.message as any}
									</FormHelperText>
								)}
							</Stack>
						</Grid>
						<Grid item xs={12}>
							<Stack
								direction='row'
								justifyContent='flex-end'
								alignItems='center'
								spacing={2}
							>
								<Button
									variant='outlined'
									color='secondary'
									onClick={() => resetForm()}
								>
									Cancel
								</Button>
								<Button
									disabled={isSubmitting || Object.keys(errors).length !== 0}
									type='submit'
									variant='contained'
								>
									Submit
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</form>
			)}
		</Formik>
	);
};

export default FormContact;
