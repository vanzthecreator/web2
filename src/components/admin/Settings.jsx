import React, { useState } from 'react'
import { User, Shield, Bell, Palette, Globe, Database, Save, RotateCcw, Eye, EyeOff, Mail, Lock, Smartphone } from 'lucide-react'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false
  })
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('en')

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'system', name: 'System', icon: Database }
  ]

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const renderProfileTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Personal Information
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              First Name
            </label>
            <input
              type="text"
              defaultValue="Admin"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Last Name
            </label>
            <input
              type="text"
              defaultValue="User"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Email Address
            </label>
            <input
              type="email"
              defaultValue="admin@example.com"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+1 234-567-8900"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Bio
            </label>
            <textarea
              rows="4"
              defaultValue="Experienced administrator with expertise in system management and user support."
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Profile Picture
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#374151',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#6b7280' }}>AU</span>
          </div>
          <div>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              marginRight: '12px'
            }}>
              Upload New Picture
            </button>
            <button style={{
              border: '1px solid #374151',
              color: '#9ca3af',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Remove
            </button>
            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px', margin: '8px 0 0 0' }}>
              JPG, GIF or PNG. Max size of 2MB
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSecurityTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Change Password
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Current Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 12px',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  backgroundColor: '#111827',
                  color: 'white',
                  fontSize: '14px'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              New Password
            </label>
            <input
              type="password"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Confirm New Password
            </label>
            <input
              type="password"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Two-Factor Authentication
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #374151',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Smartphone size={20} color="#6b7280" />
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', margin: '0 0 4px 0' }}>
                  SMS Authentication
                </p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                  Receive verification codes via SMS
                </p>
              </div>
            </div>
            <button style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Enable
            </button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #374151',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={20} color="#6b7280" />
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', margin: '0 0 4px 0' }}>
                  Email Authentication
                </p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                  Receive verification codes via email
                </p>
              </div>
            </div>
            <button style={{
              backgroundColor: '#374151',
              color: '#9ca3af',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Disable
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotificationsTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Notification Preferences
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { key: 'email', icon: Mail, title: 'Email Notifications', description: 'Receive notifications via email' },
            { key: 'push', icon: Bell, title: 'Push Notifications', description: 'Receive push notifications in browser' },
            { key: 'sms', icon: Smartphone, title: 'SMS Notifications', description: 'Receive notifications via SMS' },
            { key: 'marketing', icon: Mail, title: 'Marketing Emails', description: 'Receive marketing and promotional emails' }
          ].map(({ key, icon: Icon, title, description }) => (
            <div key={key} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon size={20} color="#6b7280" />
                <div>
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', margin: '0 0 4px 0' }}>
                    {title}
                  </p>
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                    {description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleNotificationChange(key)}
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  backgroundColor: notifications[key] ? '#3b82f6' : '#374151',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <span style={{
                  position: 'absolute',
                  top: '2px',
                  left: notifications[key] ? '22px' : '2px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  transition: 'transform 0.2s ease'
                }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAppearanceTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Theme Preferences
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '12px' }}>
              Select Theme
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { value: 'light', label: 'Light', bg: '#ffffff' },
                { value: 'dark', label: 'Dark', bg: '#1f2937' },
                { value: 'auto', label: 'Auto', bg: 'linear-gradient(to right, #ffffff 50%, #1f2937 50%)' }
              ].map(({ value, label, bg }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  style={{
                    padding: '16px',
                    border: theme === value ? '2px solid #3b82f6' : '2px solid #374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    backgroundColor: theme === value ? '#1e3a8a' : 'transparent'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '80px',
                    background: bg,
                    border: '1px solid #374151',
                    borderRadius: '4px',
                    marginBottom: '8px'
                  }} />
                  <p style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', margin: 0 }}>
                    {label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Language & Region
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #374151',
                borderRadius: '8px',
                backgroundColor: '#111827',
                color: 'white',
                fontSize: '14px'
              }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
              Timezone
            </label>
            <select style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #374151',
              borderRadius: '8px',
              backgroundColor: '#111827',
              color: 'white',
              fontSize: '14px'
            }}>
              <option>UTC-08:00 Pacific Time</option>
              <option>UTC-05:00 Eastern Time</option>
              <option>UTC+00:00 GMT</option>
              <option>UTC+01:00 Central European Time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSystemTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          System Information
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Version', value: '2.4.1' },
            { label: 'Last Updated', value: 'February 1, 2024' },
            { label: 'Database Status', value: 'Connected', badge: 'green' },
            { label: 'Storage Used', value: '2.4 GB / 10 GB' }
          ].map(({ label, value, badge }) => (
            <div key={label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid #374151'
            }}>
              <span style={{ fontSize: '14px', color: '#9ca3af' }}>{label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff' }}>{value}</span>
                {badge === 'green' && (
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: '#10b981',
                    color: 'white'
                  }}>
                    Connected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
          Data Management
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #374151',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Database size={20} color="#6b7280" />
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>Export Data</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>Download all your data</p>
              </div>
            </div>
            <span style={{ color: '#6b7280' }}>→</span>
          </button>
          <button style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #374151',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <RotateCcw size={20} color="#6b7280" />
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>Reset Settings</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>Reset all settings to default</p>
              </div>
            </div>
            <span style={{ color: '#6b7280' }}>→</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileTab()
      case 'security':
        return renderSecurityTab()
      case 'notifications':
        return renderNotificationsTab()
      case 'appearance':
        return renderAppearanceTab()
      case 'system':
        return renderSystemTab()
      default:
        return renderProfileTab()
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
            Settings
          </h1>
          <p style={{ color: '#9ca3af', margin: 0 }}>Manage your account settings and preferences.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #374151',
            color: '#9ca3af',
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <RotateCcw size={16} />
            Reset
          </button>
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
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        {/* Sidebar */}
        <div style={{ width: '256px' }}>
          <div style={{
            background: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activeTab === tab.id ? '#3b82f6' : 'transparent',
                      color: activeTab === tab.id ? '#ffffff' : '#9ca3af',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab.id) {
                        e.target.style.backgroundColor = '#374151'
                        e.target.style.color = '#ffffff'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab.id) {
                        e.target.style.backgroundColor = 'transparent'
                        e.target.style.color = '#9ca3af'
                      }
                    }}
                  >
                    <Icon size={18} />
                    <span>{tab.name}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

export default Settings
