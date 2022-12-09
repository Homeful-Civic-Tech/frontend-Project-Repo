import SignUp from './SignUpForm';
import LogIn from './LogInForm';
import { Routes, Route, Navigate} from "react-router-dom";
import LandingPage from './LandingPage'
import AccamodForm from './AccomodForm';
import RoomAppConfirm from './RoomAppConfirm';
import VerifyLogin from './VerifyLogin';
import FeedsPage from './FeedsPage';
<<<<<<< HEAD
import ProfilePage from './Profiles';
=======
import WholeProfile from './WholeProfile';
>>>>>>> cc5fb8a3a466b01ef5614b8b56a31c581fcff169



function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/room-form' element={<AccamodForm/>}/>
        <Route path='/room-form/confirmation' element={<RoomAppConfirm/>}/>
        <Route path='/verify' element={<VerifyLogin/>}/>
        <Route path='/feeds' element={<FeedsPage/>}/>
        <Route path='/feeds/:id' element={<ProfilePage/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
<<<<<<< HEAD
        

=======
        <Route path = '/Profile' element={<WholeProfile/>}/>
>>>>>>> cc5fb8a3a466b01ef5614b8b56a31c581fcff169
     </Routes> 
    </div>
  );
}
export default App;
