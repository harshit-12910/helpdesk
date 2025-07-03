import React, { useState } from 'react';
import { User, Star, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  const navigate = useNavigate(); 

  const user = {
    username: 'JohnDoe',
    contactNumber: '123-456-7890',
    email: 'john.doe@example.example',
    department: 'IT Support',
  };

  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", { feedbackText, rating });
    alert(`Feedback submitted! Rating: ${rating} stars. Message: "${feedbackText}"`);
    setFeedbackText('');
    setRating(0);
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full max-w-5xl px-8 flex justify-start">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-4">User Profile</h1>
      </div>

      <div className="bg-[#55D6C2] p-8 rounded-[20px] shadow-xl w-full max-w-5xl min-h-[600px] flex items-start justify-start relative">
        <div className="pl-8 flex flex-col md:flex-row gap-6 w-full pt-2 justify-between">

          <div className="bg-white p-6 rounded-[20px] shadow-md flex flex-col items-center justify-start text-center md:w-3/6 h-[350px] ml-[-16px]">
            <div className="flex items-center justify-center mb-4 w-full relative">
              <div className="bg-gray-300 rounded-full p-4">
                <User size={64} className="text-black" />
              </div>
              <Pencil
                size={24}
                className="text-gray-500 hover:text-gray-700 cursor-pointer absolute top-1 right-1 md:right-2"
                onClick={handleEditProfile} 
              />
            </div>

            <div className="w-full text-left space-y-3 text-gray-700">
              <p className="font-semibold text-lg">Username: <span className="font-normal">{user.username}</span></p>
              <p className="font-semibold text-lg">Contact Number: <span className="font-normal">{user.contactNumber}</span></p>
              <p className="font-semibold text-lg">Email: <span className="font-normal">{user.email}</span></p>
              <p className="font-semibold text-lg">Department: <span className="font-normal">{user.department}</span></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[20px] shadow-md flex flex-col items-center md:w-1/3 h-[340px]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Give Your Feedback</h2>
            <textarea
              className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] mb-6 h-[60px] resize-y"
              placeholder="Type your feedback here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <div className="flex space-x-1 mb-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Star
                  key={index}
                  size={32}
                  className={`cursor-pointer ${
                    index <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                  } transition-colors duration-200`}
                  onClick={() => setRating(index)}
                />
              ))}
            </div>
            <button
              onClick={handleSubmitFeedback}
              className="w-full md:w-auto px-8 py-3 bg-[#55D6C2] text-white font-bold rounded-md shadow-lg hover:bg-[#40B0A0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;