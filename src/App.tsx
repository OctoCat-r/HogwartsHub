import { Toaster } from "@/components/ui/toaster";
import { Route, Routes } from "react-router-dom";
import "./global.css";

import { Home } from "./_root/pages";
import SignUp from "./_auth/forms/SignUp";
import SignIn from "./_auth/forms/SignIn";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* // private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
