import React, { useState } from 'react';
import { Bell, User, LogOut, LayoutDashboard, Ticket, ClipboardList, ChevronRight } from 'lucide-react';

export default function Dashboard() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('dashboard');

  const statCardsData = [
    { title: "Total Tickets", value: "12", bg: "bg-[#2F82FF]", text: "text-[#05386B]" },
    { title: "Total Solved", value: "08", bg: "bg-[#0BFF68]", text: "text-[#05386B]" },
    { title: "Total Awaiting Approval", value: "02", bg: "bg-[#FE594E]", text: "text-[#05386B]"},
    { title: "Total In Progress", value: "02", bg: "bg-[#FCFF6C]", text: "text-[#05386B]" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-inter">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between bg-[#55D6C2] px-6 py-3 shadow-md">
        <h1 className="text-[48px] font-bold italic text-[#FFFFFF]">Helpdesk</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-[#000000] rounded-full p-1">
            <span className="px-3 py-1 rounded-full text-white text-sm font-medium">BM</span>
            <span className="px-3 py-1 rounded-full bg-[#55D6C2] text-gray-700 text-sm font-medium">BI</span>
          </div>
          <Bell className="text-[#000000] cursor-pointer" size={22} />
          <User className="text-[#000000] cursor-pointer" size={22} />
          <LogOut className="text-[#000000] cursor-pointer" size={22} />
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 p-5 shadow-md relative z-10">
          <ul className="space-y-3">
            <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" isActive={selectedSidebarItem === 'dashboard'} onClick={() => setSelectedSidebarItem('dashboard')} />
            <SidebarItem icon={<Ticket size={20} />} label="New Ticket" isActive={selectedSidebarItem === 'newTicket'} onClick={() => setSelectedSidebarItem('newTicket')} />
            <SidebarItem icon={<ClipboardList size={20} />} label="My Ticket" isActive={selectedSidebarItem === 'myTicket'} onClick={() => setSelectedSidebarItem('myTicket')} />
          </ul>
        </aside>

        {/* Main Content + Footer wrapper */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 p-8 overflow-auto">
            <h2 className="text-[36px] font-bold text-gray-800 mb-6 text-center">Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCardsData.map((card, index) => (
                <StatCard key={index} title={card.title} value={card.value} bg={card.bg} textColor={card.text} />
              ))}
            </div>
          </main>

          {/* Footer aligned to main content */}
          <footer className="bg-gray-800 text-white p-3 text-center text-sm w-full">
            <p>&copy; {new Date().getFullYear()} Helpdesk System. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

const SidebarItem = ({ icon, label, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`relative flex items-center p-3 rounded-md cursor-pointer transition-colors duration-200 ${
      isActive ? 'bg-white text-black font-semibold shadow-md' : 'hover:bg-white text-gray-700'
    }`}
  >
    {isActive && (
      <ChevronRight size={20} className="absolute left-0 ml-2 text-black" />
    )}
    <div className="ml-6 mr-3">{icon}</div>
    <span className="flex-grow">{label}</span>
  </li>
);

const StatCard = ({ title, value, bg, textColor }) => (
  <div className={`h-70 p-6 rounded-[20px] shadow-xl ${bg} ${textColor} flex flex-col justify-start items-start text-left`}>
    <h3 className="text-lg font-semibold mb-2 text-[#000000]">{title}</h3>
    <p className="text-[80px] font-bold leading-none text-[#05386B]">{value}</p>
  </div>
);
