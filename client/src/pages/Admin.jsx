import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  // Simulating data fetching
  const [blogCount, setBlogCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    setBlogCount(42);
    setServiceCount(12);
    setMemberCount(8);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome, Admin
        </h2>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Back to Home</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Count Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Blogs</h3>
          <p className="text-4xl font-semibold text-blue-600">{blogCount}</p>
          <p className="text-gray-500">Total Blogs</p>
        </div>

        {/* Service Count Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Services</h3>
          <p className="text-4xl font-semibold text-green-600">
            {serviceCount}
          </p>
          <p className="text-gray-500">Total Services</p>
        </div>

        {/* Member Count Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Members</h3>
          <p className="text-4xl font-semibold text-red-600">{memberCount}</p>
          <p className="text-gray-500">Total Members</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
