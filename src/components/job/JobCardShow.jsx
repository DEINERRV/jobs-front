import React, { useState } from 'react'
import JobCardForm from './JobCardForm'
import { useSelector, useDispatch } from 'react-redux'
import { update, elim } from '../../store'
import { toast } from 'react-toastify'

function JobCardShow({ job }) {
    const [isEdit, setisEdit] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const authToken = useSelector((state) => state.auth.token)
    const loading = useSelector((state) => state.jobs.isLoading)
    const error = useSelector((state) => state.jobs.error)
    const dispatch = useDispatch()

    const updateJob = (job) => {
        dispatch(update({ token: authToken, job }))

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

        if (!error)
            setisEdit(false)
    }

    const deleteJob = (job) => {
        dispatch(elim({ token: authToken, job }))

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
            
        setIsShow(false)
    }


    return (
        <>
            {!isEdit ?
                <div className="p-6 bg-primary border border-gray-200 rounded-lg shadow h-[200px] w-[500px] relative">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.company}</h5>
                    <div className='pl-5 mt-2'>
                        <p className='text white text-[20px]'><span>Position: </span>{job.position}</p>
                        <p className='text-white text-[20px] mt-2'><span>Status: </span>{job.status}</p>
                    </div>

                    <div className='mt-4'>
                        <button
                            className='bg-secondary hover:bg-primary font-semibold py-2 px-8 border rounded'
                            onClick={() => setisEdit(true)}
                        >
                            Edit
                        </button>
                        <button
                            className='ml-2 bg-red-400 hover:bg-red-900 font-semibold py-2 px-8 border rounded'
                            onClick={() => {
                                setIsShow(true)
                                setTimeout(() => {
                                    setIsShow(false);
                                }, 5000);
                            }}
                        >
                            Delete
                        </button>
                    </div>


                    <div className='text-sm absolute bottom-0 right-0 flex flex-col items-end gap-1 mr-2 mb-2'>
                        <p>Created at: {job.createdAt.slice(0, 10)}</p>
                        <p>Updated at: {job.updatedAt.slice(0, 10)}</p>
                    </div>

                    {isShow?
                        <Modal 
                            company={job.company} position={job.position} 
                            handleCancel={()=>setIsShow(false)} 
                            handleDelete={()=>deleteJob(job)}/>
                        :<></>
                    }
                    
                </div>
                :
                <JobCardForm job={job} handleCancel={() => setisEdit(false)} handleSubmit={updateJob} />
                
            }
        </>
    )
}

const Modal = ({company,position,handleCancel,handleDelete}) => {
    return (
        <div className='fixed inset-0 flex items-start justify-center mt-10'>    
            <div className='bg-white text-black rounded-lg shadow-lg p-6 transform transition-transform duration-300 ease-in-out'>
                <h2 className='text-lg font-bold mb-4'>Confirm Delete</h2>
                <p className='mb-4'>Are you sure you want to delete this?({company}-{position})</p>

                <div className='flex justify-center'>
                    <button 
                        className='px-4 py-2 bg-red-500 text-white rounded mr-2'
                        onClick={handleDelete}
                    >Delete</button>
                    <button 
                        className='px-4 py-2 bg-gray-400 text-white rounded'
                        onClick={handleCancel}
                    >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default JobCardShow