import React, { useState, useRef } from 'react'
import './App.css'
import { FiArrowLeft, FiUploadCloud, FiX, FiFile, FiGrid, FiUsers, FiFileText, FiBell, FiSettings, FiSearch, FiHelpCircle } from 'react-icons/fi'
import { MdOutlineSchool } from 'react-icons/md'

function Submit({ onBack, onSubmitSuccess }) {
  const [priority, setPriority] = useState('High Priority')
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitLock = useRef(false) // DOUBLE CLICK ROKNE KE LIYE
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault(); e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true)
    else if (e.type === "dragleave") setDragActive(false)
  }
  const handleDrop = (e) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0])
  }
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0])
  }
  const handleUploadClick = (e) => { e.stopPropagation(); fileInputRef.current.click() }

  const handleSubmit = () => {
    if (!file) {
      alert("Please upload Attendance PDF first!");
      return
    }
    if (submitLock.current) return; // AGAR PEHLE SE CLICK HUA HAI TO RUK JAO

    submitLock.current = true; // LOCK ON
    setIsSubmitting(true)
    onSubmitSuccess() // App.jsx ko bolo popup dikhane ke liye
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon"><MdOutlineSchool /></div>
          <div><h3>EduPortal</h3><p>MANAGEMENT SYSTEM</p></div>
        </div>
        <nav className="nav-menu">
          <a className="nav-item" onClick={onBack}><FiGrid /> Dashboard</a>
          <a className="nav-item active"><FiUsers /> Institutions</a>
          <a className="nav-item"><FiUsers /> Personnel</a>
          <a className="nav-item"><FiFileText /> Analytics</a>
          <a className="nav-item"><FiSettings /> Settings</a>
        </nav>
        <div className="sidebar-bottom">
          <a className="nav-item"><FiHelpCircle /> Support</a>
          <a className="nav-item">Logout</a>
          <p style={{fontSize:'10px', color:'#64748b', marginTop:'20px'}}>SYSTEM STATUS: ACTIVE</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
            <FiArrowLeft onClick={onBack} style={{cursor:'pointer'}} />
            <div className="search-box"><FiSearch /><input placeholder="Search resources or documents..." /></div>
          </div>
          <div className="topbar-right">
            <FiBell />
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
              <span><b>Principal James Miller</b><br/><span style={{fontSize:'11px'}}>ID: SCH-2024-0124</span></span>
              <img src="https://i.pravatar.cc/32" style={{borderRadius:'50%'}}/>
            </div>
          </div>
        </header>

        <div className="page-header">
          <p style={{fontSize:'12px', color:'#64748b'}}>Institutions {'>'} Resource Planning {'>'} New Requirement</p>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h2>Submit Requirement</h2>
              <p>Log a new infrastructure, staff, or material requirement for your institution.</p>
            </div>
            <span className="draft-badge">DRAFT AUTO-SAVED</span>
          </div>
        </div>

        <div className="submit-grid">
          <div>
            <div className="card">
              <div className="card-header-step">
                <span className="step-circle">1</span>
                <div><h3>Primary Details</h3><p>Define the core aspects of your request</p></div>
              </div>
              <label className="form-label">Requirement Category</label>
              <select className="input-field"><option>Select a category...</option><option>Attendance Report</option></select>

              <label className="form-label">Urgency Priority</label>
              <div className="priority-group">
                {['Critical', 'High Priority', 'Standard', 'Low Priority'].map(p => (
                  <button key={p} type="button" className={`priority-btn ${priority===p?'active':''}`} onClick={()=>setPriority(p)}>
                    <span className={`dot ${p.toLowerCase().split(' ')[0]}`}></span> {p}
                  </button>
                ))}
              </div>

              <label className="form-label">Detailed Description</label>
              <textarea className="input-field" rows="4" placeholder="Provide context, justifications, and specific quantities required..."></textarea>
            </div>

            <div className="card" style={{marginTop:'20px'}}>
              <div className="card-header-step">
                <span className="step-circle">2</span>
                <div><h3>Supporting Documentation <span style={{color:'red'}}>*</span></h3><p>Upload quotations, reports, or visual evidence</p></div>
              </div>

              <div className={`upload-box ${dragActive? 'drag-active' : ''}`}
                onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                onClick={handleUploadClick}
              >
                <input ref={fileInputRef} type="file" accept=".pdf,.xlsx,.jpg,.png" onChange={handleFileChange} style={{display:'none'}} />
                <FiUploadCloud size={28} color="#2563eb" />
                <p><b>Drag and drop files here</b></p>
                <p style={{fontSize:'12px'}}>or click to browse from computer</p>
                <div className="file-types"><span>.PDF</span><span>.JPG/PNG</span><span>.XLSX</span></div>
              </div>

              {file && <div className="file-progress"><FiFile /> <span>{file.name}</span> <FiX onClick={(e)=>{e.stopPropagation(); setFile(null)}} style={{cursor:'pointer', marginLeft:'auto'}} /></div>}
            </div>

            <div className="submit-actions">
              <button type="button" className="btn-outline" disabled={isSubmitting}>💾 Save as Draft</button>
              <button
                type="button"
                className="btn-primary"
                onClick={handleSubmit}
                disabled={!file || isSubmitting}
                style={!file || isSubmitting? {opacity: 0.5, cursor: 'not-allowed'} : {}}
              >
                {isSubmitting? 'Submitting...' : 'Submit Requirement →'}
              </button>
            </div>
          </div>

          <div>
            <div className="card tips-card">
              <h4>💡 Submission Tips</h4>
              <p>Requirements with clear visual evidence and multiple quotations are typically approved 40% faster.</p>
            </div>

            <div className="card help-card">
              <h4><FiHelpCircle /> Need Assistance?</h4>
              <p>Contact the District Education Office if you require clarification about the categorization of your request.</p>
              <a className="link-btn">Contact Support Hub →</a>
            </div>

            <div className="card" style={{marginTop:'20px'}}>
              <h4>INSTITUTION PROFILE</h4>
              <div className="profile-row">
                <img src="https://i.pravatar.cc/40" alt="school" />
                <div><b>St. Edwards High</b><p>ID: EDU-2024-0084</p></div>
              </div>
              <div className="profile-stats">
                <div><span>Remaining Budget</span> <b>$42,500.00</b></div>
                <div><span>Pending Requests</span> <b>03</b></div>
                <div><span>Last Submission</span> <b>12 Feb, 2024</b></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Submit