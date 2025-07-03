import { useState, useMemo } from 'react';

export default function MyTicket() {

  const initialTickets = [
    {
      id: 'TICKET-001',
      ticketNo: 'TICKET-001',
      subject: 'Laptop not turning on',
      status: 'In Progress',
      supportedBy: 'John Doe',
      date: '2024-07-01',
      name: 'Alice Smith',
      department: 'Sales',
      category: 'Hardware',
      type: 'Incident',
      priority: 'High',
      description: 'My laptop suddenly shut down and now it won\'t power on. I need it for client presentations.',
      rate: 4,
      createdAt: new Date('2024-07-01T10:00:00Z'),
      userId: 'user123',
    },
    {
      id: 'TICKET-002',
      ticketNo: 'TICKET-002',
      subject: 'Software installation request',
      status: 'Closed',
      supportedBy: 'Jane Doe',
      date: '2024-06-28',
      name: 'Bob Johnson',
      department: 'Marketing',
      category: 'Software',
      type: 'Service Request',
      priority: 'Medium',
      description: 'Requesting installation of Adobe Photoshop on my workstation.',
      rate: 5,
      createdAt: new Date('2024-06-28T14:30:00Z'),
      userId: 'user124',
    },
    {
      id: 'TICKET-003',
      ticketNo: 'TICKET-003',
      subject: 'Network connectivity issues',
      status: 'On Hold',
      supportedBy: 'IT Support',
      date: '2024-07-02',
      name: 'Charlie Brown',
      department: 'HR',
      category: 'Network',
      type: 'Incident',
      priority: 'Urgent',
      description: 'Cannot access network drives or internet from my office PC. Urgent as I cannot work.',
      rate: 0,
      createdAt: new Date('2024-07-02T09:15:00Z'),
      userId: 'user125',
    },
    {
      id: 'TICKET-004',
      ticketNo: 'TICKET-004',
      subject: 'Password reset for email',
      status: 'In Progress',
      supportedBy: 'IT Support',
      date: '2024-07-03',
      name: 'Diana Prince',
      department: 'Finance',
      category: 'Account Issues',
      type: 'Service Request',
      priority: 'Low',
      description: 'Forgot my email password. Need a reset link sent to my personal email.',
      rate: 0,
      createdAt: new Date('2024-07-03T11:00:00Z'),
      userId: 'user126',
    },
    {
      id: 'TICKET-005',
      ticketNo: 'TICKET-005',
      subject: 'Printer not responding',
      status: 'Closed',
      supportedBy: 'John Doe',
      date: '2024-06-30',
      name: 'Eve Adams',
      department: 'Operations',
      category: 'Hardware',
      type: 'Incident',
      priority: 'Medium',
      description: 'Office printer is showing an error message and not printing.',
      rate: 5,
      createdAt: new Date('2024-06-30T16:45:00Z'),
      userId: 'user127',
    },
      {
      id: 'TICKET-006',
      ticketNo: 'TICKET-006',
      subject: 'New software license request',
      status: 'In Progress',
      supportedBy: 'Jane Doe',
      date: '2024-07-03',
      name: 'Frank White',
      department: 'Development',
      category: 'Software',
      type: 'Service Request',
      priority: 'Medium',
      description: 'Requesting a new license for IntelliJ IDEA for development work.',
      rate: 0,
      createdAt: new Date('2024-07-03T09:00:00Z'),
      userId: 'user128',
    },
    {
      id: 'TICKET-007',
      ticketNo: 'TICKET-007',
      subject: 'VPN connection issues',
      status: 'On Hold',
      supportedBy: 'IT Support',
      date: '2024-07-02',
      name: 'Grace Lee',
      department: 'Remote Team',
      category: 'Network',
      type: 'Incident',
      priority: 'High',
      description: 'Unable to connect to VPN from home. Cannot access internal resources.',
      rate: 0,
      createdAt: new Date('2024-07-02T13:00:00Z'),
      userId: 'user129',
    },
  ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); 

  const getAllTickets = () => {
    const localTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const all = [...localTickets, ...initialTickets];

    return all.map(ticket => ({
      ...ticket,
      createdAt: new Date(ticket.createdAt)
    })).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); 
  };

  const [tickets, setTickets] = useState(getAllTickets());
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTickets = useMemo(() => {
    return tickets.filter(ticket =>
      Object.values(ticket).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [tickets, searchTerm]);

  const totalPages = Math.ceil(filteredTickets.length / entriesPerPage);
  const paginatedTickets = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    return filteredTickets.slice(startIndex, endIndex);
  }, [filteredTickets, entriesPerPage, currentPage]);

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
      <h2 className="text-[36px] font-bold text-gray-800 mb-6 text-center">List of Tickets</h2>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Find a ticket"
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#55D6C2]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
         
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="entries-per-page" className="text-gray-700 text-sm font-medium">Show:</label>
          <div className="relative">
            <select
              id="entries-per-page"
              className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[#55D6C2] cursor-pointer"
              value={entriesPerPage}
              onChange={handleEntriesChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value={tickets.length}>All</option>
            </select>
            
          </div>
          <span className="text-gray-700 text-sm font-medium">Entries</span>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 py-3 px-4 bg-gray-200 rounded-t-md font-semibold text-gray-700 text-sm border-b border-gray-300">
        <div className="col-span-1">Ticket No.</div>
        <div className="col-span-2">Subject</div>
        <div className="col-span-1">Status</div>
        <div className="col-span-1">Supported by</div>
        <div className="col-span-1">Date</div>
      </div>

      <div className="flex-1 overflow-auto">
        {paginatedTickets.length > 0 ? (
          paginatedTickets.map(ticket => (
            <div
              key={ticket.id}
              className="grid grid-cols-6 gap-4 py-3 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
              onClick={() => handleTicketClick(ticket)}
            >
              <div className="col-span-1 font-medium text-[#55D6C2]">{ticket.ticketNo}</div>
              <div className="col-span-2 truncate">{ticket.subject}</div>
              <div className="col-span-1">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    ticket.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                    ticket.status === 'Closed' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
              <div className="col-span-1">{ticket.supportedBy}</div>
              <div className="col-span-1">{ticket.date}</div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">No tickets found.</div>
        )}
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-700">
          Showing {Math.min((currentPage - 1) * entriesPerPage + 1, filteredTickets.length)} to {Math.min(currentPage * entriesPerPage, filteredTickets.length)} of {filteredTickets.length} entries
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-[#55D6C2] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {isModalOpen && selectedTicket && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick} 
        >
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Ticket Details</h3>
            <div className="space-y-3 text-gray-700">
              <p><strong>Ticket No.:</strong> {selectedTicket.ticketNo}</p>
              <p><strong>Subject:</strong> {selectedTicket.subject}</p>
              <p><strong>Status:</strong> <span className={`px-2 py-1 rounded-full text-sm font-semibold
                ${selectedTicket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  selectedTicket.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                  selectedTicket.status === 'Closed' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {selectedTicket.status}
              </span></p>
              <p><strong>Supported By:</strong> {selectedTicket.supportedBy}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong> {selectedTicket.name}</p>
              <p><strong>Department:</strong> {selectedTicket.department}</p>
              <p><strong>Category:</strong> {selectedTicket.category}</p>
              <p><strong>Type:</strong> {selectedTicket.type}</p>
              <p><strong>Priority:</strong> {selectedTicket.priority}</p>
              <p><strong>Rate:</strong> {selectedTicket.rate}</p>
              <p><strong>Description:</strong></p>
              <p className="bg-gray-100 p-3 rounded-md border border-gray-200 whitespace-pre-wrap">{selectedTicket.description}</p>
              <p className="text-xs text-gray-500 mt-4">
                Created At: {selectedTicket.createdAt?.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">
                User ID: {selectedTicket.userId}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}