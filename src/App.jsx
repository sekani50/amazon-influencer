import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";
import { RequireAuth } from "./Utils/RequireAuth";
import {
  Dashboard,
  Login,
  RecordDetail,
  Register,
  Settings,
  SubPayment,
  Subscription,
  Verification,
  CaptchaAnswer,
  ForgotPassword,
  AdminDashboard,
  AdminVideos,
  AdminProducts,
  UserManagement,
  Userdetails,
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
          {/*    LANDING PAGE 
        
           
          <Route exact path="/admin/dashboard" element={<Overview />} />
           <Route exact path="/admin/products" element={<Product />} />
         
          */}
          <Route exact path="/admin/user/:id" element={<Userdetails />} />
            <Route exact path="/admin/users" element={<UserManagement />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/videos" element={<AdminVideos />} />
          <Route exact path="/admin/products" element={<AdminProducts />} />
          <Route exact path="/subscription" element={<Subscription />} />
          <Route exact path="/payment" element={<SubPayment />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth link={"/"}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/verification/captcha"
            element={
              <RequireAuth link={"/"}>
                <CaptchaAnswer />
              </RequireAuth>
            }
          />
          <Route
            path="/verification"
            element={
              <RequireAuth link={"/"}>
                <Verification />
              </RequireAuth>
            }
          />

          <Route
            path="/setting"
            element={
              <RequireAuth link={"/"}>
                <Settings />
              </RequireAuth>
            }
          />

          <Route
            path="/product/:id"
            element={
              <RequireAuth link={"/"}>
                <RecordDetail />
              </RequireAuth>
            }
          />

          {/**Protected routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
