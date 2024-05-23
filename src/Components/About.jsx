import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const About = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll("#hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (selectedService) {
      const serviceName = selectedService.toLowerCase().replace(" ", "");
      fetch(
        `https://quickhelp-2.onrender.com/api/v1/employee/getByjobs/${serviceName}`
      )
        .then((response) => response.json())
        .then((data) => setEmployees(data))
        .catch((error) => console.error("Error fetching employees:", error));
    }
  }, [selectedService]);

  return (
    <div className="bg-[#fafafa] min-h-screen flex flex-col items-center justify-center p-5 text-gray-700 mt-7">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Quick Help</h2>
          <p className="text-xl">
            Quick Help was founded in 2024 with the mission of assisting
            families with their household tasks and connecting job seekers with
            those in need. We are committed to providing a seamless experience
            for our users.
          </p>
          <div className="flex justify-around text-2xl font-bold text-pink-600 mt-6 ">
            <div>
              <Number n={70} />
              <h4 className="text-gray-400"> Total solopreneur</h4>
            </div>
            <div>
              <Number n={100} />
              <h4 className="text-gray-400">Orders Received</h4>
            </div>
            <div>
              <Number n={1200} />
              <h4 className="text-gray-400">Positive Reviews</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h3 className="font-bold text-3xl mb-6">Our Services</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="bg-white p-4 sm:p-6">
                <h2 className="mt-0.5 text-lg text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-500 mt-2">{service.description}</p>
                {/* <a href="/employee"> */}
                  <button
                    onClick={() => setSelectedService(service.title)}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </button>
                {/* </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <h3 className="font-bold text-3xl mb-6">
            Employees for {selectedService}
          </h3>
          {employees.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {employees.map((employee, index) => (
                <article
                  key={index}
                  className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                >
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="h-56 w-full object-cover"
                  />
                  <div className="bg-white p-4 sm:p-6">
                    <h2 className="mt-0.5 text-lg text-gray-900">
                      {employee.name}
                    </h2>
                    <p className="text-gray-500 mt-2">{employee.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-xl text-gray-500">Loading employees...</p>
          )}
        </div>
      )}
    </div>
  );
};

const services = [
  {
    title: "Babysitting",
    description:
      "Need a night out? Let us take care of your little ones while you enjoy some adult time.",
    image:
      "https://i.pinimg.com/564x/4e/41/48/4e4148bd44e7e74f755cb4a147b07aae.jpg",
  },
  {
    title: "Cooking",
    description:
      "Tired of cooking every night? Hire our chefs to prepare delicious meals for your family.",
    image:
      "https://i.pinimg.com/564x/45/ec/5e/45ec5eda3c591804321e23b22e8e1313.jpg",
  },
  {
    title: "Cleaning",
    description:
      "Let our cleaning experts tackle the mess while you focus on more important things.",
    image:
      "https://i.pinimg.com/564x/1c/ee/48/1cee48b221bf9ba2bd7d6095d7bb60df.jpg",
  },
  {
    title: "Laundry",
    description:
      "Never worry about folding clothes again. We'll handle your laundry with care.",
    image:
      "https://i.pinimg.com/564x/73/61/1b/73611b88686a58f457b1eac7f7b2118a.jpg",
  },
];

export default About;
