
import './App.css'
import './index.css'
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import TablePage from './Components/TablePage/TablePage';
import bgImg from './assets/hero.jpg'

function App() {
  const isStaff = false;

  return (
    <>
    <div className='heroImg w-full h-screen '>
    <nav className='flex justify-center p-4 bg-[#383126] mb-20'>
      {isStaff && <Link to='/dashbord'>Dashboard</Link>}
      {/* {console.log(isStaff)} */}
      <Link className='bg-[#A3824C] rounded-full px-4 py-2 font-medium text-white' to='/tablepage/1'>Table Page</Link>
    </nav>
        <Routes>
          <Route path='/dash' element={<Dashboard/>}></Route>
          <Route path='/tablepage/:id' element={<TablePage/>}></Route>
          <Route path='*' element={"hello0000000000"}></Route>
        </Routes>
    </div>


    </>
  )
}

export default App;
