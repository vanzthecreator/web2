import React, { useState } from 'react'
import { FileText, Download, Calendar, Filter, BarChart3, Users, Activity, TrendingUp } from 'lucide-react'

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('overview')
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'attendance', name: 'Attendance Summary', icon: Users },
    { id: 'activity', name: 'User Activity Log', icon: Activity },
    { id: 'audit', name: 'System Audit', icon: FileText }
  ]

  const recentReports = [
    { id: 1, name: 'Monthly Attendance Report', type: 'Attendance', date: '2024-02-01', size: '2.4 MB', status: 'Completed' },
    { id: 2, name: 'User Activity Analysis', type: 'Analytics', date: '2024-01-28', size: '1.8 MB', status: 'Completed' },
    { id: 3, name: 'System Performance Q4', type: 'System', date: '2024-01-25', size: '3.1 MB', status: 'Processing' },
    { id: 4, name: 'Security Audit Report', type: 'Security', date: '2024-01-20', size: '1.2 MB', status: 'Completed' }
  ]

  const getStatusBadge = (status) => {
    const styles = {
      Completed: { backgroundColor: '#10b981', color: 'white' },
      Processing: { backgroundColor: '#f59e0b', color: 'white' },
      Failed: { backgroundColor: '#ef4444', color: 'white' }
    }
    return (
      <span style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
        ...styles[status]
      }}>
        {status}
      </span>
    )
  }

  const renderOverviewContent = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Users size={20} color="white" />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
            Total Users
          </h3>
        </div>
        <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
          1,234
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <TrendingUp size={16} color="#10b981" />
          <span style={{ fontSize: '14px', color: '#10b981' }}>+12% from last month</span>
        </div>
      </div>

      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Activity size={20} color="white" />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
            Active Sessions
          </h3>
        </div>
        <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
          456
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <TrendingUp size={16} color="#10b981" />
          <span style={{ fontSize: '14px', color: '#10b981' }}>+8% from last week</span>
        </div>
      </div>

      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FileText size={20} color="white" />
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
            Reports Generated
          </h3>
        </div>
        <div style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
          89
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <TrendingUp size={16} color="#10b981" />
          <span style={{ fontSize: '14px', color: '#10b981' }}>+15% this month</span>
        </div>
      </div>
    </div>
  )

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'overview':
        return renderOverviewContent()
      default:
        return (
          <div style={{
            background: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <FileText size={48} color="#6b7280" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>
              {reportTypes.find(r => r.id === selectedReport)?.name}
            </h3>
            <p style={{ color: '#9ca3af', margin: 0 }}>
              Report content will be displayed here.
            </p>
          </div>
        )
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
            Reports
          </h1>
          <p style={{ color: '#9ca3af', margin: 0 }}>Generate and analyze business reports and insights.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            style={{
              padding: '12px 16px',
              border: '1px solid #374151',
              borderRadius: '8px',
              backgroundColor: '#1f2937',
              color: 'white',
              fontSize: '14px'
            }}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      {/* Report Type Selector */}
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {reportTypes.map((report) => {
            const Icon = report.icon
            return (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: selectedReport === report.id ? '1px solid #3b82f6' : '1px solid #374151',
                  backgroundColor: selectedReport === report.id ? '#3b82f6' : '#374151',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={18} />
                <span>{report.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Report Content */}
      <div style={{ marginBottom: '24px' }}>
        {renderReportContent()}
      </div>

      {/* Recent Reports */}
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', margin: 0 }}>
            Recent Reports
          </h2>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#3b82f6',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <Filter size={16} />
            Filter
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#111827' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Report Name
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Type
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Date Generated
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Size
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Status
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} style={{ borderBottom: '1px solid #374151' }}>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <FileText size={20} color="#6b7280" />
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff' }}>
                        {report.name}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
                    {report.type}
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
                    {report.date}
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
                    {report.size}
                  </td>
                  <td style={{ padding: '16px' }}>
                    {getStatusBadge(report.status)}
                  </td>
                  <td style={{ padding: '16px' }}>
                    <button style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#3b82f6',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      <Download size={16} />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Reports
