import React, { lazy, Suspense } from "react";
import "./App.css";
import "./App copy.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
const Counter = lazy(()=>import('./Counter'))
const Counter2 = lazy(()=>import('./Counter2'))
// import Counter from "./Counter.jsx";
// import Counter2 from "./Counter2.jsx";

console.log(Counter);

const Main = () => {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <Link to="Counter">Counter</Link>
      <br />
      <Link to="Counter2">Counter2</Link>
    </>
  );
};

function App() {
  return (
    <>
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route
            element={
              <>
                <Main /> <Outlet />
              </>
            }
          >
            <Route path="/" element={<></>} />
            <Route path="/Counter" element={<Counter />} />
            <Route path="/Counter2" element={<Counter2 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
