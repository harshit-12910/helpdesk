// Signin.jsx (Updated Forgot Password Link)
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (username && password) {
      console.log("Attempting login with:", { username, password });
      navigate("/dashboard");
    } else {
      setErrorMessage("Please enter both username and password.");
    }
  };

  // Function to handle navigation to Sign Up page
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  // New function to handle navigation to Forgot Password page
  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    navigate("/forgot-password"); // Navigate to the /forgot-password route
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

          {/*
            Forgot password link:
            - **CRITICAL FIX**: Changed `href="/forgot-password"` to `onClick={handleForgotPasswordClick}` for robust navigation.
          */}
          <a
            href="#" // Use # as href when onClick handles navigation
            onClick={handleForgotPasswordClick}
            className="absolute top-[555px] left-[214px] text-[#EA0000] text-[20px] w-[151px] h-[23px] cursor-pointer"
          >
            Forgot password
          </a>

          {/*
            Sign Up link:
            - This was already updated in the previous step.
          */}
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
