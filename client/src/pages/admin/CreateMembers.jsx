import axios from "axios";
import { useState } from "react";
import Loader from "../../components/Loader";

const CreateMembers = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    linkedin: "",
    twitter: "",
    facebook: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result); // Create preview URL for the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!avatar) {
      alert("Please upload an avatar.");
      return;
    }

    // Form submission logic
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("image", avatar);
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("role", formData.position);
    const socilLinks = {
      linkedin: formData.linkedin,
      twitter: formData.twitter,
      facebook: formData.facebook,
    };
    formDataToSubmit.append("socialLinks", JSON.stringify(socilLinks));

    //  API call
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/members`,
        formDataToSubmit,
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
      console.log(error.response);
      alert("Member create failed")
    } finally {
      setLoading(false);
    }

    // Reset form
    setFormData({
      name: "",
      position: "",
      linkedin: "",
      twitter: "",
      facebook: "",
    });
    setAvatar(null);
    setAvatarPreview(null);
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Member</h2>
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="mt-4 w-32 h-32 object-cover rounded-full mx-auto border-2 border-blue-500"
              />
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter position"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              LinkedIn Profile
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter LinkedIn URL"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="twitter"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Twitter Profile
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Twitter URL"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="facebook"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Facebook Profile
            </label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              value={formData.facebook}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter Facebook URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Create Member
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateMembers;
