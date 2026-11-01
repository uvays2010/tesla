export const vehicles = [
  {
    id: 'model-s',
    name: 'Model S',
    tagline: 'Plaid',
    category: 'Sedan',
    price: 74990,
    priceLabel: 'From $74,990',
    range: 405,
    acceleration: '1.99s 0-60 mph',
    topSpeed: '200 mph',
    peakPower: '1,020 hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.jpg',
    gallery: [
      'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Exterior-Hero-Desktop-Global.jpg',
      'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Hero-Desktop-Global.jpg'
    ],
    colors: [
      { name: 'Solid Black', hex: '#000000', price: 0 },
      { name: 'Pearl White', hex: '#FFFFFF', price: 1500 },
      { name: 'Deep Blue Metallic', hex: '#1E3A5F', price: 1500 },
      { name: 'Ultra Red', hex: '#B8131A', price: 2500 },
      { name: 'Stealth Grey', hex: '#5C5E62', price: 1500 }
    ],
    wheels: [
      { name: '19" Tempest Wheels', price: 0 },
      { name: '21" Arachnid Wheels', price: 4500 }
    ],
    interiors: [
      { name: 'All Black', price: 0 },
      { name: 'Black and White', price: 2000 },
      { name: 'Cream', price: 2000 }
    ],
    specs: {
      battery: '100 kWh',
      drivetrain: 'Tri Motor AWD',
      seating: '5 Adults',
      cargo: '28 cu ft',
      display: '17" Cinematic Display',
      warranty: '4 years / 50,000 miles'
    },
    highlights: [
      'Fastest accelerating production car',
      'Longest range of any EV',
      'Unparalleled performance',
      'Advanced Autopilot capable'
    ]
  },
  {
    id: 'model-3',
    name: 'Model 3',
    tagline: 'Performance',
    category: 'Sedan',
    price: 38990,
    priceLabel: 'From $38,990',
    range: 341,
    acceleration: '2.9s 0-60 mph',
    topSpeed: '162 mph',
    peakPower: '510 hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg',
    gallery: [],
    colors: [
      { name: 'Solid Black', hex: '#000000', price: 0 },
      { name: 'Pearl White', hex: '#FFFFFF', price: 1000 },
      { name: 'Deep Blue Metallic', hex: '#1E3A5F', price: 1000 },
      { name: 'Ultra Red', hex: '#B8131A', price: 2000 },
      { name: 'Stealth Grey', hex: '#5C5E62', price: 1000 }
    ],
    wheels: [
      { name: '18" Photon Wheels', price: 0 },
      { name: '19" Nova Wheels', price: 1500 }
    ],
    interiors: [
      { name: 'All Black', price: 0 },
      { name: 'Black and White', price: 1000 }
    ],
    specs: {
      battery: '82 kWh',
      drivetrain: 'Dual Motor AWD',
      seating: '5 Adults',
      cargo: '23 cu ft',
      display: '15.4" Touchscreen',
      warranty: '4 years / 50,000 miles'
    },
    highlights: [
      'Most affordable Tesla',
      'Excellent efficiency',
      'Minimalist interior',
      'Over-the-air updates'
    ]
  },
  {
    id: 'model-x',
    name: 'Model X',
    tagline: 'Plaid',
    category: 'SUV',
    price: 79990,
    priceLabel: 'From $79,990',
    range: 348,
    acceleration: '2.5s 0-60 mph',
    topSpeed: '155 mph',
    peakPower: '1,020 hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Main-Hero-Desktop-LHD.jpg',
    gallery: [],
    colors: [
      { name: 'Solid Black', hex: '#000000', price: 0 },
      { name: 'Pearl White', hex: '#FFFFFF', price: 1500 },
      { name: 'Deep Blue Metallic', hex: '#1E3A5F', price: 1500 },
      { name: 'Ultra Red', hex: '#B8131A', price: 2500 },
      { name: 'Stealth Grey', hex: '#5C5E62', price: 1500 }
    ],
    wheels: [
      { name: '20" Cyberstream Wheels', price: 0 },
      { name: '22" Turbine Wheels', price: 5500 }
    ],
    interiors: [
      { name: 'All Black', price: 0 },
      { name: 'Black and White', price: 2000 },
      { name: 'Cream', price: 2000 }
    ],
    specs: {
      battery: '100 kWh',
      drivetrain: 'Tri Motor AWD',
      seating: 'Up to 7 Adults',
      cargo: '88 cu ft',
      display: '17" Cinematic Display',
      warranty: '4 years / 50,000 miles'
    },
    highlights: [
      'Falcon Wing doors',
      'Highest towing capacity',
      'Spacious family SUV',
      'Unmatched safety'
    ]
  },
  {
    id: 'model-y',
    name: 'Model Y',
    tagline: 'Long Range',
    category: 'SUV',
    price: 42990,
    priceLabel: 'From $42,990',
    range: 320,
    acceleration: '4.8s 0-60 mph',
    topSpeed: '135 mph',
    peakPower: '384 hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-Global.jpg',
    gallery: [],
    colors: [
      { name: 'Solid Black', hex: '#000000', price: 0 },
      { name: 'Pearl White', hex: '#FFFFFF', price: 1000 },
      { name: 'Deep Blue Metallic', hex: '#1E3A5F', price: 1000 },
      { name: 'Ultra Red', hex: '#B8131A', price: 2000 },
      { name: 'Stealth Grey', hex: '#5C5E62', price: 1000 }
    ],
    wheels: [
      { name: '19" Gemini Wheels', price: 0 },
      { name: '20" Induction Wheels', price: 2000 }
    ],
    interiors: [
      { name: 'All Black', price: 0 },
      { name: 'Black and White', price: 1000 }
    ],
    specs: {
      battery: '75 kWh',
      drivetrain: 'Dual Motor AWD',
      seating: 'Up to 7 Adults',
      cargo: '76 cu ft',
      display: '15.4" Touchscreen',
      warranty: '4 years / 50,000 miles'
    },
    highlights: [
      'Best-selling EV worldwide',
      'Versatile crossover',
      'Optional third row',
      'Excellent value'
    ]
  },
  {
    id: 'cybertruck',
    name: 'Cybertruck',
    tagline: 'Beast',
    category: 'Truck',
    price: 99990,
    priceLabel: 'From $99,990',
    range: 320,
    acceleration: '2.6s 0-60 mph',
    topSpeed: '130 mph',
    peakPower: '845 hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Main-Hero-Desktop.jpg',
    gallery: [],
    colors: [
      { name: 'Stainless Steel', hex: '#C0C0C0', price: 0 },
      { name: 'Foundation Series', hex: '#1A1A1A', price: 0 }
    ],
    wheels: [
      { name: '20" Cyber Wheels', price: 0 },
      { name: '20" Cyber Wheels with All-Terrain Tires', price: 3500 }
    ],
    interiors: [
      { name: 'All Black', price: 0 },
      { name: 'Black and White', price: 0 }
    ],
    specs: {
      battery: '123 kWh',
      drivetrain: 'Tri Motor AWD',
      seating: '5 Adults',
      cargo: '100+ cu ft',
      display: '18.5" Touchscreen',
      warranty: '4 years / 50,000 miles'
    },
    highlights: [
      'Exoskeleton design',
      'Armor glass',
      'Adaptive air suspension',
      'Tow up to 11,000 lbs'
    ]
  },
  {
    id: 'roadster',
    name: 'Roadster',
    tagline: 'Upcoming',
    category: 'Sports',
    price: 200000,
    priceLabel: 'From $200,000',
    range: 620,
    acceleration: '1.9s 0-60 mph',
    topSpeed: '250+ mph',
    peakPower: '1,000+ hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-Main-Hero-Desktop.jpg',
    gallery: [],
    colors: [
      { name: 'Solid Black', hex: '#000000', price: 0 },
      { name: 'Pearl White', hex: '#FFFFFF', price: 0 },
      { name: 'Ultra Red', hex: '#B8131A', price: 0 }
    ],
    wheels: [
      { name: 'Performance Wheels', price: 0 }
    ],
    interiors: [
      { name: 'Carbon Fiber', price: 0 }
    ],
    specs: {
      battery: '200 kWh',
      drivetrain: 'Tri Motor AWD',
      seating: '4 Adults',
      cargo: 'TBD',
      display: 'TBD',
      warranty: 'TBD'
    },
    highlights: [
      'Quickest production car ever',
      'SpaceX package option',
      'Removable glass roof',
      'Coming soon'
    ],
    comingSoon: true
  },
  {
    id: 'semi',
    name: 'Semi',
    tagline: 'Electric',
    category: 'Commercial',
    price: 150000,
    priceLabel: 'From $150,000',
    range: 500,
    acceleration: '20s 0-60 mph (with load)',
    topSpeed: '65 mph',
    peakPower: '1,000+ hp',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Semi-Main-Hero-Desktop.jpg',
    gallery: [],
    colors: [
      { name: 'Tesla Red', hex: '#E31937', price: 0 },
      { name: 'White', hex: '#FFFFFF', price: 0 }
    ],
    wheels: [
      { name: 'Standard', price: 0 }
    ],
    interiors: [
      { name: 'Standard', price: 0 }
    ],
    specs: {
      battery: 'TBD',
      drivetrain: 'Quad Motor',
      seating: '2',
      cargo: 'Class 8',
      display: 'Dual Touchscreens',
      warranty: 'TBD'
    },
    highlights: [
      'Lowest cost of ownership',
      'Autopilot for trucks',
      'Megacharger network',
      'Revolutionary design'
    ],
    comingSoon: true
  }
]

export const getVehicleById = (id) => vehicles.find(v => v.id === id)
export const getVehiclesByCategory = (category) => vehicles.filter(v => v.category === category)
