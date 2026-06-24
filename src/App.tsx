import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { authClient } from "./lib/auth";
import AuthProvider from "./context/AuthContext";
function App() {
  return (
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/onboarding" element={<Onboarding />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/auth/:pathname" element={<Auth />}></Route>
                <Route path="/account/:pathname" element={<Account />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </NeonAuthUIProvider>
  );
}

export default App;
