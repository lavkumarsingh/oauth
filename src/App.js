
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter style={{height: '100%'}}>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
