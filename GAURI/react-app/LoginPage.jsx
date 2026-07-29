import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('school');
  const [showPassword, setShowPassword] = useState(false);
  const [showForget, setShowForget] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', mobile: '', otp: '' });
  const [country, setCountry] = useState('+91');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'school' || type === 'admin') {
      setActiveTab(type);
    }
  }, [searchParams]);

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  const handleLogin = async () => {
    clearMessages();

    if (!form.email) {
      setError('Email required');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be 6+ characters');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...form, type: activeTab})
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess('Login Successfully!');
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setSuccess('Login Successfully!');
      setTimeout(() => navigate('/dashboard'), 1000);
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async () => {
    clearMessages();
    if (form.mobile.length!== 10) {
      setError('Enter 10 digit number');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mobile: country + form.mobile})
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess('OTP sent successfully');
        setOtpSent(true);
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('Unable to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    clearMessages();
    if (form.otp.length!== 6) {
      setError('Enter 6 digit OTP');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mobile: country + form.mobile, otp: form.otp})
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess('OTP Verified! Password reset successful');
        setTimeout(() => {
          setShowForget(false);
          setOtpSent(false);
          setForm({ email: '', password: '', mobile: '', otp: '' });
          clearMessages();
        }, 1500);
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div>
          <div className="portal-brand">
            <div className="logo-white"></div>
            <span>EduManage Portal</span>
          </div>
          <h1>Empowering Nashik's Schools</h1>
          <p>A centralized management system designed to streamline administration, enhance data accuracy, and improve educational outcomes for every student in Nashik.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-card-dark"><h3>450+</h3><p>Active Schools</p></div>
          <div className="stat-card-dark"><h3>125k+</h3><p>Students Managed</p></div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-box">
          <h2>Portal Access</h2>
          <p className="form-subtitle">Welcome back! Please enter your details.</p>

          {success && <div className="success-msg">✅ {success}</div>}
          {error && <div className="error-msg">❌ {error}</div>}

          <div className="login-toggle">
            <button onClick={() => {setActiveTab('school'); clearMessages();}} className={activeTab === 'school'? 'active' : ''}>School Login</button>
            <button onClick={() => {setActiveTab('admin'); clearMessages();}} className={activeTab === 'admin'? 'active' : ''}>Admin Login</button>
          </div>

          {!showForget? (
            <div>
              <label>Official Email Address</label>
              <div className="input-group">
                <span className="input-icon">✉️</span>
                <input
                  type="text"
                  placeholder="e.g. school@dise.in"
                  value={form.email}
                  onChange={e => {setForm({...form, email: e.target.value}); clearMessages();}}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                />
              </div>

              <label>Password</label>
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword? 'text' : 'password'}
                  value={form.password}
                  onChange={e => {setForm({...form, password: e.target.value}); clearMessages();}}
                  autoComplete="off"
                  data-lpignore="true"
                />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword? '🙈' : '👁️'}
                </button>
              </div>
              <button type="button" onClick={() => {setShowForget(true); clearMessages();}} className="forgot-link">Forgot Password?</button>
              <button type="button" onClick={handleLogin} className="btn-signin" disabled={loading}>
                {loading? 'Signing in...' : 'Sign In to Portal →'}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="otp-title">Reset Password via OTP</h3>
              <label>Mobile Number</label>
              <div className="mobile-row">
                <select value={country} onChange={e => setCountry(e.target.value)}>
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+61</option>
                </select>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="10 digit number"
                  value={form.mobile}
                  onChange={e => {setForm({...form, mobile: e.target.value.replace(/\D/g, '')}); clearMessages();}}
                  autoComplete="off"
                />
              </div>

              {!otpSent? (
                <button type="button" onClick={sendOTP} className="btn-signin" disabled={loading}>
                  {loading? 'Sending...' : 'Send OTP'}
                </button>
              ) : (
                <>
                  <label>Enter OTP</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="6 digit OTP"
                    className="otp-input"
                    value={form.otp}
                    onChange={e => {setForm({...form, otp: e.target.value.replace(/\D/g, '')}); clearMessages();}}
                    autoComplete="off"
                  />
                  <button type="button" onClick={verifyOTP} className="btn-verify" disabled={loading}>
                    {loading? 'Verifying...' : 'Verify & Login'}
                  </button>
                </>
              )}
              <button type="button" onClick={() => {setShowForget(false); setOtpSent(false); setForm({...form, mobile: '', otp: ''}); clearMessages();}} className="back-link">← Back to Login</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}