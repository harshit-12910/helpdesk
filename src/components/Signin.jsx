import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/dashboard");
    }
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
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            className="absolute top-[311px] left-[199px] h-[73px] w-[601px]"
            placeholder="Password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="absolute top-[421px] left-[339px] w-[321px] h-[71px]" // Ensure h-[71px] is applied if Button.jsx doesn't enforce it rigidly
          >
            Sign In
          </Button>
          <a href="/forgot-password" className="absolute top-[555px] left-[214px] text-[#EA0000] text-[20px] w-[151px] h-[23px]">
            Forgot password
          </a>
          <a href="/signup" className="absolute top-[549px] left-[647px] text-[#000000] text-[30px] w-[151px] h-[23px]">
            Sign up
          </a>
        </form>
      </div>
    </div>
  );
}