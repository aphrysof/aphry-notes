import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Create, View, Signup } from "./pages/Index";
import { AuthProvider } from "./hooks/contexts/context";

function App() {
  //set state for show modal

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view" element={<View />}>
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
