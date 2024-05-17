import React, { useEffect } from "react";
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
        <h3 className="font-bold text-3xl">Our Services</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto"
              />
              <h2 className="mt-2 text-xl font-bold">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

const services = [
  {
    title: "Babysitting",
    image:
      "https://i.pinimg.com/564x/4e/41/48/4e4148bd44e7e74f755cb4a147b07aae.jpg",
  },
  {
    title: "Cooking",
    image:
      "https://i.pinimg.com/564x/45/ec/5e/45ec5eda3c591804321e23b22e8e1313.jpg",
  },
  {
    title: "Cleaning",
    image:
      "https://i.pinimg.com/564x/1c/ee/48/1cee48b221bf9ba2bd7d6095d7bb60df.jpg",
  },
  {
    title: "Laundry",
    image:
      "https://i.pinimg.com/564x/73/61/1b/73611b88686a58f457b1eac7f7b2118a.jpg",
  },
];

export default About;
