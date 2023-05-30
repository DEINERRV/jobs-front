import { Navbar, Job, Footer } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {LoginPage} from './containers'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<JobsPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
  )
}

const JobsPage = ()=>{
  return(
    <div className='flex flex-col min-h-screen'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div>

      <div className='flex-grow mb-10'>
        <Job />
      </div>
        
      <Footer />
      
    </div>
  )
}

export default App
