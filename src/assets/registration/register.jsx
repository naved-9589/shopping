import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [registerresponse, setregisterresponse] = useState();
    const [loader, setloader] = useState(false);

    const navigate = useNavigate();

    const registeruser = async (e) => {
        console.log(e);
        try {
            setloader(true)
            const resp = await fetch(`${import.meta.env.VITE_URL}register`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: e.name, phone: e.phone, email: e.email, password: e.password, cpassword: e.cpassword })
            });

            const data = await resp.json();
            setregisterresponse(data);
            setloader(false)
            console.log(data);

            if (data == "successfull") {
                setTimeout(() => {
                    setregisterresponse("");
                    navigate("/login");
                }, 2000);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="register w-full relative">

{
   loader ?
   <div class="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                <div class="flex items-center">
                    <span class="text-3xl mr-4">Loading</span>
                    <svg class="animate-spin h-8 w-8 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </div>
            </div>
            : ""
}
            

            {/* <div class="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
<div class='flex space-x-2 justify-center items-center h-screen dark:invert'>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-4 w-4 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-4 w-4 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-4 w-4 bg-red-400 rounded-full animate-bounce'></div>
</div>
</div> */}

            <div className="innerregister">
                <div class="bg-gray-50 dark:bg-gray-900">
                    <div class="md:h-full h-full flex flex-col items-center justify-center px-6 py-8 mx-auto ">

                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-red-400">{registerresponse}</p>
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create and account
                                </h1>

                                <Formik
                                    initialValues={{ name: "", email: "", password: "", cpassword: "", phone: "" }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        }


                                        if (!values.name) {
                                            errors.name = 'Required';
                                        }

                                        if (!values.phone) {
                                            errors.phone = 'Required';
                                        }
                                        if (!values.password) {
                                            errors.password = 'Required';
                                        }
                                        if (!values.cpassword) {
                                            errors.cpassword = 'Required';
                                        }
                                    
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            
                                            setSubmitting(false);
                                            registeruser(values);
                                        }, 400);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,

                                    }) => (
                                        <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                            <div>
                                                <p className="text-red-400 text-sm">{errors.name && touched.name && errors.name}</p>
                                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                                <input onBlur={handleBlur} onChange={handleChange} value={values.name} name='name' type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
                                            </div>
                                            <div>
                                                <p className="text-red-400 text-sm">{errors.phone && touched.phone && errors.phone}</p>
                                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your number</label>
                                                <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="number" name="phone" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone number" />
                                            </div>
                                            <div>
                                                <p className="text-red-400 text-sm">{errors.email && touched.email && errors.email}</p>
                                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                            </div>
                                            <div>
                                                <p className="text-red-400 text-sm">{errors.password && touched.password && errors.password}</p>
                                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-red-400 text-sm">{errors.cpassword && touched.cpassword && errors.cpassword}</p>
                                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                                <input onBlur={handleBlur} onChange={handleChange} value={values.cpassword} type="password" name="cpassword" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            </div>
                                            <p className="text-red-400 text-sm">{errors.match && errors.match}</p>
                                            <button disabled={isSubmitting} type="submit" class="w-full text-white bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Already have an account? <Link to="/login" class="font-medium text-red-400 hover:underline dark:text-primary-500">Login here</Link>
                                            </p>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: registerresponse == "successfull" ? "block" : "none" }} id="successModal" tabindex="-1" aria-hidden="true" className="translate-y-[-50%] translate-x-[-50%] overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] z-50 justify-center items-center  h-modal ">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:py-5 sm:px-10">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-red-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Success</span>
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully Registered</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register