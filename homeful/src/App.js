import SignUp from './Components/SignUpForm';
import LogIn from './Components/LogInForm';
import { Routes, Route, Navigate} from "react-router-dom";
import FeedsPage from './FeedsPage';
import LandingPage from './LandingPage'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      {/* <Routes path='*' element={<Navigate to='/'/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
