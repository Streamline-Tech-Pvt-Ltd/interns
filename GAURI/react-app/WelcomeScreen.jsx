import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <div className="welcome-logo">
          <div className="logo-box-blue"></div>
          <span>NMC Shikshan Portal</span>
        </div>
      </header>

      <div className="welcome-main">
        <h1 className="welcome-title">Welcome to NMC Shikshan Portal</h1>
        <p className="welcome-subtitle">
          Access the centralized Nashik Municipal Corporation educational management system
        </p>
        <span className="badge-secure">SECURE | RELIABLE | EFFICIENT</span>

        <div className="login-cards">
          <div className="login-card">
            <div className="card-icon">👥</div>
            <h2>School Login</h2>
            <p>For Headmasters, Teachers, and School administrative staff to manage student records, attendance, and school operations.</p>
            <Link to="/login?type=school" className="card-link">Proceed to School Portal →</Link>
          </div>

          <div className="login-card">
            <div className="card-icon">🛡️</div>
            <h2>Admin Login</h2>
            <p>For NMC Education Department officials to oversee educational programs, policies, and performance analytics.</p>
            <Link to="/login?type=admin" className="card-link">Proceed to Dashboard →</Link>
          </div>
        </div>

        <p className="support-text">
          Having issues logging in? <a href="#">Contact IT Support</a>
        </p>
        <p className="footer-copy">© 2024 Nashik Municipal Corporation. All rights reserved.</p>
      </div>
    </div>
  );
}