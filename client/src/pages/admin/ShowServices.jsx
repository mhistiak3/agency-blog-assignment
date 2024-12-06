import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Loader from "../../components/Loader";

const ShowServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/v1/admin/services`,
          {
            data: { id },
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setServices(services.filter((service) => service._id !== id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdate = (service) => {
    setCurrentService(service);
    setFormData({
      title: service.title,
      description: service.description,
      image: null, // Optional image for updating
    });
    setShowPopup(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0], // Optional image
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Create FormData object
      const formDatas = new FormData();
      formDatas.append("id", currentService._id);
      formDatas.append("title", formData.title);
      formDatas.append("description", formData.description);

      // Only append image if it's provided
      if (formData.image) {
        formDatas.append("image", formData.image);
        formDatas.append("imageID", currentService.image?.id); // Optionally remove the image
      }

      // Send request to the API
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/services`,
        formDatas,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setShowPopup(false);
        // Update services list after success
        setServices(
          services.map((service) =>
            service._id === currentService._id
              ? { ...service, ...formData }
              : service
          )
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
                    {new Date(service.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button
                      onClick={() => handleUpdate(service)}
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

      {/* Popup Form for Updating Service */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Update Service</h3>
              <button
                onClick={() => setShowPopup(false)}
                className="text-red-500 font-bold"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image (Optional)
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowServices;
