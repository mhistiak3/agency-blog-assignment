import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import axios from "axios";
import Loader from "./Loader";
const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/members`
        );
        if (response.data.success) {
          setTeamMembers(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image.imageURL}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-blue-500"
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600 text-center mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-6">
                  <a
                    href={member.socialMedia.twitter}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href={member.socialMedia.linkedin}
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.socialMedia.github}
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
