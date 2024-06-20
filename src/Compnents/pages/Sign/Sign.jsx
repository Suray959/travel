import React, { useState } from 'react';
import style from '../Sign/Sign.module.css';
import SRY from '../../image/SRY.jpg';

function Sign() {
  const [HeadVisible, setHeadVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignClick = () => {
 
    if (formData.fullName && formData.email && formData.password) {
      setHeadVisible(true);

      setFormData({ fullName: '', email: '', password: '' });
    } else {
 
      setAlertMessage('Melumatlari tam doldurun');
    }
  };

  const handleOkClick = () => {
    setHeadVisible(false);
  };

  return (
    <div className={style.body}>
      {alertMessage && (
        <div className={style.alert}>
          <p>{alertMessage}</p>
          <button onClick={() => setAlertMessage('')} >Close</button>
        </div>
      )}

      {!HeadVisible ? (
        <div className={style.head}>
          <div className={style.comment}>
            <label>Write comment about us</label>
            <input type="text" />
            <button>Send me</button>
          </div>
          <div className={style.sign}>
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder='Enter your full name'/>
            
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter your mail'/>
            
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder='Enter your password'/>
            <div className={style.check}>
              <input type="checkbox" name="" id="" />
              <h4>I agree with Terms of Use and Privacy Policy</h4>
            </div>
            <button onClick={handleSignClick}>Sign Up</button>
          </div>
        </div>
      ) : (
        <div className={style.thank}>
          <h4>Thank you for joining us</h4>
          <button onClick={handleOkClick}>Ok</button>
        </div>
      )}
    </div>
  );
}

export default Sign;
