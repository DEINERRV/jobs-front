import {store,persistor} from './store'
import {login,logout} from './authSlice'
import {getAll,update, create, elim} from './jobsSlice'

export{
    store,
    persistor,
    login,
    logout,
    getAll,
    update,
    create,
    elim
}