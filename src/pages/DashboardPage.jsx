function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Welcome to Your Dashboard!</h2>
        <p className="text-center text-gray-700">This is where personalized content will appear after login.</p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
          Logout (not yet functional)
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;