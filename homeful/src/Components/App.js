
import SignUp from './SignUpForm';
import LogIn from './LogInForm';
import { Routes, Route, Navigate} from "react-router-dom";
// import FeedsPage from './FeedsPage';
// import LandingPage from './LandingPage'
import AccamodForm from './AccomodForm';
import RoomAppConfirm from './RoomAppConfirm';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/room-form' element={<AccamodForm/>}/>
        <Route path='/room-form/confirmation' element={<RoomAppConfirm/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
     </Routes> 
     {/* <AccamodForm/> */}
    </div>
  );
}

export default App;