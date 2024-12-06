import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";

const ShowBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/blogs`
        );
        if (response.data.success) {
          setBlogPosts(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        setLoading(true);
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/v1/admin/blogs`,
          {
            data: { id },
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setBlogPosts(blogPosts.filter((blog) => blog._id !== id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdate = (blog) => {
    setCurrentBlog(blog);
    setFormData({ title: blog.title, description: blog.description });
    setShowPopup(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Create FormData object
      const formDatas = new FormData();
      formDatas.append("id", currentBlog._id); // Pass the blog ID
      formDatas.append("title", formData.title);
      formDatas.append("description", formData.description);
      if (formData.image) {
        formDatas.append("image", formData.image);
        formDatas.append("imageID", currentBlog.image.id);
      }

      // Send request to the API
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/admin/blogs`,
        formDatas,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data", // Required for FormData
          },
        }
      );

      if (response.data.success) {
        setShowPopup(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Blogs</h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        {loading ? (
          <Loader />
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Created At</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((blog) => (
                <tr key={blog._id} className="hover:bg-gray-100">
                  <td className="py-3 px-6 border-b">{blog._id}</td>
                  <td className="py-3 px-6 border-b">{blog.title}</td>
                  <td className="py-3 px-6 border-b">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="py-3 px-6 border-b text-center">
                    <button
                      onClick={() => handleUpdate(blog)}
                      className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {blogPosts.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="py-3 px-6 text-center text-gray-500"
                  >
                    No blogs available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Popup Form for Updating Blog */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Update Blog</h3>
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
                  Content
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      image: e.target.files[0],
                    }))
                  }
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

export default ShowBlogs;
