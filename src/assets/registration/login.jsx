import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { fetchcartproducts, setcartlogin } from '../../redux/slices/cartslice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const [loginerror, setloginerror] = useState();
    const [loader, setloader] = useState(false);

    const [successbox, setsuccessbox] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    const loginuser = async (e) => {
        e.preventDefault();
        try {
            setloader(true);
            const cartitemsonlocal = JSON.parse(localStorage.getItem("items"));

            const resp = await fetch(`${import.meta.env.VITE_URL}login`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email.current.value, password: password.current.value, cartitemsonlocal: cartitemsonlocal })
            });

            const data = await resp.json();
            setloader(false);
           
            if (!data.token) {
                setloginerror(data);
            }
            if (data.token) {
                setsuccessbox("successfull")
                localStorage.setItem("token", data.token)
               localStorage.removeItem("items");
            //    dispatch(setcartlogin(data.cart));
            //    console.log(data.cart)
                setTimeout(() => {
                     dispatch(fetchcartproducts());
                    setsuccessbox("");
                    navigate(-1);
                }, 2000);
               
            }
            console.log(data)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="login relative">

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

            <div className="innerlogin">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="images/logo.png" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                }

                                if (!values.password) {
                                    errors.password = 'Required';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {

                                    setSubmitting(false);
                                    loginuser();
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
                                <form className="space-y-6" >
                                    <p className="text-red-400 text-center rounded-lg  bg-red-50">{loginerror}</p>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                        <p className="text-red-400 text-sm">{errors.email && touched.email && errors.email}</p>
                                            <input
                                                ref={email}
                                                id="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                        <p className="text-red-400 text-sm">{errors.password && touched.password && errors.password}</p>
                                            <input
                                                ref={password}
                                                id="password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={loginuser}
                                            className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{''}
                            <Link
                                className="font-semibold leading-6 text-red-400 hover:text-red-500"
                                to="/register">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ display: successbox == "successfull" ? "block" : "none" }} id="successModal" tabindex="-1" aria-hidden="true" className="translate-y-[-50%] translate-x-[-50%] overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] z-50 justify-center items-center  h-modal ">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:py-5 sm:px-10">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-red-400 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Success</span>
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully Login</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login