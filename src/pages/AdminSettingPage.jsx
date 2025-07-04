// src/pages/AdminSettingsPage.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

// Define custom colors for clarity
const CYAN = '#55D6C2';
const LIGHT_GRAY_CLASS = 'bg-gray-100'; // This corresponds to #F3F4F6
const DARK_GRAY_CLASS = 'bg-gray-200';  // This corresponds to #E5E7EB, slightly darker

// --- NEW REUSABLE COMPONENTS FOR ELEMENTS AT THE END OF GRAY BOXES ---

// BM/BI Icon component (same as in your navbar)
const BMBIIcon = () => (
  <div className="flex items-center bg-[#000000] rounded-full p-1">
    <span className="px-3 py-1 rounded-full text-white text-sm font-medium">BM</span>
    <span className="px-3 py-1 rounded-full bg-[#55D6C2] text-gray-700 text-sm font-medium">BI</span>
  </div>
);

// Simple Checkbox component
const CheckboxInput = () => (
  <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 accent-cyan-500" defaultChecked/>
);

// Empty Dropdown icon (using ChevronDown)
const EmptyDropdown = () => (
  <ChevronDown size={20} className="text-gray-700 cursor-pointer" />
);

// --- END NEW REUSABLE COMPONENTS ---


// Reusable component for the Cyan Header box (No changes here)
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

// Reusable component for the Gray Content boxes - UPDATED
const SettingsContentBox = ({ text, width, height, bgColor, isLast = false, endElement }) => (
  <div
    // Added 'justify-between' to push content to the ends
    className={`flex items-center justify-between px-6 text-gray-700 ${bgColor}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      borderBottomLeftRadius: isLast ? '0.5rem' : 0,
      borderBottomRightRadius: isLast ? '0.5rem' : 0,
      boxShadow: isLast ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
    }}
  >
    <span>{text}</span> {/* Wrapped text in a span to make it a distinct flex item */}
    {endElement} {/* Render the element passed via endElement prop */}
  </div>
);


export default function AdminSettingsPage() {
  const SECTION_WIDTH = 1066;

  return (
    <div className="bg-white min-h-screen px-8 py-4 flex flex-col items-start w-full overflow-hidden">
      {/* "Setting" Title */}
      <h1
        className="text-4xl font-bold text-gray-800 mb-4"
        style={{ width: '200px', height: '44px', lineHeight: '44px' }}
      >
        Setting
      </h1>

      {/* General Section */}
      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="General" width={1066} height={50} />
        {/* "Language" with BM/BI Icon */}
        <SettingsContentBox
          text="Language"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          endElement={<BMBIIcon />} // Pass the BM/BI component
        />
        {/* "Data Backup" with Checkbox */}
        <SettingsContentBox
          text="Data Backup"
          width={1021}
          height={50}
          bgColor={DARK_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />} // Pass the Checkbox component
        />
      </div>

      {/* Connect To Section */}
      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Connect To" width={1066} height={50} />
        {/* "GoDash" with Checkbox */}
        <SettingsContentBox
          text="GoDash"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          endElement={<CheckboxInput />} // Pass the Checkbox component
        />
        {/* "SuperController" with Checkbox */}
        <SettingsContentBox
          text="SuperController"
          width={1021}
          height={50}
          bgColor={DARK_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />} // Pass the Checkbox component
        />
      </div>

      {/* Email Section */}
      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Email" width={1066} height={50} />
        {/* "Enable SMTP" with Checkbox */}
        <SettingsContentBox
          text="Enable SMTP"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />} // Pass the Checkbox component
        />
      </div>

      {/* Authorization Section */}
      <div className="rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Authorization" width={1066} height={50} />
        {/* "Edit authorization" with Checkbox */}
        <SettingsContentBox
          text="Edit authorization"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          endElement={<CheckboxInput />} // Pass the Checkbox component
        />
        {/* "Authority Level" with Empty Dropdown */}
        <SettingsContentBox
          text="Authority Level"
          width={1021}
          height={50}
          bgColor={DARK_GRAY_CLASS}
          isLast={true}
          endElement={<EmptyDropdown />} // Pass the EmptyDropdown component
        />
      </div>

      {/* Notification Section */}
      <div className="mb-0 rounded-lg overflow-hidden flex flex-col items-end">
        <SettingsHeaderBox title="Notification" width={1066} height={50} />
        {/* "Enable Notification" with Checkbox */}
        <SettingsContentBox
          text="Enable Notification"
          width={1021}
          height={50}
          bgColor={LIGHT_GRAY_CLASS}
          isLast={true}
          endElement={<CheckboxInput />} // Pass the Checkbox component
        />
      </div>

    </div>
  );
}