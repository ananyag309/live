import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import ProfilePage from "./pages/ProfilePage"
import SchedulePage from "./pages/SchedulePage"
import GolivePage from "./pages/GolivePage"
import PrivateRoute from "./PrivateRoute"
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/sign-in" element={<SigninPage/>}/>
      <Route path="/sign-up" element={<SignupPage/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
      <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="profile" element={<ProfilePage/>}/>
      <Route path="schedule" element={<SchedulePage/>}/>
      <Route path="golive" element={<GolivePage/>}/>
      {/* <Route path="/Dash" element={<Dashboard/>} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
