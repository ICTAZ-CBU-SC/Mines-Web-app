import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Main';
import NavBar from './components/Headers_and_footers/Nav';
import './App.css'
import UserPage from './components/user_files/userpage'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='d-flex'>
        <NavBar/>
        <div className='w-100'>
          <Routes>
            <Route path='/Users/:id' element={<MainPage/>} />
            <Route path='/Users' element={<UserPage/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
