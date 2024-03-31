import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useNavigate
  } from "react-router-dom";


const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`${import.meta.env.VITE_URL}/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  useEffect(()=>{

    const timer = setTimeout(() => {
      // Redirect to another page after 10 seconds
      // Replace '/checkout' with the path you want to redirect to
      if (status === 'complete') {
        console.log("trying")
        navigate("/")
      }
    }, 4000);
    return () => clearTimeout(timer);
  },[status])

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
         <div id="successModal" tabindex="-1" aria-hidden="true" className="translate-y-[-50%] translate-x-[-50%] overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] z-50 justify-center items-center  h-modal ">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:py-5 sm:px-10">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-red-400 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Success</span>
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Payment Successfully</p>
                    </div>
                </div>
            </div>
      </section>
    )
  }

  return null;
}

export default Return