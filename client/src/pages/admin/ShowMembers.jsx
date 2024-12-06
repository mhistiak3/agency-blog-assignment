import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const ShowMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: null, // File input
    socialMedia: {
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  });

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
              data: { id },
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

  const handleUpdate = (member) => {
    setCurrentMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      image: null, // Reset the image field
      socialMedia: member.socialMedia || {
        linkedin: "",
        twitter: "",
        facebook: "",
      },
    });
    setShowPopup(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.socialMedia) {
      setFormData((prev) => ({
        ...prev,
        socialMedia: { ...prev.socialMedia, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formDatas = new FormData();
      formDatas.append("id", currentMember._id);
      formDatas.append("name", formData.name);
      formDatas.append("role", formData.role);
      if (formData.image) {
        formDatas.append("image", formData.image);
        formDatas.append("imageID", currentMember.image.id);
      }
      formDatas.append("socialLinks", JSON.stringify(formData.socialMedia));
      setShowPopup(false);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/members`,
        formDatas,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
                  Role
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
                  <td className="px-6 py-4 border-b text-sm text-gray-700">
                    {member.role}
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
                      onClick={() => handleUpdate(member)}
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

      {/* Update Member Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Update Member</h3>
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
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Avatar (Optional)
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  LinkedIn URL (Optional)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.socialMedia.linkedin}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Twitter URL (Optional)
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.socialMedia.twitter}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  facebook URL (Optional)
                </label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.socialMedia.facebook}
                  onChange={handleFormChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMembers;
