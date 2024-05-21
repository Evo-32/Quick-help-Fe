import React from 'react';

const Employee = () => {
  const cards = [
    {
      name: 'Jennifer Lance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?',
      imageUrl:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    // Add more cards here as needed
  ];

  return (
    <div className="bg-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className='text-4xl font-bold mb-4'>Our employees:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <article key={index} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <div className="flex justify-center">
                <img
                  alt=""
                  src={card.imageUrl}
                  className="h-56 w-56 object-cover rounded-full"
                />
              </div>
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    {card.name}
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employee;
