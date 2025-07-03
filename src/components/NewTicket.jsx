import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 



export default function NewTicket() {
  const navigate = useNavigate();

  // State for form fields
  const [ticketNo, setTicketNo] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: `TICKET-${Date.now()}`,
      ticketNo,
      date,
      name,
      department,
      subject,
      category,
      type,
      priority,
      description,
      status: 'In Progress',
      supportedBy: 'IT Support', 
      rate: 0, 
      createdAt: new Date().toISOString(), 
      userId: 'currentUserId',
    };

    const existing = JSON.parse(localStorage.getItem('tickets')) || [];
    existing.unshift(newTicket); 
    localStorage.setItem('tickets', JSON.stringify(existing));

    navigate('/my-ticket');

  };

  return (
  
    <div className="p-8">
      <h2 className="text-[36px] font-bold text-gray-800 mb-6 text-center">Create New Ticket</h2>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex items-center">
              <label htmlFor="ticketNo" className="w-1/3 text-gray-700 text-sm font-bold mr-2">Ticket No.:</label>
              <input type="text" id="ticketNo" className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={ticketNo} onChange={(e) => setTicketNo(e.target.value)} placeholder="Auto-generated or enter #" />
            </div>
            <div className="flex-1 flex items-center">
              <label htmlFor="date" className="w-1/3 text-gray-700 text-sm font-bold mr-2">Date:</label>
              <input type="date" id="date" className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex items-center">
              <label htmlFor="name" className="w-1/3 text-gray-700 text-sm font-bold mr-2">Name:</label>
              <input type="text" id="name" className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
            </div>
            <div className="flex-1 flex items-center">
              <label htmlFor="department" className="w-1/3 text-gray-700 text-sm font-bold mr-2">Department:</label>
              <input type="text" id="department" className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Your Department" />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
            <input type="text" id="subject" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Briefly describe the issue" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 flex flex-col gap-6">
              <div>
                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                <input type="text" id="category" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Hardware, Software" />
              </div>
              <div>
                <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">Type:</label>
                <input type="text" id="type" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={type} onChange={(e) => setType(e.target.value)} placeholder="e.g., Incident, Request" />
              </div>
              <div>
                <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">Priority:</label>
                <input type="text" id="priority" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="e.g., High, Medium, Low" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
              <textarea id="description" rows="8" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55D6C2]" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Provide a detailed description..."></textarea>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
            <div className="flex-1 bg-gray-100 p-4 rounded-md border border-gray-300 text-center text-gray-600">
              <p>[ ReCAPTCHA Widget Placeholder ]</p>
            </div>
            <button type="submit" className="w-full md:w-auto px-8 py-3 bg-[#55D6C2] text-white font-bold rounded-md shadow-lg hover:bg-[#40B0A0] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] focus:ring-offset-2">
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

