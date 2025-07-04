// components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  BarChart, LifeBuoy, Users, Star
} from 'lucide-react';

// Your existing StatCard component
const StatCard = ({ title, value, bg, textColor }) => (
  <div className={`h-70 p-6 rounded-[20px] shadow-xl ${bg} ${textColor} flex flex-col justify-start items-start text-left`}>
    <h3 className="text-lg font-semibold mb-2 text-[#000000]">{title}</h3>
    <p className="text-[80px] font-bold leading-none text-[#05386B]">{value}</p>
  </div>
);

export default function Dashboard() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserRole(user.role);
      } catch (e) {
        console.error("Failed to parse user from localStorage in Dashboard:", e);
        setUserRole(null);
      }
    }
  }, []);

  const statCardsData = [
    { title: "Total Tickets", value: "12", bg: "bg-[#2F82FF]", text: "text-[#05386B]" },
    { title: "Total Solved", value: "08", bg: "bg-[#0BFF68]", text: "text-[#05386B]" },
    { title: "Total Awaiting Approval", value: "02", bg: "bg-[#FE594E]", text: "text-[#05386B]"},
    { title: "Total In Progress", value: "02", bg: "bg-[#FCFF6C]", text: "text-[#05386B]" },
  ];

  return (
    <div className="flex flex-col items-center w-full p-8">
      <h2 className="text-[36px] font-bold text-gray-800 mb-6 text-center">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-8">
        {statCardsData.map((card, index) => (
          <StatCard key={index} title={card.title} value={card.value} bg={card.bg} textColor={card.text} />
        ))}
      </div>

      {userRole === 'admin' && (
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
          {/* Left Side: Bar Graph Box */}
          <div
            className="bg-[#55D6C2] rounded-lg shadow-lg p-8 flex items-center justify-center"
            style={{ width: '539px', height: '420px' }}
          >
            <div className="flex flex-col items-center text-[#05386B]">
              <BarChart size={200} strokeWidth={1.5} />
            </div>
          </div>

          {/* Right Side Column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Right Big Box: Technical Support, Operation Team */}
            <div
              className="bg-[#55D6C2] rounded-lg shadow-lg p-6 flex-grow flex items-center justify-around" // Changed from flex-col to flex-row here
              style={{ width: '539px', height: '280px' }}
            >
              {/* Technical Support Section */}
              <div className="text-center flex-1"> {/* flex-1 to make them share space */}
                <LifeBuoy size={64} className="text-[#000000] mb-2 mx-auto" />
                <h3 className="text-xl font-bold text-[#000000]">3</h3>
                <h3 className="text-xl font-bold text-[#000000]">Technical Support</h3>
              </div>
              {/* Operation Team Section */}
              <div className="text-center flex-1"> {/* flex-1 to make them share space */}
                <Users size={64} className="text-[#000000] mb-2 mx-auto" />
                <h3 className="text-xl font-bold text-[#000000]">4</h3>
                <h3 className="text-xl font-bold text-[#000000]">Operation Team</h3>
              </div>
            </div>

            {/* Right Small Box: Customer Feedback */}
            <div
              className="bg-[#55D6C2] rounded-lg shadow-lg p-6 text-center border border-gray-200"
              style={{ width: '539px', height: '128px' }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">Customer Feedback</h3>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-white fill-white" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}