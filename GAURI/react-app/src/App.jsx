import { useState } from 'react'
import './App.css'

function App() {
  const [selectedSchool, setSelectedSchool] = useState(0)

  const schools = [
    {
      name: 'Shala No. 42 (Ganpuri)',
      type: 'Primary • Marathi • Code: 12730109201',
      area: 'Panchavati, Nashik',
      principal: 'Dr. Ramesh Pokhriyal',
      rating: '4.8/5',
      passing: '94.2%',
      sports: '98%',
      enrollment: '642',
      faculty: '24:1',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop'
    },
    {
      name: 'Shala No. 12 (Deolali)',
      type: 'Secondary • English • Code: 12730109202',
      area: 'Deolali, Nashik',
      principal: 'Mrs. Sunita Sharma',
      rating: '4.6/5',
      passing: '91.5%',
      sports: '95%',
      enrollment: '580',
      faculty: '22:1',
      img: '9e7b1d7c200fa5d1f3a6dea927a50a9d.jpg'
    },
    {
      name: 'NMC School (CIDCO)',
      type: 'Primary • Semi-English • Code: 12730109203',
      area: 'CIDCO, Nashik',
      principal: 'Mr. Rajesh Patil',
      rating: '4.7/5',
      passing: '93.8%',
      sports: '96%',
      enrollment: '720',
      faculty: '26:1',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop'
    }
  ]

  return (
    <div className="page">

      {/* BLUE MARQUEE BAR */}
      <div className="marquee-bar">
        <div className="marquee-track">
          <span>★ Admission open for Academic Year 2025-26. Apply Now!</span>
          <span>★ New teacher training workshop scheduled for 20th Jan at NMC Headquarters</span>
          
        </div>
      </div>

      {/* HEADER - FIXED */}
      <header className="header">
        <div className="header-container">
          <div className="logo-box">
            <div className="logo-circle">🎓</div>
            <div>
              <h1 className="logo-title">NMC Shikshan Portal | एनएमसी शिक्षण पोर्टल</h1>
            
            </div>
            </div>
          <nav className="nav-links">
            <a href="#" className='active'>HOME</a>
            <a href="#">SCHOOLS</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            <a href="#">LOGIN</a>
          </nav>
          <button className="btn-orange">🟡 मराठी | english</button>
        </div> 
      </header>

      <main className="main-wrapper">

        {/* FIND YOUR SCHOOL SECTION */}
        <section className="school-section">
          <h2 className="main-heading">Find Your School</h2>

          <div className="two-col-grid">
            {/* LEFT COLUMN */}
            <div className="left-col">
              <div className="search-box-card">
                <div className="search-input-wrap">
                  <svg className="search-icon" width="18" height="18" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35"></path>
                  </svg>
                  <input type="text" placeholder="Search by name, area, or code..." />
                </div>

                <div className="filter-btns">
                  <button className="btn-blue">SEARCH</button>
                  <button className="btn-outline">Primary</button>
                  <button className="btn-outline">Secondary</button>
                </div>

                <div className="school-list">
                  {schools.map((s, i) => (
                    <div
                      className={`school-item ${selectedSchool === i? 'active' : ''}`}
                      key={i}
                      onClick={() => setSelectedSchool(i)}
                    >
                      <div className="school-item-top">
                        <h4>{s.name}</h4>
                        {selectedSchool === i && <span className="badge-orange">Selected</span>}
                      </div>
                      <p>{s.type}</p>
                      <p className="location">📍 {s.area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-col">
              <div className="school-detail-card">
                <div className="school-banner">
                  <img src={schools[selectedSchool].img} alt="School" />
                  <div className="banner-overlay">
                    <h3>{schools[selectedSchool].name}</h3>
                    <button className="btn-glass">View Gallery →</button>
                  </div>
                </div>

                <div className="detail-body">
                  <div className="top-stats-row">
                    <div className="stat-mini">
                      <p className="mini-label">Principal</p>
                      <p className="mini-value">{schools[selectedSchool].principal}</p>
                    </div>
                    <div className="stat-mini">
                      <p className="mini-label">Passing Rate</p>
                      <p className="mini-value green">{schools[selectedSchool].passing}</p>
                    </div>
                    <div className="stat-mini">
                      <p className="mini-label">School at 10:00 AM</p>
                      <p className="mini-value">Today</p>
                    </div>
                  </div>

                  <div className="rating-badge">
                    <span>⭐</span>
                    <span>{schools[selectedSchool].rating}</span>
                  </div>

                  <div className="progress-cards">
                    <div className="progress-card">
                      <div className="progress-top">
                        <div>
                          <p className="progress-label">Student Enrollment</p>
                          <h3 className="progress-number">{schools[selectedSchool].enrollment}</h3>
                        </div>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill-blue" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className="progress-card">
                      <div className="progress-top">
                        <div>
                          <p className="progress-label">Faculty & Staff</p>
                          <h3 className="progress-number">{schools[selectedSchool].faculty}</h3>
                        </div>
                        <div className="student-ratio">
                          <span>Student-Faculty Ratio</span>
                          <strong>26:1</strong>
                        </div>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill-orange" style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="action-btns">
                    <button className="btn-blue-full">View Full Profile →</button>
                    <button className="btn-white">Download Report</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS HORIZONTAL - FULL WIDTH */}
          <div className="stats-horizontal">
            <div className="stat-box">
              <div className="stat-header">
                <span>Schools</span>
                <span className="trend">↑ 2.5%</span>
              </div>
              <div className="stat-number">100</div>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <span>Students</span>
                <span className="trend">↑ 5.2%</span>
              </div>
              <div className="stat-number">42,000</div>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <span>Teachers</span>
                <span className="trend">↑ 1.8%</span>
              </div>
              <div className="stat-number">1,240</div>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <span>Success Rate</span>
                <span className="trend">↑ 3.1%</span>
              </div>
              <div className="stat-number">98%</div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE NMC */}
        <section className="why-section">
          <div className="section-center">
            <h2 className="section-title">Why Choose NMC Schools?</h2>
            <p className="section-desc">Excellence in Every Classroom</p>
          </div>

          <div className="features-3x2">
            <div className="feature-box">
              <div className="feature-icon-box orange">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h4>Digital Classrooms</h4>
              <p>Interactive smart boards and tablets for modern education</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box orange">
                <svg width="32" height="32" viewBox="0 0 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h4>Sports Facilities</h4>
              <p>Multi-purpose playgrounds and sports activities</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box orange">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h4>Arts & Cultural</h4>
              <p>Dedicated sessions for music, dance and cultural activities</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box orange">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M3 11l19-9-9 19-2-8-8-2z"></path>
                </svg>
              </div>
              <h4>Mid-Day Meal Program</h4>
              <p>Nutritious meals served every day</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box orange">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h4>Scholarship Support</h4>
              <p>Financial aid for meritorious students</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon-box orange">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4>Eco-Friendly Campus</h4>
              <p>Green initiatives for sustainable education</p>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="results-section">
          <div className="results-header">
            <div>
              <h2 className="section-title">Our NMC School Results</h2>
              <p className="section-desc">Top Performing Schools in 2022-23</p>
            </div>
            <button className="btn-blue">View All Results →</button>
          </div>

          <div className="results-4col">
            <div className="result-card">
              <div className='rank-badge'>1</div>
              <img className="avatar-img" src="priya.jpg" alt="Priya" />
              <h4>Priya Sharma</h4>
              <p>Shala No. 42</p>
              <div className="score">98.1%</div>
            </div>
            <div className="result-card">
              <div className='rank-badge'>2</div>
              <img className="avatar-img" src="rohanpatil.jpg" alt="Rohan" />
              <h4>Rohan Patil</h4>
              <p>Shala No. 12</p>
              <div className="score">96.8%</div>
            </div>
            <div className="result-card">
              <div className='rank-badge'>3</div>
              <img className="avatar-img" src="mahi.jpg" alt="Mahi" />
              <h4>Mahi More</h4>
              <p>NMC CIDCO</p>
              <div className="score">96.2%</div>
            </div>
            <div className="result-card">
              <div className='rank-badge'>4</div>
              <img className="avatar-img" src="prashant.jpg" alt="Prashant" />
              <h4>Prashant Shinde</h4>
              <p>Shala No. 8</p>
              <div className="score">93.2%</div>
            </div>
          </div>
        </section>

        {/* NMC EDUCATION DEPARTMENT - TABLE */}
        <section className="dept-section">
          <div className="section-center">
            <h2 className="section-title">NMC Education Department</h2>
            <p className="section-desc">Administrative Structure • Departments & Responsibilities</p>
          </div>

          <div className="table-card">
            <table className="dept-table">
              <thead>
                <tr>
                  <th>DEPARTMENT NAME</th>
                  <th>RESPONSIBILITY</th>
                  <th>HEAD OFFICER</th>
                  <th>CONTACT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primary Education</td>
                  <td>Class 1-8 schools, teacher training, and administration.</td>
                  <td>Shri S. M. Deshpande</td>
                  <td><a href="mailto:primary@nmc.gov.in">primary@nmc.gov.in</a></td>
                </tr>
                <tr>
                  <td>Secondary Education</td>
                  <td>Class 9-12 schools, secondary school staff and infra.</td>
                  <td>Smt. Sunita Gavit</td>
                  <td><a href="mailto:secondary@nmc.gov.in">secondary@nmc.gov.in</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* NMC SCHOOL COMMITTEE */}
        <section className="committee-section">
          <div className="section-center">
            <h2 className="section-title">NMC School Committee</h2>
            <p className="section-desc">Governing Body - Nashik Municipal Corporation Education Board</p>
          </div>

          <div className="committee-3col">
            <div className="committee-card">
              <img className="committee-img" src="ad.jpg" alt="Adv Suresh" />
              <h4>Adv. Suresh Jagtap</h4>
              <p>Chairman</p>
            </div>
            <div className="committee-card">
              <img className="committee-img" src="meena.jpg" alt="Meena" />
              <h4>Meena Bhalerao</h4>
              <p>Vice Chairperson</p>
            </div>
            <div className="committee-card">
              <img className="committee-img" src="mhi maval.jpg" alt="Heena" />
              <h4>Heena Thakare</h4>
              <p>Education Officer</p>
            </div>
          </div>
        </section>

        {/* GALLERY OF EXCELLENCE */}
        <section className="gallery-section">
          <div className="gallery-header">
            <h2 className="section-title">Gallery of Excellence</h2>
            <div className="gallery-arrows">
              <button className="arrow-btn">←</button>
              <button className="arrow-btn">→</button>
            </div>
          </div>

          <div className="gallery-2col">
            <div className="gallery-img">
              <img src="gallery.jpg" alt="Students" />
            </div>
            <div className="gallery-img">
              <img src="gallery2.jpg" alt="Classroom" />
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-wrap">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <span className="logo-circle-small">🎓</span>
                <h4>NMC Shikshan Portal</h4>
              </div>
              <p>Empowering the future of Nashik through quality education, digital innovation and inclusive growth.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#">Home</a>
              <a href="#">Schools</a>
              <a href="#">About</a>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>NMC Headquarters, Nashik</p>
              <p>+91 253 257 0000</p>
              <p><a href="mailto:education@nmc.gov.in">education@nmc.gov.in</a></p>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <span>📘</span>
                <span>📷</span>
                <span>🐦</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App