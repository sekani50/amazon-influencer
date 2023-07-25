import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";
// import { RequireAuth } from "./Utils/RequireAuth";
import {
  Dashboard,
  Login,
  RecordDetail,
  Register,
  Settings,
  SubPayment,
  Subscription,
  Overview,
  UserManagement,
  Product,
  Videos,
  Userdetails,
  Verification,
  CaptchaAnswer

} from "./Pages";

const App = () => {
  return (
    <div className="w-full h-full text-sm sm:text-[15px] font text-zinc-700">
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
          <Route exact path="/verification/captcha" element={<CaptchaAnswer />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/product/:id" element={<RecordDetail />} />
          <Route exact path="/setting" element={<Settings />} />
          <Route exact path="/subscription" element={<Subscription />} />
          <Route exact path="/payment" element={<SubPayment />} />
          <Route exact path="/admin/dashboard" element={<Overview />} />
          <Route exact path="/admin/users" element={<UserManagement />} />
          <Route exact path="/admin/products" element={<Product />} />
          <Route exact path="/admin/videos" element={<Videos />} />
          <Route exact path="/admin/user/:id" element={<Userdetails />} />
          {/**Protected routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
