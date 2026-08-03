import React from 'react'
import { FiDownload, FiUsers, FiTrendingUp, FiCalendar, FiFileText, FiGrid, FiBell, FiSettings, FiSearch, FiGlobe } from 'react-icons/fi'
import { MdOutlineSchool } from 'react-icons/md'

function Reports({ onBack }) {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon"><MdOutlineSchool /></div>
          <div><h3>NMC Shikshan</h3><p>GOVT OF MAHARASHTRA</p></div>
        </div>
        <nav className="nav-menu">
          <a className="nav-item"><FiGrid /> Dashboard</a>
          <a className="nav-item"><FiCalendar /> Schools</a>
          <a className="nav-item"><FiUsers /> Attendance</a>
          <a className="nav-item active"><FiFileText /> Reports</a>
          <a className="nav-item"><FiBell /> Notifications</a>
        </nav>
        <div className="sidebar-bottom">
          <a className="nav-item"><FiSettings /> Settings</a>
          <div className="user-profile">
            <img src="src/assets/ad.jpg" alt="user" />
            <div>
              <h4>Rajesh Deshmukh</h4>
              <p>Zonal Officer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <header className="topbar">
          <div className="search-box"><FiSearch /><input placeholder="Search reports, schools or zones..." /></div>
          <div className="topbar-right"><FiGlobe /><FiBell /><span>Monthly Audit Portal</span></div>
        </header>

        <div className="page-top">
          <div className="page-header">
            <p style={{fontSize:'12px', color:'#64748b'}}>Reports {'>'} Institutional Monthly Audit</p>
            <h2>Monthly Institutional Audit Report</h2>
            <p>Reporting Period: October 2023 | Generation Date: Nov 02, 2023</p>
          </div>
          <div className="topbar-actions">
            <button className="btn-outline"><FiDownload /> Export Excel</button>
            <button className="btn-primary"><FiDownload /> Download PDF</button>
          </div>
        </div>

        <section className="stats-grid">
          <div className="stat-card">
            <FiUsers className="stat-icon orange" />
            <div><p>Schools Reporting</p><h3>1,248 <span>/ 1270</span></h3><span style={{color:'#f97316'}}>87% Compliance</span></div>
          </div>
          <div className="stat-card">
            <FiTrendingUp className="stat-icon blue" />
            <div><p>Avg Attendance</p><h3>87.4%</h3><span style={{color:'#16a34a'}}>+2.3% vs Prev</span></div>
          </div>
          <div className="stat-card">
            <FiCalendar className="stat-icon green" />
            <div><p>Working Days</p><h3>21 Days</h3><span>Target: 22</span></div>
          </div>
        </section>

        <div className="d4-grid">
          <div className="card">
            <div className="card-header"><h3>Zone-wise Attendance %</h3><button className="link-btn">View All Zones</button></div>
            {[
              {zone: 'Zone 1: South Nashik', per: 92.4},
              {zone: 'Zone 2: Nashik Road', per: 88.7},
              {zone: 'Zone 3: Satpur Industrial', per: 76.2},
              {zone: 'Zone 4: CIDCO Cluster', per: 90.5},
              {zone: 'Zone 5: Panchavati', per: 85.8},
            ].map(z => (
              <div key={z.zone} className="zone-row">
                <div className="top"><span>{z.zone}</span><b>{z.per}%</b></div>
                <div className="progress"><div className="progress-bar" style={{width:`${z.per}%`}}></div></div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="card-header"><h3>Recent Institutional Audits</h3>
              <select className="select-small"><option>All Status</option></select>
            </div>
            <table className="staff-table">
              <thead><tr><th>SCHOOL ID / NAME</th><th>AVG ATTN</th><th>MDM REPORT</th><th>STATUS</th></tr></thead>
              <tbody>
                <tr><td><b>NMC School No. 43</b><br/><span style={{fontSize:'11px', color:'#64748b'}}>ID: 772376789</span></td><td>94.2%</td><td>OK</td><td><span className="badge green">Compliant</span></td></tr>
                <tr><td><b>M.P. Convent High School</b><br/><span style={{fontSize:'11px', color:'#64748b'}}>ID: 772376790</span></td><td>62.8%</td><td>WARN</td><td><span className="badge red">Flagged</span></td></tr>
                <tr><td><b>K.B.H. Vidyalaya</b><br/><span style={{fontSize:'11px', color:'#64748b'}}>ID: 772376791</span></td><td>81.5%</td><td>REVIEW</td><td><span className="badge orange">Under Review</span></td></tr>
                <tr><td><b>Nashik Model Primary</b><br/><span style={{fontSize:'11px', color:'#64748b'}}>ID: 772376792</span></td><td>93.9%</td><td>OK</td><td><span className="badge green">Compliant</span></td></tr>
              </tbody>
            </table>
            <button className="link-btn" style={{marginTop:'12px'}}>Show Next 25 Schools {'>'}</button>
          </div>
        </div>

        <div className="card signature-card">
          <div className="signature-left">
            <img src="src/assets/ad.jpg" alt="" />
            <div>
              <p style={{margin:0, fontSize:'12px', color:'#64748b'}}>Digitally Signed By:</p>
              <b>Dr. Rajesh K. Deshmukh</b>
              <p style={{margin:0, fontSize:'12px', color:'#64748b'}}>Chief Administrative Officer, Education Dept.</p>
            </div>
          </div>
          <div className="qr-box">
            <p>SCAN TO VERIFY REPORT</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=NMC" alt="qr" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Reports