

import { Search, ChevronDown, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const LIGHT_GRAY_ROW = 'bg-gray-100';
const DARK_GRAY_ROW = 'bg-gray-200';

const LogHistoryTableRow = ({ no, signInTime, staffId, department, activity, signOutTime, bgColor, isFirst = false, isLast = false }) => (
  <div
    className={`flex items-center text-sm px-4 py-2 ${bgColor}`}
    style={{ height: '56px' }}
  >
    <div className={`w-[5%] text-center ${isFirst ? 'rounded-tl-md' : ''} ${isLast ? 'rounded-bl-md' : ''}`}>{no}</div>
    <div className="w-[20%] text-center">{signInTime}</div>
    <div className="w-[15%] text-center">{staffId}</div>
    <div className="w-[15%] text-center">{department}</div>
    <div className="w-[25%] text-center">{activity}</div>
    <div className={`w-[20%] text-center ${isFirst ? 'rounded-tr-md' : ''} ${isLast ? 'rounded-br-md' : ''}`}>{signOutTime}</div>
  </div>
);

export default function AdminUserLogHistoryPage() {
  const logData = [
    { no: '1.', signInTime: '130821 / 0800', staffId: 'XL000001', department: 'OT', activity: 'Create Team', signOutTime: '130821 / 0815' },
    { no: '2.', signInTime: '130821 / 0805', staffId: '', department: '', activity: '', signOutTime: '130821 / 0810' },
    { no: '3.', signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
    { no: '4.', signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
    { no: '5.', signInTime: '', staffId: '', department: '', activity: '', signOutTime: '' },
  ];

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col items-start w-full">
      <h1
        className="text-4xl font-bold text-gray-800 mb-8"
        style={{ width: '300px', height: '44px', lineHeight: '44px' }}
      >
        User Log History
      </h1>

      <div className="flex justify-between items-center mb-6 w-full max-w-[1059px]">
        <div className="flex items-center space-x-1">
          <span className="text-gray-700" style={{ width: '95px', height: '34px', lineHeight: '34px' }}>Show:</span>
          <div
            className="flex items-center justify-between border border-gray-300 rounded px-2 py-1 bg-white cursor-pointer"
            style={{ width: '100px', height: '30px' }}
          >
            <span>10</span>
            <ChevronDown size={14} />
          </div>
          <span className="text-gray-700">Entries</span>
        </div>


      </div>

      <div className="border-t border-gray-300 mb-6" style={{ width: '1059px' }}></div>

      <div className="flex items-center font-semibold text-gray-700 px-4 py-2 w-[1059px] rounded-t-md overflow-hidden">
        <div className="w-[5%] text-center">No.</div>
        <div className="w-[20%] text-center">Date/Sign in Time</div>
        <div className="w-[15%] text-center">Staff Id</div>
        <div className="w-[15%] text-center">Department</div>
        <div className="w-[25%] text-center">Activity</div>
        <div className="w-[20%] text-center">Date/Sign Out time</div>
      </div>

      <div className="flex flex-col w-[1059px] shadow-lg mb-6">
        {logData.map((row, index) => (
          <LogHistoryTableRow
            key={index}
            no={row.no}
            signInTime={row.signInTime}
            staffId={row.staffId}
            department={row.department}
            activity={row.activity}
            signOutTime={row.signOutTime}
            bgColor={index % 2 === 0 ? LIGHT_GRAY_ROW : DARK_GRAY_ROW} 
            isFirst={index === 0}
            isLast={index === logData.length - 1}
          />
        ))}
      </div>

      <div className="flex justify-between items-center w-full max-w-[1059px]">
        <span className="text-gray-700 text-sm">Showing 1 to {logData.length} of {logData.length} entries</span>

        <div className="flex items-center space-x-2 text-gray-700 text-sm">
          <button className="p-2 rounded-md hover:bg-gray-200"><ChevronsLeft size={16} /></button>
          <button className="p-2 rounded-md hover:bg-gray-200"><ChevronLeft size={16} /></button>
          <span className="px-3 py-1 rounded-md bg-blue-500 text-white">1</span>
          <button className="p-2 rounded-md hover:bg-gray-200"><ChevronRight size={16} /></button>
          <button className="p-2 rounded-md hover:bg-gray-200"><ChevronsRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}