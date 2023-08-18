import { signInWithGoogle } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useNavigate } from 'react-router-dom'
import '../App.css'
function Login() {

  const navigate = useNavigate();
  const signin = async () => {
    let userDetails = await signInWithGoogle();
    console.log(userDetails);
    if(!userDetails) {
        localStorage.setItem('userDetails', null);
        navigate('/');
        return
    } else {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/dashboard');
    }

  } 
  return (
    <div className="login-page">
        <h2 className="text-primary">Login</h2>
        <h4 className="text-secondary">to get started</h4>
        <GoogleLoginButton style={{width: '15rem', height: '3rem', fontSize: 14, marginTop: 20}} onClick={signin} />
    </div>
  )
}

export default Login