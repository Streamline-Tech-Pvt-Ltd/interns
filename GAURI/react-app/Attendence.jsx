import React, { useState } from 'react'
import './App.css'
import { FiArrowLeft, FiDownload, FiUsers, FiCheck, FiX, FiClock, FiGrid, FiCalendar, FiFileText, FiBell, FiSettings, FiSearch } from 'react-icons/fi'
import { MdOutlineSchool } from 'react-icons/md'

const staffData = [
  { id: 1, name: 'Sunita Deshmukh', idNo: 'NMC-TR-2021-842', dept: 'Mathematics', status: 'Present', time: '07:43 AM', img: 'https://i.pravatar.cc/40?u=1' },
  { id: 2, name: 'Anil Kulkarni', idNo: 'NMC-TR-2018-193', dept: 'History', status: 'Absent', time: '--', img: 'https://i.pravatar.cc/40?u=2', note: 'Informed via phone' },
  { id: 3, name: 'Meera Joshi', idNo: 'NMC-TR-2015-122', dept: 'Science', status: 'Leave', time: '--', img: 'https://i.pravatar.cc/40?u=3', note: 'Medical Leave (Approved)' },
  { id: 4, name: 'Prabha Rao', idNo: 'NMC-TR-2018-401', dept: 'Music', status: 'Present', time: '07:55 AM', img: 'https://i.pravatar.cc/40?u=4' },
  { id: 5, name: 'Vikram Singh', idNo: 'NMC-TR-2022-019', dept: 'Sports', status: 'Present', time: '08:02 AM', img: 'https://i.pravatar.cc/40?u=5' },
  { id: 6, name: 'Rohit Patil', idNo: 'NMC-TR-2019-555', dept: 'English', status: 'Present', time: '07:50 AM', img: 'https://i.pravatar.cc/40?u=6' },
]

function Attendence({ onBack }) {
  const [staff, setStaff] = useState(staffData)
  const [search, setSearch] = useState('')

  const filteredStaff = staff.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.dept.toLowerCase().includes(search.toLowerCase()) ||
    s.idNo.toLowerCase().includes(search.toLowerCase())
  )

  const total = staff.length
  const present = staff.filter(s => s.status === 'Present').length
  const absent = staff.filter(s => s.status === 'Absent').length
  const leave = staff.filter(s => s.status === 'Leave').length

  const markStatus = (id, newStatus) => {
    setStaff(staff.map(s => s.id === id ? {...s, status: newStatus} : s))
  }
  
  const markAllPresent = () => {
    setStaff(staff.map(s => ({...s, status: 'Present'})))
  }

  return (
    <div className="dashboard dashboard4">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon"><MdOutlineSchool /></div>
          <div><h3>NMC Shikshan</h3><p>GOVT OF MAHARASHTRA</p></div>
        </div>
        <nav className="nav-menu">
          <a className="nav-item" onClick={onBack} style={{cursor:'pointer'}}><FiGrid /> Dashboard</a>
          <a className="nav-item"><FiCalendar /> Schools</a>
          <a className="nav-item active" style={{cursor:'pointer'}}><FiCalendar /> Attendance</a>
          <a className="nav-item"><FiFileText /> Reports</a>
          <a className="nav-item"><FiBell /> Notifications</a>
        </nav>
        <div className="sidebar-bottom">
          <a className="nav-item"><FiSettings /> Settings</a>
          <div className="user-profile">
            <img src="https://i.pravatar.cc/40" alt="user" />
            <div><h4>Dr. Rajesh Kumar</h4><p>Principal</p></div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar topbar-d4">
          <button className="back-btn" onClick={onBack} style={{background:'none', border:'none', cursor:'pointer', fontSize:'22px', padding:'8px'}}>
            <FiArrowLeft /> {/* Sirf Arrow */}
          </button>

          <div className="search-box"> {/* Search Bar */}
            <FiSearch />
            <input 
              type="text" 
              placeholder="Search teacher, department, ID..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>

          <div className="topbar-actions">
            <button className="btn-outline"><FiDownload /> Export Report</button>
            <button className="btn-primary">Submit Attendance</button>
          </div>
        </header>

        <div style={{padding: '20px 24px 0'}}>
          <h2>Teacher Attendance</h2>
          <p style={{color:'#666'}}>Shivprabha High School | Friday, Oct 27, 2023</p>
        </div>

        <section className="attendance-summary">
          <div className="summary-card"><FiUsers /><div><h3>{total}</h3><p>Total Staff</p></div></div>
          <div className="summary-card"><FiCheck className="green"/><div><h3>{present}</h3><p>Present</p><span className="rate">{Math.round(present/total*100)}% Attendance rate</span></div></div>
          <div className="summary-card"><FiX className="red"/><div><h3>{absent}</h3><p>Absent</p><span>Requires verification</span></div></div>
          <div className="summary-card"><FiClock className="orange"/><div><h3>{leave}</h3><p>On Leave</p><span>Pre-approved leaves</span></div></div>
        </section>

        <div className="card">
          <div className="card-header">
            <h3>Staff Roster</h3>
            <div className="table-actions">
              <select><option>All Departments</option></select>
              <button className="link-btn" onClick={markAllPresent}>Mark all as Present</button>
            </div>
          </div>
          <table className="staff-table">
            <thead>
              <tr>
                <th>TEACHER PROFILE</th><th>DEPARTMENT</th><th>STATUS</th><th>CHECK-IN</th><th>REMARKS</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map(s => (
                <tr key={s.id}>
                  <td className="profile-cell">
                    <img src={s.img} alt={s.name} />
                    <div><b>{s.name}</b><span>{s.idNo}</span></div>
                  </td>
                  <td>{s.dept}</td>
                  <td>
                    <div className="status-buttons">
                      <button className={s.status==='Present'?'active green':''} onClick={()=>markStatus(s.id, 'Present')}>Present</button>
                      <button className={s.status==='Absent'?'active red':''} onClick={()=>markStatus(s.id, 'Absent')}>Absent</button>
                      <button className={s.status==='Leave'?'active orange':''} onClick={()=>markStatus(s.id, 'Leave')}>Leave</button>
                    </div>
                  </td>
                  <td>{s.time}</td>
                  <td>{s.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d4-bottom-grid">
          <div className="card">
            <h3>Attendance Trend (Last 7 Days)</h3>
            <div className="mini-bar-chart">
              {[60, 70, 65, 50, 90].map((h,i)=> <div key={i} style={{height:`${h}%`}}></div>)}
            </div>
            <div className="days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div>
          </div>
          <div className="card alert-card">
            <h4>⚠️ Verification Needed</h4>
            <p>2 teachers marked absent without prior notice. Verify with department heads before final submission.</p>
            <button className="btn-primary-full">Review Flags</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Attendence