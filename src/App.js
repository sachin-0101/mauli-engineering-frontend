import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/layout/Navbar";
import Home from "../src/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../src//users/AddUser";
import EditUser from "../src/users/EditUser";
import ViewUser from "../src/users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
