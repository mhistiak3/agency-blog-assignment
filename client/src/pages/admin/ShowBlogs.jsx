import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
const ShowBlogs = () => {
  // Mock data for blogs
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
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
            data: { id: id },
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

  const handleUpdate = (id) => {
    alert(`Update blog with ID: ${id}`);
    // Implement update functionality here
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
                      onClick={() => handleUpdate(blog._id)}
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
    </div>
  );
};

export default ShowBlogs;
