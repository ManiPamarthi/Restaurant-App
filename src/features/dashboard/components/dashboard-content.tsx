
// pages/index.js
export const DashboardContent = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 p-4 flex justify-center items-center">
          <nav className="flex space-x-4">
            {['All', 'Lunch', 'Dinner', 'Drinks', 'Sweets'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-black">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Premium Deep-Sea Snow White Cod Fillet',
              category: 'Lunch',
              image: '/images/chef.png',
            },
            {
              title: 'Option of Natural Wine Available',
              category: 'Drinks',
              image: '/images/chef.png',
            },
            {
              title: 'Roast Pumpkin with Pumpkin Soup',
              category: 'Lunch',
              image: '/images/chef.png',
            },
            {
              title: 'Strip Steak with Rosemary Butter',
              category: 'Dinner',
              image: '/images/chef.png',
            },
            {
              title: 'Braised Sliced Abalone Fish Maw with Premium Seafood',
              category: 'Starter',
              image: '/images/chef.png',
            },
            {
              title: 'Pan-Fried Live Prawn with Superior Soy Sauce',
              category: 'Dinner',
              image: '/images/chef.png',
            },
            {
              title: 'Braised Sliced Abalone Fish Maw with Premium Seafood',
              category: 'Starter',
              image: '/images/chef.png',
            },
            {
              title: 'Pan-Fried Live Prawn with Superior Soy Sauce',
              category: 'Dinner',
              image: '/images/chef.png',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow rounded overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-28 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 mt-2">Category: {item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
