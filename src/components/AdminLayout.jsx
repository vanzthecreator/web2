import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Menu, 
  X,
  LogOut,
  Home
} from 'lucide-react'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard'
    },
    {
      title: 'Users',
      icon: Users,
      path: '/admin/users'
    },
    {
      title: 'Reports',
      icon: FileText,
      path: '/admin/reports'
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/admin/settings'
    }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      {/* Mobile menu button */}
      <div style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 50,
        display: 'none'
      }} className="mobile-menu-btn">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            backgroundColor: '#374151',
            border: '1px solid #4b5563',
            color: 'white',
            padding: '8px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
            display: 'none'
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '256px',
        height: '100vh',
        background: '#1f2937',
        borderRight: '1px solid #374151',
        zIndex: 40
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#3b82f6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              A
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 600, margin: 0, color: 'white' }}>Admin</h1>
              <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>Panel</p>
            </div>
          </div>
        </div>

        <div style={{ padding: '16px 8px' }}>
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: isActive(item.path) ? '#ffffff' : '#9ca3af',
                  fontSize: '14px',
                  fontWeight: 500,
                  backgroundColor: isActive(item.path) ? '#3b82f6' : 'transparent',
                  marginBottom: '4px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = '#374151'
                    e.target.style.color = '#ffffff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#9ca3af'
                  }
                }}
              >
                <Icon size={18} />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </div>

        <div style={{ 
          padding: '16px', 
          marginTop: 'auto', 
          borderTop: '1px solid #374151',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0
        }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#374151'
              e.target.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = '#9ca3af'
            }}
          >
            <Home size={18} />
            <span>Back to Site</span>
          </Link>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: 'none',
            border: 'none',
            color: '#ef4444',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.2s ease'
          }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#374151'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
            }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ marginLeft: '256px', minHeight: '100vh' }}>
        {/* Admin Navbar */}
        <nav style={{
          background: '#1f2937',
          borderBottom: '1px solid #374151',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 30
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#ffffff', margin: 0 }}>
            {menuItems.find(item => isActive(item.path))?.title || 'Admin'}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#4b5563',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>AD</span>
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#ffffff', margin: 0 }}>Admin User</p>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>admin@example.com</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main style={{ padding: '24px' }}>
          <Outlet />
        </main>

        {/* Footer */}
        <footer style={{
          padding: '24px',
          textAlign: 'center',
          borderTop: '1px solid #374151',
          backgroundColor: '#1f2937',
          color: '#9ca3af',
          fontSize: '14px'
        }}>
          <p style={{ margin: '0 0 8px 0' }}>© 2026 UY School System. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About</Link>
            <Link to="/register" style={{ color: '#9ca3af', textDecoration: 'none' }}>Register</Link>
            <Link to="/login" style={{ color: '#9ca3af', textDecoration: 'none' }}>Login</Link>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AdminLayout
