import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './authSlice'
import jobsReducer from './jobsSlice'

const persistConfig = {
  key: 'root',
  storage,
  expire: false, //Set the expire option to null so that the data expires when the browser is closed
  whitelist: ['auth'], // Specify which slices to persist
}

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const persistor = persistStore(store)


export{
  store,
  persistor,
}