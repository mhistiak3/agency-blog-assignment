import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
const ShowMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/members`
        );
        if (response.data.success) {
          setMembers(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/v1/admin/members`,
          {
            data: { id: id },
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setMembers(members.filter((member) => member._id !== id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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
        {loading ? (
          <Loader />
        ) : (
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
                <tr key={member._id}>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    {member._id}
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    {member.name}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <img
                      src={member.image.imageURL}
                      alt={member.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 border-b text-sm text-gray-700 space-x-2">
                    <button
                      onClick={() => handleUpdate(member._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShowMembers;
