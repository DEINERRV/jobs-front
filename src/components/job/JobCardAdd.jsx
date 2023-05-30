import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import JobCardForm from './JobCardForm'
import { useSelector, useDispatch } from 'react-redux'
import { create } from '../../store'
import { toast } from 'react-toastify'


function JobCardAdd() {
    const [isAdd, setisAdd] = useState(false)

    const authToken = useSelector((state) => state.auth.token)
    const loading = useSelector((state) => state.jobs.isLoading)
    const error = useSelector((state) => state.jobs.error)
    const dispatch = useDispatch()

    const createJob = (job) => {
        dispatch(create({ token: authToken, job }))

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

        if(!error)
            setisAdd(false)
    }

    return (
        <>
            {!isAdd ?
                <div className='p-6 bg-primary border border-gray-200 rounded-lg shadow h-[200px] w-[500px] flex items-center justify-center'>
                    <IoIosAddCircle
                        className='text-9xl cursor-pointer'
                        onClick={() => setisAdd(true)}
                    />
                </div>
                :
                <JobCardForm job={{ company: '', position: '', status: 'pending', }} handleCancel={() => setisAdd(false)} handleSubmit={createJob} />
            }
        </>

    )
}

export default JobCardAdd