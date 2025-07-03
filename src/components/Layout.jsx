import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Bell, User, LogOut, LayoutDashboard, Ticket, ClipboardList, ChevronRight } from 'lucide-react';

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

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedSidebarItem, setSelectedSidebarItem] = useState(() => {
    if (location.pathname.includes('dashboard')) return 'dashboard';
    if (location.pathname.includes('new-ticket')) return 'newTicket';
    if (location.pathname.includes('my-ticket')) return 'myTicket';
    if (location.pathname.includes('profile')) return '';
    return 'dashboard';
  });

  useEffect(() => {
    if (location.pathname.includes('dashboard')) setSelectedSidebarItem('dashboard');
    else if (location.pathname.includes('new-ticket')) setSelectedSidebarItem('newTicket');
    else if (location.pathname.includes('my-ticket')) setSelectedSidebarItem('myTicket');
    else setSelectedSidebarItem('');
  }, [location.pathname]);

  const handleUserIconClick = () => {
    navigate('/profile');
    setSelectedSidebarItem('');
  };

  const handleBellClick = () => {
    alert('Notifications would appear here!');
  };

  const handleLogoutClick = () => {
    navigate('/signin');
  };

  const handleSidebarClick = (item, path) => {
    setSelectedSidebarItem(item);
    navigate(path);
  };

  const NAVBAR_HEIGHT_PX = 72; 
  const SIDEBAR_WIDTH_PX = 256; 
  const FOOTER_HEIGHT_PX = 48; 

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] font-inter">

      <nav
        className={`flex items-center justify-between bg-[#55D6C2] px-6 py-3 shadow-md fixed top-0 left-0 w-full z-50`}
        style={{ height: `${NAVBAR_HEIGHT_PX}px` }} 
      >
        <h1 className="text-[48px] font-bold italic text-[#FFFFFF]">Helpdesk</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-[#000000] rounded-full p-1">
            <span className="px-3 py-1 rounded-full text-white text-sm font-medium">BM</span>
            <span className="px-3 py-1 rounded-full bg-[#55D6C2] text-gray-700 text-sm font-medium">BI</span>
          </div>
          <Bell className="text-[#000000] cursor-pointer hover:opacity-80 transition-opacity" size={22} onClick={handleBellClick} />
          <User
            className="text-[#000000] cursor-pointer hover:opacity-80 transition-opacity"
            size={22}
            onClick={handleUserIconClick}
          />
          <LogOut className="text-[#000000] cursor-pointer hover:opacity-80 transition-opacity" size={22} onClick={handleLogoutClick} />
        </div>
      </nav>

      <div className={`flex flex-1`} style={{ paddingTop: `${NAVBAR_HEIGHT_PX}px` }}>

        <aside
          className={`w-64 bg-gray-200 p-5 shadow-md fixed left-0 h-screen z-40 overflow-y-auto`}
          style={{ top: `${NAVBAR_HEIGHT_PX}px` }}
        >
          <ul className="space-y-3">
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              label="Dashboard"
              isActive={selectedSidebarItem === 'dashboard'}
              onClick={() => handleSidebarClick('dashboard', '/dashboard')}
            />
            <SidebarItem
              icon={<Ticket size={20} />}
              label="New Ticket"
              isActive={selectedSidebarItem === 'newTicket'}
              onClick={() => handleSidebarClick('newTicket', '/new-ticket')}
            />
            <SidebarItem
              icon={<ClipboardList size={20} />}
              label="My Ticket"
              isActive={selectedSidebarItem === 'myTicket'}
              onClick={() => handleSidebarClick('myTicket', '/my-ticket')}
            />
          </ul>
        </aside>

       
        <div className={`flex flex-col flex-1`} style={{ paddingLeft: `${SIDEBAR_WIDTH_PX}px` }}>

          
          <main
            className={`flex-1 p-8 overflow-y-auto`}
            style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT_PX}px - ${FOOTER_HEIGHT_PX}px)` }}
          >
            <Outlet />
          </main>

          <footer
            className={`bg-gray-800 text-white p-3 text-center text-sm w-full fixed bottom-0 z-50`}
            style={{ left: `${SIDEBAR_WIDTH_PX}px`, height: `${FOOTER_HEIGHT_PX}px` }}
          >
            <p>&copy; {new Date().getFullYear()} Helpdesk System. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}