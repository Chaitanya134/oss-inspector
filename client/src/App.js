import React, { Suspense } from "react";
import "./scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
