/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
//import Signup from "./pages/Signup";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import CookDashboard from "./pages/CookDashboard";
import CleaningDashboard from "./pages/CleaningDashboard";
import HrDashboard from "./pages/HrDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/cook-dashboard" element={<CookDashboard />} />
          <Route path="/cleaning-dashboard" element={<CleaningDashboard />} />
          <Route path="/hr-dashboard" element={<HrDashboard />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;*/

/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ManagerDashboard from "./pages/ManagerDashboard";
import CookDashboard from "./pages/CookDashboard";
import HrDashboard from "./pages/HrDashboard";
import CleanerDashboard from "./pages/CleanerDashboard";
//import HrDashboard from "./pages/HrDashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/cook-dashboard" element={<CookDashboard />} />
          <Route path="/hr-dashboard" element={<HrDashboard />} />
          <Route path="/cleaner-dashboard" element={<CleanerDashboard />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ManagerDashboard from "./pages/ManagerDashboard";
import CookDashboard from "./pages/CookDashboard";
import CleanerDashboard from "./pages/CleanerDashboard";
import HrDashboard from "./pages/HrDashboard";
import StaffList from "./pages/staff/StaffList";
import AddStaff from "./pages/staff/AddStaff"


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/cook-dashboard" element={<CookDashboard />} />
          <Route path="/cleaner-dashboard" element={<CleanerDashboard />} />
          <Route path="/hr-dashboard" element={<HrDashboard />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/staff/add" element={<AddStaff />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;




//export default App;



