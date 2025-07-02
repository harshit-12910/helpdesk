import { useState } from "react";
import Input from "./Input"; 
import Button from "./Button"; 
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Sending password reset link to:", email);
      alert("If an account with that email exists, a password reset link has been sent!");
      navigate("/signin");
    } else {
      alert("Please enter your email address.");
    }
  };

  const handleSignInClick = (e) => {
    e.preventDefault(); 
    navigate("/signin"); 
  };

  return (
    <div className="flex items-center justify-center h-screen primary-background">
      <div className="bg-[rgba(239,237,237,0.5)] w-[1000px] h-[700px] relative">
        <form onSubmit={handleSubmit} className="absolute inset-0">
          <p className="absolute top-[151px] left-[246px] w-[508px] h-[84px] text-center text-[24px] font-normal text-[#000000] leading-normal">
            Don't worry, Enter your email below and we will send you a link to change password.
          </p>

          <Input
            className="absolute top-[277px] left-[199px] h-[73px] w-[601px]"
            placeholder="Email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            className="bg-[#03CC17] absolute top-[421px] left-[339px] w-[321px] h-[71px]"
          >
            Submit
          </Button>

          <Button
            type="button" 
            onClick={handleSignInClick}
            className="bg-[#0769DC] absolute top-[523px] left-[339px] w-[321px] h-[71px]"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
