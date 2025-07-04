
const AdminManageUsersPage = () => {
  return (
    <div className="p-8 text-center bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin: Manage Users</h1>
      <p className="text-gray-600">This page is only visible to users with the 'admin' role.</p>
      <p className="mt-4">Here you would list, add, edit, or delete users.</p>
    </div>
  );
};

export default AdminManageUsersPage;