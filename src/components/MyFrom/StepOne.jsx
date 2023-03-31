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

                    < Form className=' grid grid-cols-1 gap-4 '>


                        <h1 className=' col-span-2  text-3xl font-semibold'>Register</h1>


                        <div className='col-span-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 sm:grid-cols-1'>

                            <div className='col-span-1  grid grid-cols-1 gap-2 px-2 '>

                                <label className='font-medium  justify-self-start'>First Name</label>
                                <Field component="input" type='text' className={`input  ${touched.firstname ? (errors['firstname'] ? " input-error" : "border-green-200") : ""}`} name="firstname" placeholder='First Name' />
                                <ErrorMessage name='firstname' className="justify-self-start bg-white text-red-700 " component='div' />

                            </div>
                            <div className='col-span-1  grid grid-cols-1 gap-2 px-2'>
                                <label className='font-medium justify-self-start'>Last Name</label>

                                <Field component="input" type='text' className={`input  ${touched.lastname ? (errors.lastname ? "input-error" : "border-green-200") : ""}`} name="lastname" placeholder='Last Name' />
                                <ErrorMessage name='lastname' className="justify-self-start bg-white text-red-700 " component='div' />

                            </div>
                        </div>




                        <div className='col-span-2  grid grid-cols-1 gap-4 px-6'>
                            <label className='font-medium justify-self-start'>Username</label>
                            <Field component="input" type='text' className={`input ${touched.username ? (errors['username'] ? " input-error" : "border-green-200") : ""}`} name="username" placeholder='username' />
                            <ErrorMessage name='username' className="justify-self-start bg-white text-red-700 " component='div' />
                        </div>

                        <div className='col-span-2  grid grid-cols-1 gap-4 px-6'>

                            <label className='font-medium justify-self-start'>Phone Number</label>

                            <Field name="phone" type="tel" placeholder='0123456789' className={` input  ${touched.email ? (errors['email'] ? "input-error" : "border-green-200") : ""}`} />
                            <ErrorMessage name='phone' className="justify-self-start bg-white text-red-700 " component='div' />
                        </div>
                        <div className='col-start-2 justify-self-end px-6 mb-5'>

                            <button type='submit' className={`btn w-44 bg-green-500  font-semibold transition duration-400 ease-in-out hover:bg-slate-700 ${Object.keys(errors).length != 0 ? "bg-red-300 hover:bg-red-600 cursor-not-allowed opacity-50 " : ""}`}>Next</button>
                        </div>


                    </Form>
                )}
            </Formik >
        </>

    )
}
