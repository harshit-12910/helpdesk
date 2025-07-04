import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Bell, User, LogOut, LayoutDashboard, Ticket, ClipboardList, ChevronRight,
  Database, Settings, History, 
  Users, 
  LifeBuoy, 
  Settings as OperationalTeamIcon 
} from 'lucide-react';

import { mockLogout } from '../auth/authService';


const SidebarItem = ({ icon, label, isActive, onClick, className = '', isDummy = false }) => (
  <li
    onClick={isDummy ? null : onClick} 
    className={`relative flex items-center p-3 rounded-md transition-colors duration-200 ${
      isActive ? 'bg-white text-black font-semibold shadow-md' : 'hover:bg-white text-gray-700'
    } ${isDummy ? 'cursor-default text-gray-500 hover:bg-transparent' : 'cursor-pointer'} ${className}`}
  >
    {isActive && !isDummy && ( 
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
    const path = location.pathname;
    if (path.includes('dashboard')) return 'dashboard';
    if (path.includes('new-ticket')) return 'newTicket';
    if (path.includes('my-ticket')) return 'myTicket';
    if (path.includes('profile')) return '';
    if (path.includes('admin/user-database') || path.includes('admin/opsteam-database') || path.includes('admin/techsupport-database')) return 'userDatabase';
    if (path.includes('admin/database')) return 'database'; 
    if (path.includes('admin/settings')) return 'settings';
    if (path.includes('admin/log-history')) return 'logHistory';
    return 'dashboard';
  });

  const [userRole, setUserRole] = useState(null);
  const [isDatabaseExpanded, setIsDatabaseExpanded] = useState(() => {
    const path = location.pathname;
    return path.includes('admin/database') ||
           path.includes('admin/user-database') ||
           path.includes('admin/opsteam-database') ||
           path.includes('admin/techsupport-database');
  });

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('dashboard')) setSelectedSidebarItem('dashboard');
    else if (path.includes('new-ticket')) setSelectedSidebarItem('newTicket');
    else if (path.includes('my-ticket')) setSelectedSidebarItem('myTicket');
    else if (path.includes('profile')) setSelectedSidebarItem('');
    else if (path.includes('admin/user-database')) setSelectedSidebarItem('userDatabase');
    else if (path.includes('admin/opsteam-database')) setSelectedSidebarItem('operationalTeamDatabase'); // This won't technically be 'selected' but it's for tracking
    else if (path.includes('admin/techsupport-database')) setSelectedSidebarItem('technicalSupportDatabase'); // This won't technically be 'selected' but it's for tracking
    else if (path.includes('admin/database')) setSelectedSidebarItem('database'); // We auto-redirect from this
    else if (path.includes('admin/settings')) setSelectedSidebarItem('settings');
    else if (path.includes('admin/log-history')) setSelectedSidebarItem('logHistory');
    else setSelectedSidebarItem('');

    setIsDatabaseExpanded(
      path.includes('admin/database') ||
      path.includes('admin/user-database') ||
      path.includes('admin/opsteam-database') ||
      path.includes('admin/techsupport-database')
    );

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserRole(user.role);
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        setUserRole(null);
        localStorage.removeItem('currentUser');
        navigate('/signin');
      }
    } else {
      setUserRole(null);
      if (!['/', '/signin', '/signup', '/forgot-password'].includes(location.pathname)) {
        navigate('/signin');
      }
    }
  }, [location.pathname, navigate]);

  const handleUserIconClick = () => {
    navigate('/profile');
    setSelectedSidebarItem('');
  };

  const handleBellClick = () => {
    alert('Notifications would appear here!');
  };

  const handleLogoutClick = async () => {
    try {
      await mockLogout();
      localStorage.removeItem('currentUser');
      setUserRole(null);
      navigate('/signin');
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred during logout.");
    }
  };

  const handleSidebarClick = (item, path) => {
    setSelectedSidebarItem(item);
    navigate(path);
  };

  const handleDatabaseClick = () => {
    setIsDatabaseExpanded(true);
    handleSidebarClick('userDatabase', '/admin/user-database');
  };

  const NAVBAR_HEIGHT_PX = 72;
  const SIDEBAR_WIDTH_PX = 256;

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

            {userRole === 'standard_user' && (
              <>
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
              </>
            )}

            {userRole === 'admin' && (
              <>
                <SidebarItem
                  icon={<Database size={20} />}
                  label="Database"
                  isActive={isDatabaseExpanded && selectedSidebarItem === 'userDatabase'} 
                  onClick={handleDatabaseClick} 
                />

                {isDatabaseExpanded && (
                  <ul className="ml-4 space-y-3"> 
                    <SidebarItem
                      icon={<Users size={20} />} 
                      label="User"
                      isActive={selectedSidebarItem === 'userDatabase'}
                      onClick={() => handleSidebarClick('userDatabase', '/admin/user-database')}
                      className="pl-4" 
                    />
                    {selectedSidebarItem === 'userDatabase' && ( 
                        <ul className="ml-8 space-y-3"> 
                            <SidebarItem
                                icon={<OperationalTeamIcon size={20} />}
                                label="Operational Team"
                                isActive={false}
                                onClick={null} 
                                isDummy={true} 
                                className="pl-4" 
                            />
                            <SidebarItem
                                icon={<LifeBuoy size={20} />} 
                                label="Technical Support"
                                isActive={false} 
                                onClick={null} 
                                isDummy={true} 
                                className="pl-4" 
                            />
                        </ul>
                    )}
                  </ul>
                )}

                <SidebarItem
                  icon={<Settings size={20} />}
                  label="Settings"
                  isActive={selectedSidebarItem === 'settings'}
                  onClick={() => handleSidebarClick('settings', '/admin/settings')}
                />
                <SidebarItem
                  icon={<History size={20} />}
                  label="User Log History"
                  isActive={selectedSidebarItem === 'logHistory'}
                  onClick={() => handleSidebarClick('logHistory', '/admin/log-history')}
                />
              </>
            )}
          </ul>
        </aside>

        <div className={`flex flex-col flex-1`} style={{ paddingLeft: `${SIDEBAR_WIDTH_PX}px` }}>
          <main
            className={`flex-1 p-8 overflow-y-auto`}
            style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT_PX}px)` }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}