
import { Search, ChevronDown, Pencil, Trash2, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const InfoBox = ({ title, width, height }) => (
  <div
    className="flex items-center justify-center bg-[#55D6C2] rounded-lg shadow-md font-bold text-gray-700"
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    {title}
  </div>
);

const TableRow = ({ staffId, name, department, specialty, bgColor, isChecked = false }) => (
  <div className={`flex items-center text-sm rounded-md px-4 py-2 ${bgColor}`} style={{ height: '56px' }}>
    <div className="w-[5%] flex justify-center">
      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded" defaultChecked={isChecked} />
    </div>
    <div className="w-[15%] px-2 text-center">{staffId}</div>
    <div className="w-[20%] px-2 text-center">{name}</div>
    <div className="w-[20%] px-2 text-center">{department}</div>
    <div className="w-[20%] px-2 text-center">{specialty}</div>
    <div className="w-[20%] px-2 flex justify-center space-x-4">
      <Pencil size={18} className="text-blue-500 cursor-pointer hover:text-blue-700" />
      <Trash2 size={18} className="text-red-500 cursor-pointer hover:text-red-700" />
    </div>
  </div>
);

export default function AdminDatabasePage() {

  return (
    <div className="flex flex-col items-start w-full">


      <div className="p-8 flex flex-col items-start w-full">
        <h1
          className="text-4xl font-bold text-gray-800 mb-8"
          style={{ width: '200px', height: '44px', lineHeight: '44px' }}
        >
          Database
        </h1>

        <div className="flex mb-8 rounded-lg overflow-hidden shadow-md">
          <InfoBox title="User" width={358} height={45}/>
          <InfoBox title="Operation Team" width={358} height={45} />
          <InfoBox title="Technical Support" width={358} height={45} />
        </div>

        <div className="flex justify-start mb-6 w-full max-w-[1059px]">
          <div
            className="relative flex items-center border border-gray-300 rounded bg-black/[0.1]"
            style={{ width: '236px', height: '40px' }}
          >
            <input
              type="text"
              placeholder="Find ticket"
              className="flex-grow px-3 py-2 outline-none rounded-l-md text-blue-900"
              style={{ height: '100%' }}
            />
            <Search size={18} className="text-gray-500 mr-3 cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-start items-center mb-6 w-full max-w-[1059px]">
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

        <div className="flex items-center font-semibold text-gray-700 mb-2 w-[1059px]">
          <div className="w-[5%] flex justify-center">
          </div>
          <div className="w-[15%] px-2 text-center">Staff Id</div>
          <div className="w-[20%] px-2 text-center">Name</div>
          <div className="w-[20%] px-2 text-center">Department</div>
          <div className="w-[20%] px-2 text-center">Specialty</div>
          <div className="w-[20%] px-2 text-center">Setting</div>
        </div>

        <div className="flex flex-col gap-2 w-[1040px]">
          <TableRow staffId="ABC123" name="Abu" department="IT" specialty="Software" bgColor="bg-gray-100" />
          <TableRow staffId="ABC124" name="Ahmad" department="Software" specialty="Networking" bgColor="bg-gray-200" />
          <TableRow staffId="ABC125" name="Ali" department="Technical" specialty="Hardware" bgColor="bg-gray-100" />
        </div>

        <div className="flex justify-between items-center mt-6 w-[1059px]">
          <span className="text-gray-700 text-sm">Showing 1 to 3 of 3 entries</span>

          <div className="flex items-center space-x-2 text-gray-700 text-sm">
            <button className="p-2 rounded-md hover:bg-gray-200"><ChevronsLeft size={16} /></button>
            <button className="p-2 rounded-md hover:bg-gray-200"><ChevronLeft size={16} /></button>
            <span className="px-3 py-1 rounded-md bg-blue-500 text-white">1</span>
            <button className="p-2 rounded-md hover:bg-gray-200"><ChevronRight size={16} /></button>
            <button className="p-2 rounded-md hover:bg-gray-200"><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div> 
    </div> 
  );
}