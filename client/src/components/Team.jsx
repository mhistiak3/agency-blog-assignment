const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Alice Johnson",
      role: "Marketing Head",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.image}
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
                  href={member.socialLinks.twitter}
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M23 3a10.9 10.9 0 01-3.2.9A5.3 5.3 0 0022.4 2a10.8 10.8 0 01-3.5 1.3A5.2 5.2 0 0016.2 0a5.2 5.2 0 00-5.2 5.3c0 .4.1.8.2 1.2-4.3-.2-8.1-2.2-10.7-5.2-.4.8-.6 1.7-.6 2.7 0 1.9 1 3.6 2.5 4.6a5.2 5.2 0 01-2.4-.7v.1a5.3 5.3 0 004.2 5.1A5.5 5.5 0 010 13.3a7.4 7.4 0 004.1 1.2C5.7 14.4 8.7 16 12 16c7.3 0 11.3-6.1 11.3-11.4 0-.2 0-.4-.1-.6a8.1 8.1 0 002.1-2z"
                    />
                  </svg>
                </a>
                <a
                  href={member.socialLinks.linkedin}
                  className="text-blue-700 hover:text-blue-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm1 5h2v12H5V7zm1-3a1 1 0 110 2 1 1 0 010-2zm4 3h2v2h-2V7zm1 12h-2v-5.6c0-1.5-.6-2.6-1.9-2.6-1.1 0-1.8.7-1.8 1.8v6.4h-2v-8h2v1.1h.1c.3-.5.9-.9 1.5-.9 1.3 0 2.4 1.1 2.4 2.5v6.3z"
                    />
                  </svg>
                </a>
                <a
                  href={member.socialLinks.github}
                  className="text-gray-800 hover:text-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.86 8.17 6.84 9.49.5.09.68-.22.68-.5v-2.17c-2.56.56-3.09-1.24-3.09-1.24-.41-1.05-.99-1.33-.99-1.33-.82-.56.06-.55.06-.55.91.06 1.4.93 1.4.93.81 1.38 2.14.98 2.61.75.09-.59.31-.98.57-1.21-2.11-.24-4.33-1.05-4.33-4.67 0-1.03.37-1.87 1-2.53-.1-.25-.43-1.25.09-2.5 0 0 .78-.24 2.56.91 1.47-.41 3.05-.41 4.51 0 1.77-1.15 2.55-.91 2.55-.91.52 1.26.19 2.25.09 2.5.64.67 1 1.5 1 2.53 0 3.61-2.22 4.43-4.33 4.67.31.27.58.81.58 1.65v2.16c0 .29.18.59.68.5A10.016 10.016 0 0022 12c0-5.52-4.48-10-10-10z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
