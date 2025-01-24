// menuData.js
const menuData = {
    appetizers: [
      {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f",
        dietary: { vegetarian: true, glutenFree: false },
      },
      {
        id: 2,
        name: "Calamari",
        description: "Crispy fried squid rings with marinara sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        dietary: { vegetarian: false, glutenFree: true },
      },
    ],
    mainCourses: [
      {
        id: 3,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with seasonal vegetables",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
        dietary: { vegetarian: false, glutenFree: true },
      },
      {
        id: 4,
        name: "Mushroom Risotto",
        description: "Creamy Arborio rice with wild mushrooms",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
        dietary: { vegetarian: true, glutenFree: true },
      },
    ],
    desserts: [
      {
        id: 5,
        name: "Tiramisu",
        description: "Classic Italian coffee-flavored dessert",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
        dietary: { vegetarian: true, glutenFree: false },
      },
    ],
    beverages: [
      {
        id: 6,
        name: "Craft Cocktail",
        description: "Signature house-made cocktail",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
        dietary: { vegetarian: true, glutenFree: true },
      },
    ],
  };
  
  export default menuData;
  