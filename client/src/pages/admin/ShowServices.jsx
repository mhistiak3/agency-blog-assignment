import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ShowServices = () => {
  // Sample data for services
  const [services, setServices] = useState([
    { id: 1, name: "Web Development", createdAt: "2024-12-01" },
    { id: 2, name: "App Development", createdAt: "2024-11-28" },
    { id: 3, name: "Digital Marketing", createdAt: "2024-11-25" },
  ]);

  const handleDelete = (id) => {
    // Delete service logic (API call or local state update)
    setServices(services.filter((service) => service.id !== id));
  };

  const handleUpdate = (id) => {
    // Update service logic (Redirect to update page or show a modal)
    alert(`Update service with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Show Services</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full text-left table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Created At</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-t">
                <td className="py-3 px-4">{service.id}</td>
                <td className="py-3 px-4">{service.name}</td>
                <td className="py-3 px-4">{service.createdAt}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    onClick={() => handleUpdate(service.id)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
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

export default ShowServices;
