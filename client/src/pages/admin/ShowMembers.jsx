import { useState } from "react";

const ShowMembers = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((member) => member.id !== id));
    }
  };

  const handleUpdate = (id) => {
    alert(`Update functionality for member ID: ${id}`);
    // Add logic for updating the member details
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Show Members</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-semibold text-gray-600">
                ID
              </th>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-semibold text-gray-600">
                Avatar
              </th>
              <th className="px-6 py-3 border-b bg-gray-50 text-left text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 border-b text-sm text-gray-700">
                  {member.id}
                </td>
                <td className="px-6 py-4 border-b text-sm text-gray-700">
                  {member.name}
                </td>
                <td className="px-6 py-4 border-b">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4 border-b text-sm text-gray-700 space-x-2">
                  <button
                    onClick={() => handleUpdate(member.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowMembers;
