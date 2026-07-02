import React from 'react'
import './App.css'
import { FiGrid, FiUsers, FiCalendar, FiFileText, FiBell, FiSettings, FiSearch, FiGlobe, FiPlus, FiLogOut } from 'react-icons/fi'
import { MdOutlineSchool, MdOutlineGroups, MdPersonOutline, MdPublish } from 'react-icons/md'
import { IoTrendingUp } from 'react-icons/io5'

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon"><MdOutlineSchool /></div>
          <div>
            <h3>NMC Shikshan</h3>
            <p>GOVT OF MAHARASHTRA</p>
          </div>
        </div>

        <nav className="nav-menu">
          <a className="nav-item active"><FiGrid /> Dashboard</a>
          {user?.role === 'admin' && <a className="nav-item"><FiUsers /> Schools</a>}
          <a className="nav-item"><FiCalendar /> Attendance</a>
          <a className="nav-item"><FiFileText /> Reports</a>
          <a className="nav-item"><FiBell /> Notifications</a>
        </nav>
        
        <div className="sidebar-bottom">
          <a className="nav-item"><FiSettings /> Settings</a>
          <a className="nav-item" onClick={onLogout}><FiLogOut /> Logout</a>
          <div className="user-profile">
            <img src="https://i.pravatar.cc/40" alt="user" />
            <div>
              <h4>{user?.name || 'Admin User'}</h4>
              <p>{user?.role === 'admin' ? 'Nashik Central' : user?.id}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search schools, records, or staff..." />
          </div>
          <div className="topbar-right">
            <FiGlobe />
            <FiBell />
            <span className="portal-name">NMC Shikshan Portal - {user?.role?.toUpperCase()}</span>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="stats-grid">
          <div className="stat-card">
            <p className="stat-title">TOTAL SCHOOLS</p>
            <div className="stat-value">
              <h2>482</h2>
              <MdOutlineSchool className="stat-icon" />
            </div>
            <p className="stat-change up"><IoTrendingUp /> +3 this month</p>
          </div>

          <div className="stat-card">
            <p className="stat-title">TOTAL STUDENTS</p>
            <div className="stat-value">
              <h2>124.5k</h2>
              <MdOutlineGroups className="stat-icon" />
            </div>
            <p className="stat-change up"><IoTrendingUp /> +1.2k new enroll</p>
          </div>

          <div className="stat-card">
            <p className="stat-title">TOTAL TEACHERS</p>
            <div className="stat-value">
              <h2>8,240</h2>
              <MdPersonOutline className="stat-icon" />
            </div>
            <p className="stat-info">Active across all zones</p>
          </div>

          <div className="stat-card publish">
            <MdPublish className="publish-icon" />
            <h2>PUBLISH<br />NOTICE</h2>
          </div>
        </section>

        {/* Main Grid */}
        <section className="content-grid">
          <div className="card attendance-card">
            <div className="card-header">
              <h3>Total Schools Attendance</h3>
              <div className="legend">
                <span><div className="dot blue"></div>Students</span>
                <span><div className="dot dark"></div>Staff</span>
                <select><option>Last 7 Days</option></select>
              </div>
            </div>
            <div className="chart-area">
              <p className="chart-title">ATTENDANCE TRENDS (%)</p>
              <div className="chart-wrap">
                <div className="donut-chart">
                  <div className="donut-center">
                    <h2>92%</h2>
                    <p>Avg</p>
                  </div>
                </div>
                <div className="donut-legend">
                  <p className="legend-title">TODAY'S DISTRIBUTION</p>
                  <div className="legend-item"><span className="dot blue"></span>Present 85%</div>
                  <div className="legend-item"><span className="dot red"></span>Absent 10%</div>
                  <div className="legend-item"><span className="dot orange"></span>Leave 5%</div>
                </div>
              </div>
              <div className="days">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
              
              <div className="card-header" style={{marginTop: '24px', borderTop: '1px solid #eee', paddingTop: '20px'}}>
                <h3>Recent School Activities</h3>
                <a href="#" className="download">Download CSV</a>
              </div>
              <table style={{marginTop: '12px', marginBottom: '0'}}>
                <thead>
                  <tr>
                    <th>School Name</th>
                    <th>Principal</th>
                    <th>Enrollment</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Saraswati Vidyamandir</b><br /><span>Panchavati Zone</span></td>
                    <td>Dr. Ashok Patil</td>
                    <td>1,240</td>
                    <td><span className="status active">Active</span></td>
                    <td><button className="btn-outline">View Details</button></td>
                  </tr>
                  <tr>
                    <td><b>Nashik Central High</b><br /><span>CBD Zone</span></td>
                    <td>Mrs. Sunita Deshmukh</td>
                    <td>890</td>
                    <td><span className="status critical">Critical</span></td>
                    <td><button className="btn-outline">View Details</button></td>
                  </tr>
                  <tr>
                    <td><b>Godavari Primary School</b><br /><span>Godavari East</span></td>
                    <td>Mr. Rajesh Kulkarni</td>
                    <td>560</td>
                    <td><span className="status help">Needs Help</span></td>
                    <td><button className="btn-outline">View Details</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="right-column">
            <div className="card alerts-card">
              <div className="card-header">
                <h3>Recent Alerts</h3>
                <span className="badge">3 New</span>
              </div>
              <div className="alert-list">
                <div className="alert-item">
                  <p className="alert-type critical">CRITICAL</p>
                  <h4>Infrastructure Emergency</h4>
                  <p>Roof damage reported at Nashik Central High due to heavy rains. Immediate inspection required.</p>
                  <span>35 mins ago</span>
                </div>
                <div className="alert-item">
                  <p className="alert-type resource">RESOURCE</p>
                  <h4>Textbook Allocation</h4>
                  <p>New batch of Science textbooks arrived at the central warehouse. Distribution starts Monday.</p>
                  <span>2 hours ago</span>
                </div>
                <div className="alert-item">
                  <p className="alert-type staff">STAFF UPDATE</p>
                  <h4>Teacher Transfer</h4>
                  <p>5 new secondary teachers appointed to rural Nashik zones. Orientation scheduled for Friday.</p>
                  <span>4 hours ago</span>
                </div>
                <button className="view-all">View All Activity</button>
              </div>
            </div>

            <div className="card quick-card">
              <h3>Quick Management</h3>
              <div className="quick-grid">
                <button><FiPlus /> ADD SCHOOL</button>
                <button><FiUsers /> HIRE STAFF</button>
                <button><FiFileText /> REPORTS</button>
                <button><FiBell /> BROADCAST</button>
              </div>
            </div>
          </div>
        </section>

        <button className="fab"><FiPlus /></button>
      </main>
    </div>
  )
}

export default Dashboard