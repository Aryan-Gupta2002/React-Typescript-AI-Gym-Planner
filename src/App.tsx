import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding"
import Profile from "./pages/Profile"
import Auth from "./pages/Auth"
import Account from "./pages/Account"
import NotFound from "./pages/NotFound"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="/onboarding" element={<Onboarding/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/auth/:pathname" element={<Auth/>}></Route>
        <Route path="/account:pathname" element={<Account/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
