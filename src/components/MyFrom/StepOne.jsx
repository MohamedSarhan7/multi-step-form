import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
export default function StepOne({ data, next, prev }) {
    const handleSubmit = (values) => {
        next(values)
    }

    const Schema = Yup.object().shape({
        firstname: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('first name is Required'),
        lastname: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('last name is Required'),
        username: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('username is Required'),
        phone: Yup.number("not a Number")
            .integer("not a Namber")
            .typeError("not a Number")
            .notRequired(),

    });
    return (
        <>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
                validationSchema={Schema}>
                {({ errors, touched }) => (

                    < Form className='w-10/12 flex flex-col justify-center items-center py-5 space-y-4 '>
                        <h1 className='text-3xl font-semibold'>Register</h1>

                        <div className='flex  w-full space-x-6 '>

                            <div className='w-full  flex flex-col items-start'>

                                <label className='font-medium'>First Name</label>
                                <Field component="input" type='text' className={`input  ${touched.firstname ? (errors['firstname'] ? " input-error" : "border-green-200") : ""}`} name="firstname" placeholder='First Name' />
                                <ErrorMessage name='firstname' className="bg-white text-red-700 " component='div' />

                            </div>
                            <div className='w-full flex flex-col items-start '>
                                <label className='font-medium'>Last Name</label>

                                <Field component="input" type='text' className={`input  ${touched.lastname ? (errors.lastname ? "input-error" : "border-green-200") : ""}`} name="lastname" placeholder='Last Name' />
                                <ErrorMessage name='lastname' className="bg-white text-red-700 " component='div' />

                            </div>
                        </div>

                        <div className='w-full  flex flex-col justify-start items-start'>
                            <label className='font-medium'>Username</label>
                            <Field component="input" type='text' className={`input ${touched.username ? (errors['username'] ? " input-error" : "border-green-200") : ""}`} name="username" placeholder='username' />
                            <ErrorMessage name='username' className="bg-white text-red-700 " component='div' />
                        </div>

                        <div className='w-full flex flex-col justify-start items-start'>

                            <label className='font-medium'>Phone Number</label>

                            <Field name="phone" type="tel" placeholder='0123456789' className={` input  ${touched.email ? (errors['email'] ? "input-error" : "border-green-200") : ""}`} />
                            <ErrorMessage name='phone' className="bg-white text-red-700 " component='div' />
                        </div>
                        <div className='w-full flex justify-end'>

                            <button type='submit' className={`btn bg-green-500  font-semibold transition duration-400 ease-in-out hover:bg-slate-700 ${Object.keys(errors).length != 0 ? "bg-red-300 hover:bg-red-600 cursor-not-allowed opacity-50 " : ""}`}>Next</button>
                        </div>
                    </Form>
                )}
            </Formik >
        </>

    )
}
