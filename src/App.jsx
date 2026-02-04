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
<<<<<<< HEAD
import AdminLayout from './components/AdminLayout.jsx'
import Dashboard from './components/admin/Dashboard.jsx'PS C:\Users\CCTC\Documents\web2e\web2-main-vanz-project\web2-main> git commit -m "Your message" 
On branch main
nothing to commit, working tree clean
import Users from './components/admin/Users.jsx'
import Reports from './components/admin/Reports.jsx'
import Settings from './components/admin/Settings.jsx'
=======
>>>>>>> a4427a4737d055665333c346d95ecdd4374e46c6

function App() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
<<<<<<< HEAD
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
=======
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
>>>>>>> a4427a4737d055665333c346d95ecdd4374e46c6
    </div>
  )
}

export default App
