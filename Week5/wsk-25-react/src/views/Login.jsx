import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleForm}>
        {showLoginForm ? 'Switch to Register' : 'Switch to Login'}
      </button>
      {showLoginForm ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Login;
