import React from 'react'
import './App.css'
import { FiArrowLeft, FiEdit, FiDownload, FiMapPin, FiPlus, FiGrid, FiCalendar, FiFileText, FiBell, FiSettings, FiSearch, FiGlobe } from 'react-icons/fi'
import { MdOutlineSchool, MdPersonOutline, MdOutlineGroups, MdOutlineClass, MdOutlineReportProblem } from 'react-icons/md'

function Dashboard3({ onBack }) {
  return (
    <div className="dashboard dashboard3">
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
          <a className="nav-item" onClick={onBack} style={{cursor:'pointer'}}>
            <FiGrid /> Dashboard
          </a>
          <a className="nav-item active" style={{cursor:'pointer'}}>
            <FiCalendar /> Schools
          </a>
          <a className="nav-item"><FiCalendar /> Attendance</a>
          <a className="nav-item"><FiFileText /> Reports</a>
          <a className="nav-item"><FiBell /> Notifications</a>
        </nav>
        
        <div className="sidebar-bottom">
          <a className="nav-item"><FiSettings /> Settings</a>
          <div className="user-profile">
            <img src="https://i.pravatar.cc/40" alt="user" />
            <div>
              <h4>Rajesh Deshmukh</h4>
              <p>Zonal Officer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar topbar-d3">
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search schools, staff or documents..." />
          </div>
          <div className="topbar-right">
            <FiGlobe />
            <FiBell />
            <span className="portal-name">Portal Admin</span>
          </div>
        </header>

        <div className="school-header">
          <div className="school-title">
            <div className="school-icon"><MdOutlineSchool /></div>
            <div>
              <h2>Pragati Vidya Mandir Primary School <span className="badge-green">PRIMARY</span></h2>
              <p><FiMapPin /> Plot 45, Sector 12, Dada, Nashik, Maharashtra 422009</p>
              <p className="sub-info">Principal: Dr. Aniket Kulkarni | School ID: NMC-53881</p>
            </div>
          </div>
          <div className="school-actions">
            <button className="btn-outline"><FiEdit /> Edit Profile</button>
            <button className="btn-primary"><FiDownload /> Export Report</button>
          </div>
        </div>

        {/* Stats Cards - IMAGE STYLE */}
        <section className="stats-grid-d3">
          <div className="stat-card-d3">
            <MdOutlineGroups className="stat-icon-d3 blue" />
            <div>
              <p>TOTAL STUDENTS</p>
              <h3>1248</h3>
            </div>
          </div>
          <div className="stat-card-d3">
            <MdPersonOutline className="stat-icon-d3 green" />
            <div>
              <p>TOTAL TEACHERS</p>
              <h3>54</h3>
            </div>
          </div>
          <div className="stat-card-d3">
            <MdOutlineClass className="stat-icon-d3 orange" />
            <div>
              <p>TOTAL CLASSROOMS</p>
              <h3>32</h3>
            </div>
          </div>
          <div className="stat-card-d3">
            <MdOutlineReportProblem className="stat-icon-d3 red" />
            <div>
              <p>OPEN TICKETS</p>
              <h3>06</h3>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Overview</button>
          <button className="tab">Documents</button>
          <button className="tab">Staff</button>
          <button className="tab">Requirements</button>
        </div>

        {/* Main Grid */}
        <div className="d3-grid">
          <div className="d3-left">
            <div className="card">
              <div className="card-header">
                <h3>Academic Performance</h3>
                <select className="select-small"><option>Standard 1-10</option></select>
              </div>
              <p className="sub">Passing percentage trend over the last 5 years</p>
              
              {/* IMAGE WALA BAR CHART */}
              <div className="bar-chart-img-style">
                <div className="bar-col"><div className="bar-img" style={{height: '45%'}}></div><span>2018</span></div>
                <div className="bar-col"><div className="bar-img" style={{height: '55%'}}></div><span>2019</span></div>
                <div className="bar-col"><div className="bar-img" style={{height: '65%'}}></div><span>2020</span></div>
                <div className="bar-col"><div className="bar-img" style={{height: '78%'}}></div><span>2021</span></div>
                <div className="bar-col"><div className="bar-img" style={{height: '85%'}}></div><span>2022</span></div>
                <div className="bar-col"><div className="bar-img" style={{height: '90%'}}></div><span>2023</span></div>
                <div className="bar-col"><div className="bar-img" style={{height: '92%'}}></div><span>2024</span></div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3>Pending Requirements</h3>
                <span className="badge-red">2 PENDING</span>
              </div>
              <div className="req-item">
                <div>
                  <h4><MdOutlineClass /> Lab Equipment Procurement</h4>
                  <p>Fund Approved</p>
                  <div className="progress"><div style={{width: '76%'}}></div></div>
                </div>
                <span className="percent">76%</span>
              </div>
              <div className="req-item">
                <div>
                  <h4><FiGrid /> Smart Classroom Setup</h4>
                  <p>In Progress</p>
                  <div className="progress"><div style={{width: '42%', background:'#f59e0b'}}></div></div>
                </div>
                <span className="percent">42%</span>
              </div>
            </div>
          </div>

          <div className="d3-right">
            <div className="card">
              <h3>Recent Updates</h3>
              <div className="update-item">
                <div className="dot blue"></div>
                <div>
                  <h4>Mid-Day Meal Audit Complete</h4>
                  <p>School scored 95% in quarterly audit. No discrepancies found.</p>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="update-item">
                <div className="dot green"></div>
                <div>
                  <h4>Staff Attendance Sync</h4>
                  <p>Biometric attendance data synced successfully. 100% staff present today.</p>
                  <span>Today</span>
                </div>
              </div>
              <div className="update-item">
                <div className="dot orange"></div>
                <div>
                  <h4>New Enrollment Portal</h4>
                  <p>Online admission portal for 2024-25 session opened. 120 applications received.</p>
                  <span>3 days ago</span>
                </div>
              </div>
              <button className="link-btn">View Historical Log</button>
            </div>

            <div className="card">
              <h3>Location Context</h3>
              <div className="map-box">
                <FiMapPin className="map-pin" />
              </div>
              <p className="map-address">Nashik Rd, 12, Nashik</p>
              <button className="fab-small"><FiPlus /></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard3