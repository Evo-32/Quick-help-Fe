import React from 'react'

const Employee = () => {
  const cards = [
    {
      name: 'Jennifer Lance',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime dicta, quaerat ipsum corrupti sapiente vel consequuntur a nam iusto tenetur voluptatibus explicabo velit sit sed, reprehenderit suscipit quas. Neque?',
      imageUrl: './profile.jpg',
    },
    // Add more cards here as needed
  ];
  return (
    <div className="bg-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <div className="relative pb-1/1">
                  <img
                    src={card.imageUrl}
                    alt="Profile"
                    className="absolute h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="mt-4 flex justify-center flex-col">
                  <h2 className="text-xl font-semibold text-gray-800">{card.name}</h2>
                  <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700  text-white font-bold py-2 px-4 rounded">
                    <a href='/book'>Book</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Employee