import { ChevronDown } from 'lucide-react';

const CYAN = '#55D6C2';
const LIGHT_GRAY_CLASS = 'bg-gray-100'; 
const DARK_GRAY_CLASS = 'bg-gray-200';  


const BMBIIcon = () => (
  <div className="flex items-center bg-[#000000] rounded-full p-1">
    <span className="px-3 py-1 rounded-full text-white text-sm font-medium">BM</span>
    <span className="px-3 py-1 rounded-full bg-[#55D6C2] text-gray-700 text-sm font-medium">BI</span>
  </div>
);

const CheckboxInput = () => (
  <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 accent-cyan-500" defaultChecked/>
);

const EmptyDropdown = () => (
  <ChevronDown size={20} className="text-gray-700 cursor-pointer" />
);



const SettingsHeaderBox = ({ title, width, height }) => (
  <div
    className="flex items-center px-6 font-semibold text-white rounded-t-lg shadow-md"
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: CYAN,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    }}
  >
    <span>{title}</span>
    <ChevronDown size={20} className="ml-2 cursor-pointer" />
  </div>
);

const SettingsContentBox = ({ text, width, height, bgColor, isLast = false, endElement }) => (
  <div
    className={`flex items-center justify-between px-6 text-gray-700 ${bgColor}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      borderBottomLeftRadius: isLast ? '0.5rem' : 0,
      borderBottomRightRadius: isLast ? '0.5rem' : 0,
      boxShadow: isLast ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
    }}
  >
    <span>{text}</span> 
    {endElement} 
  </div>
);


export default function AdminSettingsPage() {
  const SECTION_WIDTH = 1066;

  return (
    <div className="bg-white min-h-screen px-8 py-4 flex flex-col items-start w-full overflow-hidden">
      <h1
        className="text-4xl font-bold text-gray-800 mb-4"
        style={{ width: '200px', height: '44px', lineHeight: '44px' }}
      >
        Setting
      </h1>

      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="General" width={1066} height={50} />
        <SettingsContentBox
          text="Language"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          endElement={<BMBIIcon />} 
        />
        <SettingsContentBox
          text="Data Backup"
          width={1021}
          height={50}
          bgColor={DARK_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />}
        />
      </div>

      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Connect To" width={1066} height={50} />
        <SettingsContentBox
          text="GoDash"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          endElement={<CheckboxInput />} 
        />
        <SettingsContentBox
          text="SuperController"
          width={1021}
          height={50}
          bgColor={DARK_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />} 
        />
      </div>

      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Email" width={1066} height={50} />
        <SettingsContentBox
          text="Enable SMTP"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />} 
        />
      </div>

      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Authorization" width={1066} height={50} />
        <SettingsContentBox
          text="Edit authorization"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          endElement={<CheckboxInput />} 
        />
        <SettingsContentBox
          text="Authority Level"
          width={1021}
          height={50}
          bgColor={DARK_GRAY_CLASS}
          isLast={true}
          endElement={<EmptyDropdown />} 
        />
      </div>

      <div className="mb-0 rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Notification" width={1066} height={50} />
        <SettingsContentBox
          text="Enable Notification"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />}
        />
      </div>

    </div>
  );
}