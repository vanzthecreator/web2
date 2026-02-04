import React, { useState } from 'react'
import { Search, Plus, Edit, Trash2, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 10

  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active', joinDate: '2024-01-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User', status: 'Inactive', joinDate: '2024-01-10' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-01-05' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie.wilson@example.com', role: 'User', status: 'Active', joinDate: '2024-01-25' },
    { id: 6, name: 'Diana Martinez', email: 'diana.martinez@example.com', role: 'User', status: 'Active', joinDate: '2024-01-18' },
    { id: 7, name: 'Edward Davis', email: 'edward.davis@example.com', role: 'User', status: 'Suspended', joinDate: '2024-01-12' },
    { id: 8, name: 'Fiona Garcia', email: 'fiona.garcia@example.com', role: 'Moderator', status: 'Active', joinDate: '2024-01-08' }
  ]

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  const getStatusBadge = (status) => {
    const styles = {
      Active: { backgroundColor: '#10b981', color: 'white' },
      Inactive: { backgroundColor: '#6b7280', color: 'white' },
      Suspended: { backgroundColor: '#ef4444', color: 'white' }
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

  const getRoleBadge = (role) => {
    const styles = {
      Admin: { backgroundColor: '#8b5cf6', color: 'white' },
      Moderator: { backgroundColor: '#3b82f6', color: 'white' },
      User: { backgroundColor: '#6b7280', color: 'white' }
    }
    return (
      <span style={{
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
        ...styles[role]
      }}>
        {role}
      </span>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
            Users
          </h1>
          <p style={{ color: '#9ca3af', margin: 0 }}>Manage your application users and their permissions.</p>
        </div>
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
          <Plus size={16} />
          Add User
        </button>
      </div>

      {/* Search and Filter */}
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '44px',
                paddingRight: '16px',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            border: '1px solid #374151',
            borderRadius: '8px',
            backgroundColor: '#374151',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#111827' }}>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  User
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Role
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Status
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Join Date
                </th>
                <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase' }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} style={{ borderBottom: '1px solid #374151' }}>
                  <td style={{ padding: '16px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', marginBottom: '4px' }}>
                        {user.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>
                        {user.email}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px' }}>
                    {getRoleBadge(user.role)}
                  </td>
                  <td style={{ padding: '16px' }}>
                    {getStatusBadge(user.status)}
                  </td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#9ca3af' }}>
                    {user.joinDate}
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#3b82f6',
                        cursor: 'pointer',
                        padding: '4px'
                      }}>
                        <Edit size={16} />
                      </button>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#ef4444',
                        cursor: 'pointer',
                        padding: '4px'
                      }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid #374151',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of{' '}
            {filteredUsers.length} results
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                padding: '8px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: currentPage === 1 ? '#111827' : '#374151',
                color: currentPage === 1 ? '#6b7280' : '#ffffff',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <span style={{ fontSize: '14px', color: '#ffffff', padding: '0 12px' }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                padding: '8px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: currentPage === totalPages ? '#111827' : '#374151',
                color: currentPage === totalPages ? '#6b7280' : '#ffffff',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
