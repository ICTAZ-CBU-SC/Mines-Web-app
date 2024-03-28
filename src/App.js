import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Main';
import NavBar from './components/Headers_and_footers/Nav';
import './App.css'
import Profile from './components/user_files/users';
//import './components/user_files/users.js'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='d-flex'>
        <NavBar/>
        <div className='w-100'>
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/users' element={<Profile/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
