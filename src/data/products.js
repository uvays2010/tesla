export const products = [
  {
    id: 'wall-connector',
    name: 'Wall Connector',
    category: 'Charging',
    price: 475,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Wall-Connector-Main-Hero-Desktop.jpg',
    description: 'The fastest way to charge at home. Up to 44 miles of range per hour.',
    features: ['Up to 48A', 'Wi-Fi connectivity', 'Easy installation', 'Indoor/Outdoor'],
    stock: 50
  },
  {
    id: 'mobile-connector',
    name: 'Mobile Connector',
    category: 'Charging',
    price: 230,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mobile-Connector-Main-Hero-Desktop.jpg',
    description: 'Portable charging solution for home or on the go.',
    features: ['NEMA adapters', 'Compact design', 'Up to 30A', 'Travel-ready'],
    stock: 80
  },
  {
    id: 'floor-mats',
    name: 'All-Weather Floor Mats',
    category: 'Interior',
    price: 145,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Floor-Mats.jpg',
    description: 'Durable all-weather protection for your vehicle interior.',
    features: ['Custom fit', 'Easy to clean', 'Odor-resistant', 'Multiple models'],
    stock: 120
  },
  {
    id: 'roof-rack',
    name: 'Roof Rack',
    category: 'Exterior',
    price: 400,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roof-Rack.jpg',
    description: 'Aerodynamic roof rack system for extra cargo capacity.',
    features: ['Lockable', 'Quick install', 'Aerodynamic', 'Up to 150 lbs'],
    stock: 35
  },
  {
    id: 'tesla-tee',
    name: 'Tesla Wordmark Tee',
    category: 'Apparel',
    price: 35,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Tesla-Tee.jpg',
    description: 'Premium cotton t-shirt with Tesla wordmark.',
    features: ['100% cotton', 'Unisex fit', 'Multiple colors', 'Sizes S–XXL'],
    stock: 200
  },
  {
    id: 'cybertruck-cap',
    name: 'Cybertruck Cap',
    category: 'Apparel',
    price: 40,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Cap.jpg',
    description: 'Structured cap featuring Cybertruck design.',
    features: ['Adjustable', 'Embroidered logo', 'One size', 'Official merchandise'],
    stock: 150
  },
  {
    id: 'key-fob',
    name: 'Key Fob',
    category: 'Accessories',
    price: 150,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Key-Fob.jpg',
    description: 'Premium key fob with customizable buttons.',
    features: ['Bluetooth', 'Custom actions', 'Leather finish', 'Long battery'],
    stock: 60
  },
  {
    id: 'center-console',
    name: 'Center Console Trays',
    category: 'Interior',
    price: 50,
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Console-Tray.jpg',
    description: 'Organized storage trays for center console.',
    features: ['Perfect fit', 'Non-slip', 'Easy install', 'Model specific'],
    stock: 90
  }
]

export const getProductById = (id) => products.find(p => p.id === id)
export const getProductsByCategory = (cat) => products.filter(p => p.category === cat)
export const categories = [...new Set(products.map(p => p.category))]
