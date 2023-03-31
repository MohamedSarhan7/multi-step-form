import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
export default function StepTwo({ data, next, prev }) {
    const handleSubmit = (values) => {
        next(values, true)
    }

    const Schema = Yup.object().shape({
        password1: Yup.string()
            .required('Password is required'),
        password2: Yup.string().required("retype password")
            .oneOf([Yup.ref('password1'), null], 'Passwords must match'),
        email: Yup.string()
            .min(1, 'Too Short!')
            .max(25, 'Too Long!').email("email is Invaild!")
            .required('email  is Required')
    });
    return (
        <div>
            <Formik initialValues={data}
                onSubmit={handleSubmit}
                validationSchema={Schema}>
                {({ values, touched, errors }) => (

                    <Form className='w-full  flex flex-col justify-center items-center py-5 space-y-4 '>

                        <h1 className='text-3xl font-semibold'>Register</h1>
                        <div className='flex flex-col justify-start items-start'>
                            <label className='font-medium'>Email</label>
                            <Field name="email" placeholder='email@email.com' className={` input  ${touched.email ? (errors['email'] ? "input-error" : "border-green-200") : ""}`} />
                            <ErrorMessage name='email' className="bg-white text-red-700 " component='div' />
                        </div>


                        <div className='flex flex-col justify-start items-start'>
                            <label className='font-medium'>Password</label>
                            <Field type='password' name="password1" placeholder='password here' className={`input  ${touched.password1 ? (errors['password1'] ? " input-error" : "border-green-200") : ""}`} />
                            <ErrorMessage name='password1' className="bg-white text-red-700 " component='div' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <label className='font-medium'>Password</label>
                            <Field type='password' name="password2" placeholder='retype password' className={`input  ${touched.password2 ? (errors['password2'] ? "input-error" : "border-green-200") : ""}`} />
                            <ErrorMessage name='password2' className="bg-white text-red-700 " component='div' />
                        </div>

                        <div className=' justify-self-end flex justify-between space-x-20 '>
                            <div>

                                <button type='button' onClick={() => { prev(values) }} className="btn bg-gray-400 hover:bg-slate-800 transition duration-300" >Back</button>
                            </div>
                            <div>

                                <button type='submit' className={`btn bg-green-500  font-semibold transition duration-400 ease-in-out hover:bg-slate-700 ${Object.keys(errors).length != 0 ? "bg-red-300 hover:bg-red-600 cursor-not-allowed opacity-50 " : ""}`} >Confrim</button>
                            </div>
                        </div>

                    </Form>

                )}
            </Formik>
        </div>
    )
}