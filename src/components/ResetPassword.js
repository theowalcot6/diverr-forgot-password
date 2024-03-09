import './ResetPassword.css'
import { useState } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

function ResetPassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errormessage, setErrormessage] = useState('')
    const [successmessage, setSuccessmessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`https://diverr-backend-d85a42598f9a.herokuapp.com/api/reset-change-password`, { token, password, confirmPassword });
            setSuccessmessage("Password successfully changed. Please login to Diverr using your new password")
        } catch (error) {
            setErrormessage(error)
        }
    }

    const location = useLocation();
    let token = location.pathname;
    const partToRemove = '/reset-password/';
    token = token.replace(partToRemove, '');

    return (
      <>
      <div className="ResetPassword">
        <form onSubmit={handleSubmit} class='reset-password-form'>
          <h1>Diverr</h1>
            <p class='description'>Enter your new password below</p>
            <label>Password</label>
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {password === confirmPassword && password !== '' ? <button type="submit" class='reset-password-button'>Submit</button> : <button class='reset-password-disabled-button' disabled={true}>Submit</button>}
            {password !== confirmPassword && password !== '' && confirmPassword !== '' ? <p class='match'>Passwords must match!</p> : null}
            {errormessage ? <p>{errormessage.response.data.message}</p> : null}
            {successmessage ? <p className='message-response'>{successmessage}</p> : null}
        </form>
      </div>
      </>
    );
  }
  
  export default ResetPassword;