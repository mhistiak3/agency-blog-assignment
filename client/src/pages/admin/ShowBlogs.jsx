import { useState } from "react";

const ShowBlogs = () => {
  // Mock data for blogs
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Understanding React Hooks",
      createdAt: "2023-12-01",
    },
    {
      id: 2,
      title: "Building a Full-Stack App with MERN",
      createdAt: "2023-11-25",
    },
    {
      id: 3,
      title: "Tips for Writing Clean Code",
      createdAt: "2023-11-15",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
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
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b">{blog.id}</td>
                <td className="py-3 px-6 border-b">{blog.title}</td>
                <td className="py-3 px-6 border-b">{blog.createdAt}</td>
                <td className="py-3 px-6 border-b text-center">
                  <button
                    onClick={() => handleUpdate(blog.id)}
                    className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan="4" className="py-3 px-6 text-center text-gray-500">
                  No blogs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBlogs;
