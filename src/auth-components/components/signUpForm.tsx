"use client";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Schema } from "../validations/schema";

// this file created with formik 

export  const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '',name:'' }}
      validationSchema={Schema}
      onSubmit={(values) => {
        console.log('Form Data:', values);
      }}
    >
      <Form className="flex flex-col gap-4">
                  <ul className='flex flex-col'>
                     <li className="relative flex-col w-full flex ">
                         <Field type="name" placeholder='' id="name" name="name" required className=" ml-auto mr-auto w-4/5 peer h-12 border border-gray-300 shadow rounded-md px-3 pt-4 pb-1 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                         <label htmlFor="name" className="absolute left-[13%] top-1 text-black text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">Full name</label>
                         <div className='h-5 '>
                            <ErrorMessage name='name' render={(msg) => (
                              <p className="text-red-500 text-[13px] ml-[11%] h-5 mt-1">{msg}</p>
                            )}/>
                         </div>
                     </li>
                     <li className="relative w-full mt-4 flex flex-col">
                         <Field type="email" placeholder='' id="email" name="email" required className=" ml-auto mr-auto w-4/5 peer h-12 border border-gray-300 shadow rounded-md px-3 pt-4 pb-1 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                         <label htmlFor="email" className="absolute left-[13%] top-1 text-black text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">Email</label>
                          <div className='h-5 '>
                            <ErrorMessage name='email' render={(msg) => (
                              <p className="text-red-500 text-[13px] ml-[11%] h-5 mt-1">{msg}</p>
                            )}/>
                         </div>
                    </li>
                     <li className="relative w-full mt-4 flex flex-col">
                         <Field type="password" placeholder='' id="password" name="password" required className=" ml-auto mr-auto w-4/5 peer h-12 border border-gray-300 shadow rounded-md px-3 pt-4 pb-1 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                         <label htmlFor="password" className="absolute left-[13%] top-1 text-black text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">Password</label>
                          <div className='h-5 '>
                            <ErrorMessage name='password' render={(msg) => (
                              <p className="text-red-500 text-[13px] ml-[11%] h-5 mt-1">{msg}</p>
                            )}/>
                         </div>
                     </li>
                  </ul>
                  <div className="w-full flex justify-center">
                    <button type='submit' className='w-4/5  bg-blue-700  h-12 rounded-md transition-all text-white text-md hover:text-lg' >Sign up</button>
                  </div>
      </Form>
    </Formik>
  );
};