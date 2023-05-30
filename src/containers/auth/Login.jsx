import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.auth.isLoading);
    const error = useSelector((state) => state.auth.error);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    useEffect(() => {
        if (isAuthenticated)
            window.location.href = '/'
    }, [isAuthenticated])

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({ ...credentials, [name]: value })
    }


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(credentials))

        const toastType = error ? 'error' : 'success'
        const toastMsg = error ? error : 'success'
        toast[toastType](toastMsg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <div className='flex justify-center items-center w-full h-screen bg-primary'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className='bg-white p-10 rounded-lg text-gray-500'>
                <h1 className='font-bold text-3xl text-center mb-2'>Hello Agian!</h1>
                <p className='font-sm text-center leading-tight'>Welcome to the Personal Job Application Manager!
                    <br />Manage and organize your job applications with ease.
                </p>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                <form className='flex flex-col gap-6 mt-10' onSubmit={handleLogin}>
                    <label className='flex flex-col gap-2'>
                        <span className='font-semibold text-xl'>Email</span>
                        <input
                            type='text'
                            name='email'
                            value={credentials.name}
                            onChange={handleChange}
                            placeholder='Write your email'
                            className='bg-gray-200 text-gray-700 px-2 py-2 rounded-md border-2 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary'
                        />
                    </label>

                    <label className='flex flex-col gap-2'>
                        <span className='font-semibold text-xl'>Password</span>
                        <input
                            type='password'
                            name='password'
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder='Write your Password'
                            className='bg-gray-200 text-gray-700 px-2 py-2 rounded-md border-2 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-primary'
                        />
                        <div className='flex justify-between'>
                            <label className='flex justiry-center text-gray-500 font-semibold'>
                                <input className='appearance-none form-checkbox mr-2 w-[20px] bg-gray-200 border-2 border-gray-300 rounded-md checked:bg-primary' type='checkbox' />
                                <span className='text-sm leading-tight'>Remember me</span>
                            </label>
                            <p className='text-sm text-primary font-medium'>Recovery Password</p>
                        </div>

                    </label>

                    <button
                        type='submit'
                        className='bg-primary rounded-lg py-2 text-white mt-6'
                    >
                        Login
                    </button>
                </form>

                <p className='text-sm text-center mt-20'>Don't have an acount yet? <a className='text-primary font-medium'>Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login