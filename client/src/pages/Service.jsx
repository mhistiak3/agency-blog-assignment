import {
  FaBullhorn,
  FaLaptopCode,
  FaCog,
  FaHandsHelping,
  FaUsers,
  FaCloud,
} from "react-icons/fa";

const Service = () => {
  // Sample data for services
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Grow your brand with targeted digital marketing strategies and campaigns.",
      icon: <FaBullhorn className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Building scalable, responsive, and user-friendly websites and applications.",
      icon: <FaLaptopCode className="text-4xl text-green-600" />,
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Improve your site's ranking on search engines and drive more organic traffic.",
      icon: <FaCog className="text-4xl text-yellow-600" />,
    },
    {
      id: 4,
      title: "Consulting Services",
      description:
        "Provide expert advice to help you grow and improve your business operations.",
      icon: <FaHandsHelping className="text-4xl text-purple-600" />,
    },
    {
      id: 5,
      title: "Team Collaboration",
      description:
        "Helping teams work together effectively and streamline workflows.",
      icon: <FaUsers className="text-4xl text-teal-600" />,
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description:
        "Offering scalable cloud services for your business's needs.",
      icon: <FaCloud className="text-4xl text-indigo-600" />,
    },
  ];

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We offer a wide range of services to help your business succeed in
            the digital world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-center items-center"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
