import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Menu from './Menu.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AdminLayout from './components/AdminLayout.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import Users from './components/admin/Users.jsx'
import Reports from './components/admin/Reports.jsx'
import Settings from './components/admin/Settings.jsx'

function App() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Routes>
        <Route path="/" element={<><Navbar /><main className="flex-grow-1"><Home /></main><Footer /></>} />
        <Route path="/menu" element={<><Navbar /><main className="flex-grow-1"><Menu /></main><Footer /></>} />
        <Route path="/about" element={<><Navbar /><main className="flex-grow-1"><About /></main><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><main className="flex-grow-1"><Contact /></main><Footer /></>} />
        <Route path="/login" element={<><Navbar /><main className="flex-grow-1"><Login /></main><Footer /></>} />
        <Route path="/register" element={<><Navbar /><main className="flex-grow-1"><Register /></main><Footer /></>} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<><Navbar /><main className="flex-grow-1"><Navigate to="/" replace /></main><Footer /></>} />
      </Routes>
    </div>
  )
}

export default App
