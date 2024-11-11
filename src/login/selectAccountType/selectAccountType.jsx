import { useState } from "react";
import Content from "../../components/content/content";
import "./selectAccountType.css";
import User03 from "./03_user.png";
import User07 from "./07_user-search-01.png";
import Vector from "./Vector.png";
import Vector1 from "./Vector (1).png";
import ClockIcon from "./clock-01.png"; 
import EyeIcon from "./Eye.png";  
import EyeOffIcon from "./02_view-off.png"; 
import Flag from "./Flag.png";   

const SelectAccountType = () => {
  const [selectedAccountType, setSelectedAccountType] = useState(null);
  const [buttonImage, setButtonImage] = useState(Vector);
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [personalInfo, setPersonalInfo] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleCardClick = (type) => {
    setSelectedAccountType(type);
    setButtonImage(Vector1);
  };

  const handleNextClick = () => {
    if (step === 1 && selectedAccountType) setStep(2);
    else if (step === 2 && phoneNumber) setStep(3);
    else if (step === 3 && verificationCode) setStep(4);
  };

  const handleCompleteClick = () => {
    if (personalInfo.name && personalInfo.email && personalInfo.password) {
      console.log("Registration complete");
    }
  };

  return (
    <div className="contentSelectAccountType">
      <Content />
      <div className="Main-Continar">
        <div className="Header">
          <div className="Steps">
            <div
              className="line13"
              style={{ backgroundColor: "#3C97AF" }}
            ></div>
            <div
              className="line12"
              style={{
                background: step === 2
                  ? "linear-gradient(90deg, #3C97AF 50%, #EBEBEB 50%)"
                  : step >= 3
                  ? "#3C97AF"
                  : "#EBEBEB",
              }}
            ></div>
            <div
              className="line14"
              style={{ backgroundColor: step === 4 ? "#3C97AF" : "#EBEBEB" }}
            ></div>
          </div>
          <div className="getStarted">
            {step === 1 && (
              <>
                <h1>Let’s Get started!</h1>
                <p>How do you plan to use this platform</p>
              </>
            )}
            {step === 2 && (
              <>
                <h1>Enter Your Phone Number</h1>
                <p>Enter your phone number to verify your identity and the validity of your number to safely activate your account on the platform.</p>
              </>
            )}
            {step === 3 && (
              <>
                <h1>Verify Your Code</h1>
                <p>Enter the verification code sent to your phone</p>
              </>
            )}
            {step === 4 && (
              <>
                <h1>Enter Your Information</h1>
                <p>Please enter your personal information to complete the registration process.</p>
              </>
            )}
          </div>
          <div className="signUpFrom">
            {step === 1 && (
              <div className="SelectAccountType-F-C">
                <div
                  className={`accountTypeCardFreelancer ${selectedAccountType === 'freelancer' ? 'selected' : ''}`}
                  onClick={() => handleCardClick('freelancer')}
                >
                  <img src={User03} alt="Freelancer" />
                  <h1>Freelancer</h1>
                  <p>I’m a freelancer ready to work for projects</p>
                </div>
                <div
                  className={`accountTypeCardClient ${selectedAccountType === 'client' ? 'selected' : ''}`}
                  onClick={() => handleCardClick('client')}
                >
                  <img src={User07} alt="Client" />
                  <h1>Client</h1>
                  <p>I’m a client searching for talented freelancers</p>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="phoneNumberInput">
                <div className="countryCode">+964 <img src={Flag} alt="Country Flag" /></div> 
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
            )}
            {step === 3 && (
              <div className="verificationInput">
                <div className="verificationFields">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={verificationCode[index] || ""}
                      onChange={(e) => {
                        const newCode = verificationCode.split("");
                        newCode[index] = e.target.value;
                        setVerificationCode(newCode.join(""));
                      }}
                      className="verificationBox"
                    />
                  ))}
                </div>
                <div className="timer">
                  <img src={ClockIcon} alt="Clock Icon" />
                  <span>00:59</span>
                </div>
                <p>Didn’t receive a message? <span>Resend</span></p>
              </div>
            )}
            {step === 4 && (
              <div className="personalInfoInput">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={personalInfo.name}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <div className="passwordInput">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={personalInfo.password}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, password: e.target.value })}
                    />
                    <img
                      src={showPassword ? EyeOffIcon : EyeIcon}
                      alt="Toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </div>
                </div>
              </div>
            )}
            <button
              className={`primaryButton ${((step === 1 && selectedAccountType) || (step === 2 && phoneNumber) || (step === 3 && verificationCode) || (step === 4 && personalInfo.name && personalInfo.email && personalInfo.password)) ? 'active' : ''}`}
              onClick={step === 4 ? handleCompleteClick : handleNextClick}
            >
              {step === 1 ? "Next" : step === 2 ? "Send verification code" : step === 3 ? "Verify" : "Complete registration"}
              <img src={buttonImage} alt="Vector" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountType;
