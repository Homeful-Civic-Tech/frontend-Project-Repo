import SignUp from './SignUpForm';
import LogIn from './Login';
import { Routes, Route, Navigate} from "react-router-dom";
import LandingPage from './LandingPage'
import AccamodForm from './AccomodForm';
import RoomAppConfirm from './RoomAppConfirm';
import VerifyLogin from './VerifyLogin';
import FeedsPage from './FeedsPage';
import React from 'react';
import RoomsProfilePage from './RoomsProfiles'
import ProfilePage from './Profiles';
import WholeProfile from './WholeProfile';
import ReservationsContainer from './ReservationsContainer'
import ReservationConfirmation from './ReservationsConfirmation'



function App() {
  return (
    <div className="App">
      {/* <PostReview/> */}
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/room-form' element={<AccamodForm/>}/>
        <Route path='/room-form/confirmation' element={<RoomAppConfirm/>}/>
        <Route path='/shelter-form/:id' element={<ReservationsContainer/>}/>
        <Route path='/shelter-form/confirmation' element={<ReservationConfirmation/>}/>
        <Route path='/verify' element={<VerifyLogin/>}/>
        <Route path='/feeds' element={<FeedsPage/>}/>
        <Route path='/feeds/:id' element={<ProfilePage/>}/>
        <Route path='/rooms/:id' element={<RoomsProfilePage/>}/>
        <Route path = '/Profile' element={<WholeProfile/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/rooms-form/:id' element={<ReservationsContainer/>}/>
        
     </Routes> 
    </div>
  );
}
export default App;
