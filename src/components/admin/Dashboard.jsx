import React from 'react'
import { Users, FileText, CheckCircle, Activity } from 'lucide-react'

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '32px' }}>
        Dashboard
      </h1>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        {/* Total Users Card */}
        <div style={{
          background: '#1f2937',
          border: '1px solid #374151',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#9ca3af', margin: 0 }}>
              Total Users
            </h3>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3b82f6'
            }}>
              <Users size={24} color="white" />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            128
          </div>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#10b981', margin: 0 }}>
            +15% Active this month
          </p>
        </div>

        {/* Reports Card */}
        <div style={{
          background: '#1f2937',
          border: '1px solid #374151',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#9ca3af', margin: 0 }}>
              Reports
            </h3>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f59e0b'
            }}>
              <FileText size={24} color="white" />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            24
          </div>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#10b981', margin: 0 }}>
            +5 New reports this week
          </p>
        </div>

        {/* System Status Card */}
        <div style={{
          background: '#1f2937',
          border: '1px solid #374151',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#9ca3af', margin: 0 }}>
              System Status
            </h3>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#10b981'
            }}>
              <CheckCircle size={24} color="white" />
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#10b981', marginBottom: '8px' }}>
            OK
          </div>
          <p style={{ fontSize: '14px', fontWeight: '500', color: '#10b981', margin: 0 }}>
            No issues detected
          </p>
        </div>
      </div>

      {/* Quick Notes Section */}
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #374151' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
            Quick Notes
          </h2>
        </div>
        <div style={{ padding: '24px' }}>
          <p style={{ color: '#9ca3af', lineHeight: '1.6', margin: 0 }}>
            Welcome to the Admin Dashboard. Use the sidebar to manage users, view reports, and update settings.
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        overflow: 'hidden',
        marginTop: '24px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #374151' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
            Recent Activity
          </h2>
        </div>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Activity size={16} color="#3b82f6" />
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>System running smoothly</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Users size={16} color="#10b981" />
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>New user registration completed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={16} color="#f59e0b" />
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>Weekly report generated</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
