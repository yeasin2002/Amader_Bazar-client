export const heroDesc = [
  "Elevate your fitness journey with our Smart Fitness Tracker! This sleek and stylish device seamlessly tracks your steps, monitors your heart rate, and analyzes your sleep patterns. Stay motivated with real-time notifications and personalized fitness goals. Embrace a healthier lifestyle with cutting-edge technology at your fingertips.",
  "Experience timeless elegance with our handcrafted leather wallet. Meticulously crafted by skilled artisans, each wallet exudes sophistication and durability. With ample card slots, a secure coin pocket, and a slim design, it's the perfect blend of style and functionality. Elevate your everyday carry with this luxurious accessory.  ",
  "Transform your space into a haven of relaxation with our Aromatherapy Essential Oil Diffuser. Immerse yourself in soothing aromas that promote stress relief and tranquility. With customizable LED lights and a whisper-quiet operation, this diffuser is a must-have for creating a serene atmosphere at home.",
  "Unleash your culinary prowess with our Professional Chef's Knife Set. Precision meets perfection in every blade, ensuring effortless chopping, slicing, and dicing. Crafted from high-quality stainless steel, these knives are a chef's dream. Elevate your kitchen skills and create culinary masterpieces with this essential set.",
  "Experience the ultimate freedom with our Rechargeable Wireless Earbuds. Enjoy crystal-clear sound and a comfortable fit that stays in place during workouts or daily commutes. With noise-canceling technology and a sleek charging case, these earbuds are your perfect companion for a wireless audio experience",
  "Make a positive impact on the environment with our Eco-Friendly Reusable Water Bottle. Crafted from durable and BPA-free materials, this stylish bottle is your sustainable companion on the go. Stay hydrated in style while reducing your carbon footprint with every refill.",
  "Capture memories in retro style with our Vintage-Inspired Polaroid Camera. This instant film camera combines nostalgia with modern technology, producing unique, tangible memories in seconds. Perfect for parties, events, or spontaneous adventures, it's a must-have for any photography enthusiast.  ",
  "Wrap yourself in warmth and luxury with our Cozy Knit Blanket. Made from ultra-soft, high-quality yarn, this blanket is perfect for chilly evenings on the couch or as a stylish addition to your bedroom. Embrace comfort and style with this timeless and versatile home accessory.",
  "Effortlessly blend style and functionality with our Travel-Friendly Laptop Backpack. Designed with multiple compartments, padded sleeves, and a sleek modern aesthetic, this backpack is perfect for the urban explorer. Keep your essentials organized and your devices secure while on the move.",
  "Product: Organic Matcha Green Tea Powder  Revitalize your mind and body with our Organic Matcha Green Tea Powder. Sourced from the finest tea leaves, this ceremonial-grade matcha is packed with antioxidants and provides a smooth, vibrant flavor. Elevate your tea ritual and embrace the numerous health benefits of this Japanese green tea",
]

export const randomDesc = () => {
  const randomIndex = Math.round(Math.random() * heroDesc.length - 1)
  return heroDesc[randomIndex]
}
