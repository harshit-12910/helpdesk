import { useState } from "react";
import Input from "./Input";
import Button from "./Button"; 
import { useNavigate } from "react-router-dom";
import { mockLogin } from '../auth/authService';

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    if (!username || !password) {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    try {
      const result = await mockLogin(username, password);
      if (result.success) {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        navigate("/dashboard");
      } else {
        setErrorMessage(result.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An unexpected error occurred during login.");
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate("/forgot-password");
  };

  return (
    <div className="flex items-center justify-center h-screen primary-background">
      <div className="bg-[rgba(239,237,237,0.5)] w-[1000px] h-[700px] relative">
        <form onSubmit={handleLogin} className="absolute inset-0">
          <h2 className="absolute top-[81px] left-[199px] w-[601px] h-[59px] flex items-center justify-center text-[48px] font-bold italic leading-[59px] text-center">
            Helpdesk System
          </h2>

          <Input
            className="absolute top-[201px] left-[199px] h-[73px] w-[601px]"
            placeholder="Username"
            label="Username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); setErrorMessage(""); }}
          />

          <Input
            className="absolute top-[311px] left-[199px] h-[73px] w-[601px]"
            placeholder="Password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setErrorMessage(""); }}
          />

          <Button
            type="submit"
            className="absolute top-[421px] left-[339px] w-[321px] h-[71px]"
          >
            Sign In
          </Button>

          {errorMessage && (
            <p className="absolute top-[500px] left-[199px] w-[601px] text-center text-red-500 text-sm">
              {errorMessage}
            </p>
          )}

          <a
            href="#"
            onClick={handleForgotPasswordClick}
            className="absolute top-[555px] left-[214px] text-[#EA0000] text-[20px] w-[151px] h-[23px] cursor-pointer"
          >
            Forgot password
          </a>

          <a
            href="#"
            onClick={handleSignUpClick}
            className="absolute top-[549px] left-[647px] text-[#000000] text-[30px] w-[151px] h-[23px] cursor-pointer"
          >
            Sign up
          </a>
        </form>
      </div>
    </div>
  );
}