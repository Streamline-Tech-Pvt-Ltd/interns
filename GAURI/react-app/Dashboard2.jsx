import { useState } from 'react';
import { LayoutDashboard, Building2, Users, BarChart3, Settings, LifeBuoy, LogOut, Search, X, CheckCircle, XCircle, UsersRound, FileText } from 'lucide-react';
import './App.css';

export default function Dashboard2() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // saare activities ka state
  const [activities, setActivities] = useState([
    { id: 1, school: 'Saraswati Vidyamandir', activity: 'Infrastructure Audit', date: 'Oct 24, 2023', status: 'Success' },
    { id: 2, school: 'Kendriya Pathshala', activity: 'Staff Recruitment', date: 'Oct 23, 2023', status: 'Pending' }, // yahi wala
    { id: 3, school: 'Bal Bharti Public', activity: 'Mid-Day Meal Report', date: 'Oct 22, 2023', status: 'Review' },
  ]);

  // row click karne par popup kholega
  const openPopup = (activity) => {
    setSelectedRequest(activity);
    setShowPopup(true);
  }

  // Approve button
  const handleApprove = () => {
    setActivities(activities.map(item => 
      item.id === selectedRequest.id? {...item, status: 'Success' } : item
    ));
    setShowPopup(false);
  }

  // Reject button 
  const handleReject = () => {
    setActivities(activities.map(item => 
      item.id === selectedRequest.id? {...item, status: 'Pending' } : item
    ));
    setShowPopup(false);
  }

  return (
    <div className="eduportal-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon"><div className="logo-square">E</div></div>
          <h2>EduPortal</h2>
          <p>MANAGEMENT SYSTEM</p>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active"><LayoutDashboard size={18} /> Dashboard</a>
          <a href="#" className="nav-item"><Building2 size={18} /> Institutions</a>
          <a href="#" className="nav-item"><Users size={18} /> Personnel</a>
          <a href="#" className="nav-item"><BarChart3 size={18} /> Analytics</a>
          <a href="#" className="nav-item"><Settings size={18} /> Settings</a>
        </nav>
        <div className="sidebar-footer">
          <div className="system-status">● System Status: Active</div>
          <a href="#" className="nav-item"><LifeBuoy size={18} /> Support</a>
          <a href="#" className="nav-item"><LogOut size={18} /> Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <div className="search-bar"><Search size={18} /><input type="text" placeholder="Search school ID, teacher, or application..." /></div>
        </header>

        <div className="dashboard-body">
          <h1>Dashboard Overview</h1>
          <p className="subtitle">Welcome back, Administrator. Here is the latest activity across your network for today.</p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-top"><span>TOTAL SCHOOLS</span><span className="badge green">+8%</span></div>
              <div className="stat-icon"><Building2 size={24} /><h2>1,482</h2></div>
            </div>
            <div className="stat-card">
              <div className="stat-top"><span>TOTAL STUDENTS</span><span className="badge blue">+4.2%</span></div>
              <div className="stat-icon"><Users size={24} /><h2>84,291</h2></div>
            </div>
          </div>

          <div className="activity-section">
            <h3>Recent School Activities</h3>
            <p className="subtitle">Manage and audit institutional updates</p>
            <table>
              <thead>
                <tr><th>SCHOOL NAME</th><th>ACTIVITY TYPE</th><th>DATE</th><th>STATUS</th></tr>
              </thead>
              <tbody>
                {activities.map((item) => (
                  <tr key={item.id} onClick={() => openPopup(item)} style={{cursor: 'pointer'}}>
                    <td><div className="school-cell"><div className="school-icon">{item.school[0]}</div> {item.school}</div></td>
                    <td>{item.activity}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase() === 'success'? 'success' : item.status.toLowerCase() === 'pending'? 'danger' : 'warning'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Popup */}
      {showPopup && selectedRequest && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-header">
              <div>
                <h3>Request Details</h3>
                <span>REF ID: REQ-992-8</span>
              </div>
              <X size={20} onClick={() => setShowPopup(false)} className="close-icon"/>
            </div>
            <div className="popup-body">
              <div className="popup-title">
                <UsersRound size={20} />
                <div>
                  <h4>Additional Staff Recruitment Request</h4>
                  <p>Submitted by: {selectedRequest.school}</p>
                </div>
              </div>
              <div className="popup-grid">
                <div><label>DATE SUBMITTED</label><p>October 23, 2023</p></div>
                <div><label>URGENCY LEVEL</label><p className="high">High Priority</p></div>
                <div><label>DEPARTMENT</label><p>Primary Education</p></div>
                <div><label>BUDGET CODE</label><p>EDU-2024-C3</p></div>
              </div>
              <div className="popup-section">
                <label>REQUEST SUMMARY</label>
                <p>"The school has seen a 15% increase in enrollment for the current semester. We require two additional junior educators for the Mathematics department to maintain the mandated 30:1 student-teacher ratio."</p>
              </div>
              <div className="popup-section">
                <label>SUPPORTING DOCUMENTS</label>
                <div className="doc-box"><FileText size={16}/> Enrollment_Report_Q3.pdf</div>
              </div>
              <div className="popup-section">
                <label>INTERNAL REVIEWER COMMENTS</label>
                <textarea placeholder="Add comments for the institution..."></textarea>
              </div>
            </div>
            <div className="popup-footer">
              <button className="btn-reject" onClick={handleReject}><XCircle size={16}/> Reject</button>
              <button className="btn-approve" onClick={handleApprove}><CheckCircle size={16}/> Approve</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}