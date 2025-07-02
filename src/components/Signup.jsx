import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && email && password) {
      console.log("Signing up with:", { username, email, password });
      navigate("/dashboard");
    } else {
      console.log("Please fill in all fields.");
    }
  };

  const handleSignInClick = (e) => {
    e.preventDefault(); 
    navigate("/signin"); 
  };

  return (
    <div className="flex items-center justify-center h-screen primary-background">
      <div className="bg-[rgba(239,237,237,0.5)] w-[1000px] h-[700px] relative">
        <form onSubmit={handleSignup} className="absolute inset-0">
          <h2 className="absolute top-[25px] left-[199px] w-[601px] h-[59px] flex items-center justify-center text-[48px] font-bold italic leading-[59px] text-center">
            Helpdesk System
          </h2>

          <p className="absolute top-[107px] left-[350px] w-[300px] text-center text-[30px] text-[#000000]">
            Sign up here
          </p>

          <Input
            className="absolute top-[173px] left-[199px] h-[73px] w-[601px]"
            placeholder="Username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            className="absolute top-[277px] left-[199px] h-[73px] w-[601px]"
            placeholder="Email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            className="absolute top-[371px] left-[199px] h-[73px] w-[601px]"
            placeholder="Password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            className="bg-[#296EF2] absolute top-[475px] left-[339px] w-[321px] h-[71px]"
          >
            Sign Up
          </Button>

          <a href="/forgot-password" className="absolute top-[577px] left-[199px] text-[#EA0000] text-[20px] w-[151px] h-[23px]">
            Forgot password
          </a>

          <a
            href="#"
            onClick={handleSignInClick}
            className="absolute top-[571px] left-[688px] text-[#000000] text-[30px] w-[91px] h-[35px] cursor-pointer"
          >
            Sign In
          </a>
        </form>
      </div>
    </div>
  );
}
