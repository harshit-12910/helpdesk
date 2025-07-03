import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const EditProfilePage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(''); 
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [realName, setRealName] = useState('');
  const [accessLevel, setAccessLevel] = useState(''); 
  const [projectAccessLevel, setProjectAccessLevel] = useState(''); 

  const handleEditAccountClick = () => {
    
    alert("Edit Account button clicked! (This page is already for editing)");
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }
    console.log("Updating User with:", {
      username,
      currentPassword,
      newPassword,
      email,
      realName,
      accessLevel,
      projectAccessLevel,
    });
    alert('User Profile Updated Successfully!');
    
  };

  return (
    <div className="w-full flex flex-col items-center justify-start bg-white p-6">


      <div className="w-full max-w-4xl flex flex-col text-left mb-8">

        <h1 className="text-4xl font-bold text-black mb-4">User Profile</h1>
        <button
          onClick={handleEditAccountClick}
          className="w-fit px-8 py-3 bg-[#55D6C2] text-white font-bold rounded-md shadow-lg hover:bg-[#40B0A0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] focus:ring-offset-2"
        >
          Edit Account
        </button>
      </div>

      <div className="w-[75%] max-w-2xl  bg-gray-100 p-4 rounded-[20px] shadow-lg">


        <form onSubmit={handleUpdateUser} className="space-y-4">

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="username" className="w-1/3 font-semibold text-gray-700 text-lg">Username:</label>
            <input
              type="text"
              id="username"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="currentPassword" className="w-1/3 font-semibold text-gray-700 text-lg">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="newPassword" className="w-1/3 font-semibold text-gray-700 text-lg">New Password:</label>
            <input
              type="password"
              id="newPassword"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="confirmPassword" className="w-1/3 font-semibold text-gray-700 text-lg">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="email" className="w-1/3 font-semibold text-gray-700 text-lg">Email:</label>
            <input
              type="email"
              id="email"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="realName" className="w-1/3 font-semibold text-gray-700 text-lg">Real Name:</label>
            <input
              type="text"
              id="realName"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
            />
          </div>

          <div className="flex items-center border-b border-gray-200 pb-1">
            <label htmlFor="accessLevel" className="w-1/3 font-semibold text-gray-700 text-lg">Access Level:</label>
            <input
              type="text" 
              id="accessLevel"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={accessLevel}
              onChange={(e) => setAccessLevel(e.target.value)}
            />
          </div>

          <div className="flex items-center pb-1">
            <label htmlFor="projectAccessLevel" className="w-1/3 font-semibold text-gray-700 text-lg">Project Access Level:</label>
            <input
              type="text" 
              id="projectAccessLevel"
              className="w-2/3 p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#55D6C2] text-gray-800"
              value={projectAccessLevel}
              onChange={(e) => setProjectAccessLevel(e.target.value)}
            />
          </div>

          <div className="w-full text-left pt-1">
            <button
              type="submit"
              className="px-8 py-3 bg-[#55D6C2] text-white font-bold rounded-md shadow-lg hover:bg-[#40B0A0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] focus:ring-offset-2"
            >
              Update User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;