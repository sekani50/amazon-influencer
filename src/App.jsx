import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";
// import { RequireAuth } from "./Utils/RequireAuth";
import { Dashboard, Login, Register } from "./Pages";

const App = () => {
  return (
    <div className="w-full h-full text-sm text-[16px] font text-zinc-700">
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",

                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Scrolltotop />
        <Routes>
          {/*    AUTH PAGE */}
       
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          {/*    LANDING PAGE */}
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/**Protected routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;