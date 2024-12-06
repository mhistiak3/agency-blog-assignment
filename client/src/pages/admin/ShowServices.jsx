import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Loader from "../../components/Loader";
const ShowServices = () => {
  // Sample data for services
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
     (async function () {
       try {
         const response = await axios.get(
           `${import.meta.env.VITE_API_URL}/api/v1/services`
         );
         if (response.data.success) {
           setServices(response.data.data);
         }
       } catch (error) {
         console.log(error);
       } finally {
         setLoading(false);
       }
     })();
   }, []);

  const handleDelete = (id) => {
    // Delete service logic (API call or local state update)
    setServices(services.filter((service) => service.id !== id));
  };

  const handleUpdate = (id) => {
    // Update service logic (Redirect to update page or show a modal)
    alert(`Update service with ID: ${id}`);
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Show Services</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        {loading ? (
          <Loader />
        ) : (
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
                <tr key={service._id} className="border-t">
                  <td className="py-3 px-4">{service._id}</td>
                  <td className="py-3 px-4">{service.title}</td>
                  <td className="py-3 px-4">
                    {new Date(
                      new Date(service.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={() => handleUpdate(service._id)}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
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

export default ShowServices;
