import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { jobGetAll, jobUpdate, jobCreate, jobDelete } from '../api'


const initialState = {
    jobs : [],
    count: 0,
    isLoading: false,
    error: null,
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder
      // Get All Jobs
      .addCase(getAll.pending, (state) => {
        state.jobs = []
        state.count = 0
        state.isLoading = true
        state.error = null
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.jobs = action.payload.jobs
        state.count = action.payload.count
        state.isLoading = false
        state.error = null

      })
      .addCase(getAll.rejected, (state, action) => {
        state.jobs = []
        state.count = 0
        state.isLoading = false
        state.error = action.payload
      })
      // Update
      .addCase(update.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.jobs = state.jobs.map((e)=>{
          if(e._id === action.payload._id){
            return action.payload
          }
          return e
        })
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // Create
      .addCase(create.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(create.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.jobs = [action.payload,...state.jobs]
      })
      .addCase(create.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      // Delete
      .addCase(elim.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(elim.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.jobs = state.jobs.map((job)=>{
          if(job._id !== action.payload._id){
            return job
          }
        }).filter(Boolean)
        console.log(state.jobs)
      })
      .addCase(elim.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      });;
  },
});

// Update a Job
export const getAll = createAsyncThunk(
  'jobs/getAll',
  async (token, { rejectWithValue }) => {
    try {
      // Make a request to the server
      const response = await jobGetAll(token)

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Request failed')
      }

      // Return the response body as the payload
      return await response.json()

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// getAll thunk action
export const update = createAsyncThunk(
  'jobs/update',
  async (obj, { rejectWithValue }) => {
    try {
      // Make a request to the server
      const response = await jobUpdate(obj.job,obj.token)

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Request failed')
      }

      // Return the response body as the payload
      return await response.json()

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Create a Job
export const create = createAsyncThunk(
  'jobs/create',
  async (obj, { rejectWithValue }) => {
    try {
      // Make a request to the server
      const response = await jobCreate(obj.job,obj.token)

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Request failed')
      }

      // Return the response body as the payload
      return await response.json()

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Create a Job
export const elim = createAsyncThunk(
  'jobs/delete',
  async (obj, { rejectWithValue }) => {
    try {
      // Make a request to the server
      const response = await jobDelete(obj.job,obj.token)

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Request failed')
      }

      // Return the response body as the payload
      return await response.json()

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export default jobsSlice.reducer