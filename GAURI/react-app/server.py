from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import time

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# OTP store - 5 min tak valid
otp_store = {}
OTP_VALID_SECONDS = 300

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"message": "Invalid request"}), 400

    email = data.get('email', '').strip()
    password = data.get('password', '')
    login_type = data.get('type', 'school')

    if not email:
        return jsonify({"message": "Email required"}), 400
    if len(password) < 6:
        return jsonify({"message": "Password must be 6+ characters"}), 400

    # TODO: Yahan DB se user check karna hai
    return jsonify({
        "message": f"{login_type.capitalize()} login successful",
        "token": "jwt-token-demo",
        "user": {"email": email, "role": login_type}
    }), 200

@app.route('/api/send-otp', methods=['POST'])
def send_otp():
    data = request.get_json()
    if not data or 'mobile' not in data:
        return jsonify({"message": "Mobile number required"}), 400

    mobile = data['mobile'].strip()

    # Mobile validation: +91 + 10 digit
    if not mobile.startswith('+') or len(mobile) < 12:
        return jsonify({"message": "Invalid mobile number. Use format: +911234567890"}), 400

    # Generate 6 digit OTP
    otp = str(random.randint(100000, 999999))
    otp_store[mobile] = {"otp": otp, "time": time.time()}

    # TEST MODE: OTP console me print karo, SMS mat bhejo
    print(f"\n========== TEST OTP ==========")
    print(f"Mobile: {mobile}")
    print(f"OTP: {otp}")
    print(f"Valid for: {OTP_VALID_SECONDS // 60} minutes")
    print(f"==============================\n")

    return jsonify({
        "message": "OTP sent successfully",
        "dev_note": "Check server console for OTP"
    }), 200

@app.route('/api/verify-otp', methods=['POST'])
def verify_otp():
    data = request.get_json()
    if not data:
        return jsonify({"message": "Invalid request"}), 400

    mobile = data.get('mobile', '').strip()
    otp = data.get('otp', '').strip()

    if not mobile or not otp:
        return jsonify({"message": "Mobile and OTP required"}), 400

    stored = otp_store.get(mobile)
    if not stored:
        return jsonify({"message": "OTP not found. Please request again"}), 400

    # Check expiry
    if time.time() - stored["time"] > OTP_VALID_SECONDS:
        del otp_store[mobile]
        return jsonify({"message": "OTP expired. Please request again"}), 400

    # Check OTP match
    if stored["otp"] == otp:
        del otp_store[mobile] # OTP use ho gaya, delete kar do
        print(f"OTP Verified for {mobile}")
        return jsonify({
            "message": "OTP verified, login success",
            "token": "jwt-token-demo",
            "user": {"mobile": mobile}
        }), 200

    return jsonify({"message": "Invalid OTP"}), 400

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        "status": "ok",
        "mode": "TEST MODE - OTP in console",
        "msg91": "disabled"
    }), 200


    app.run(port=5000, debug=True, host='0.0.0.0')