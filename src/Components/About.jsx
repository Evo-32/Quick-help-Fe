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
    <div className="bg-[#fafafa] min-h-screen flex items-center justify-center text-gray-700">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Quick Help</h2>
          <p className="text-xl">
            Quick Help was founded in 2024 with the mission of assisting families with their household tasks and connecting job seekers with those in need. We are committed to providing a seamless experience for our users.
          </p>
          <div className="flex justify-around text-2xl font-bold text-pink-600 mt-6">
            <div>
              <Number n={70} />
              <h4 className="text-gray-400">Total Freelancers</h4>
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
        <h3 className="bold text-3xl">Our Services</h3>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            >
              <img src={service.image} alt={service.title} className="w-full h-auto" />
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
    image: "https://i.pinimg.com/236x/2b/c0/81/2bc081fe5f5c87be354cd3cdedec80f5.jpg",
  },
  {
    title: "Cooking",
    image: "https://i.pinimg.com/236x/dc/f5/80/dcf5804c9d5cd065d3b7786b0569b28d.jpg",
  },
  {
    title: "Cleaning",
    image: "https://i.pinimg.com/736x/38/36/53/383653eee5bcfe4a6c66f5ba06e4c524.jpg",
  },
  {
    title: "Accountant",
    image: "https://i.pinimg.com/236x/4b/62/42/4b6242b4d4338bfc7195bead3291c2e5.jpg",
  },
];

export default About;
