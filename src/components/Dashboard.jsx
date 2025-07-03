export default function Dashboard() {
  const statCardsData = [
    { title: "Total Tickets", value: "12", bg: "bg-[#2F82FF]", text: "text-[#05386B]" },
    { title: "Total Solved", value: "08", bg: "bg-[#0BFF68]", text: "text-[#05386B]" },
    { title: "Total Awaiting Approval", value: "02", bg: "bg-[#FE594E]", text: "text-[#05386B]"},
    { title: "Total In Progress", value: "02", bg: "bg-[#FCFF6C]", text: "text-[#05386B]" },
  ];

  return (
    <div className="flex flex-col items-center w-full"> {/* Removed min-h- and justify-center */}
      <h2 className="text-[36px] font-bold text-gray-800 mb-6 text-center">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {statCardsData.map((card, index) => (
          <StatCard key={index} title={card.title} value={card.value} bg={card.bg} textColor={card.text} />
        ))}
      </div>
    </div>
  );
}

const StatCard = ({ title, value, bg, textColor }) => (
  <div className={`h-70 p-6 rounded-[20px] shadow-xl ${bg} ${textColor} flex flex-col justify-start items-start text-left`}>
    <h3 className="text-lg font-semibold mb-2 text-[#000000]">{title}</h3>
    <p className="text-[80px] font-bold leading-none text-[#05386B]">{value}</p>
  </div>
);