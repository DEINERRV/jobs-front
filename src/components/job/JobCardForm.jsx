import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

function JobCardForm({ job, handleCancel, handleSubmit }) {
    const [jobToEdit, setJobToEdit] = useState(job)
    const loading = useSelector((state) => state.jobs.isLoading)
    const error = useSelector((state) => state.jobs.error)

    const handleChange = (e) => {
        const { name, value } = e.target
        setJobToEdit({ ...jobToEdit, [name]: value })
    }

    return (
        <div className="p-6 bg-primary border border-gray-200 rounded-lg shadow min-h-[200px] min-w-[500px]">
            <input
                type='text'
                name='company'
                value={jobToEdit.company}
                onChange={handleChange}
                placeholder='Write the Company name'
                className='bg-tertiary text-white px-1 py-1 rounded-md text-[18px] ml-2 w-[400px] placeholder:text-white focus:outline-none focus:border focus:border-white'
            />

            <div className='pl-5 mt-2'>
                <p className='text white text-[20px]'>Position:
                    <input
                        type='text'
                        placeholder='Write the Position'
                        name='position'
                        value={jobToEdit.position}
                        onChange={handleChange}
                        className='bg-tertiary text-white px-1 py-1 rounded-md text-[18px] ml-2 placeholder:text-white focus:outline-none focus:border focus:border-white'
                    />
                </p>

                <p className='text-white text-[20px] mt-2'>Status:
                    <select
                        className='bg-tertiary text-white rounded-md text-[18px] p-1 ml-2 focus:outline-none focus:border focus:border-white'
                        name='status'
                        value={jobToEdit.status}
                        onChange={handleChange}
                    >
                        <option value="pending" >Pending</option>
                        <option value="interview" >Interview</option>
                        <option value="declined" >Declined</option>
                    </select>
                </p>
            </div>

            <div className='mt-2'>
                <button
                    className='mt-4 bg-gray-500 hover:bg-gray-700 font-semibold py-2 px-8 border rounded mr-4'
                    onClick={handleCancel}
                >
                    Cancel
                </button>

                <button
                    className='mt-4 bg-secondary hover:bg-primary font-semibold py-2 px-8 border rounded'
                    onClick={() => handleSubmit(jobToEdit)}
                >
                    Confirm
                </button>
            </div>

        </div>
    )
}

export default JobCardForm