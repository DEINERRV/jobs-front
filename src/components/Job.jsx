import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../store'
import { JobCard, JobCardAdd } from './job/index'
import { ToastContainer } from 'react-toastify'
import { IoIosList, IoIosKeypad } from 'react-icons/io'


function Job() {
  const [isColumn, setisColumn] = useState(true)

  const authToken = useSelector((state) => state.auth.token)
  const loading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);
  const jobs = useSelector((state) => state.jobs.jobs);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll(authToken))
  }, [])

  return (
    <div>
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

      <div 
        className='px-40 mt-10 flex justify-end cursor-pointer text-4xl'
        onClick={()=>setisColumn(!isColumn)}  
      >
        {isColumn?
          <IoIosKeypad/>
          :<IoIosList/>
        }  
      </div>

      <div className={`px-40 mt-10 flex ${isColumn ? 'flex-col items-center' : 'flex-wrap justify-start'} gap-10`}>
        <JobCardAdd />

        {jobs.map((job) => <JobCard key={job._id} job={job} />)}
      </div>
    </div>

  )
}



export default Job