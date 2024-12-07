import { useEffect, useState } from "react";

import axios from "axios";
import Loader from "../components/Loader";
const Service = () => {
  // Sample data for services
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
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

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-center items-center"
                >
                  <div className="mb-6">
                    <img
                      src={service.image.imageURL}
                      alt={service.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Service;
