import { 
  FaShieldAlt as FiShield, 
  FaExclamationTriangle as FiAlertTriangle, 
  FaHardHat as FiHardHat, 
  FaLifeRing as FiLifeBuoy 
} from 'react-icons/fa'

export default function Products() {
  const productCategories = [
    {
      title: "Safety Wear",
      icon: <FiShield className="text-3xl text-accent" />,
      items: [
        "Reflective Safety Coverall",
        "Safety Vest",
        "Winter Safety Jacket",
        "Rain Coat",
        "Safety Shoes (Workers & Engineers)",
        "Safety Helmets"
      ]
    },
    {
      title: "Protective Gear",
      icon: <FiHardHat className="text-3xl text-accent" />,
      items: [
        "Double Side Dotted Gloves",
        "Leather Gloves",
        "Nitrile Safety Gloves",
        "Hearing Protection",
        "Dust Mask"
      ]
    },
    {
      title: "Traffic Equipment",
      icon: <FiAlertTriangle className="text-3xl text-accent" />,
      items: [
        "PVC Expandable Barrier",
        "Expandable Metal Barrier",
        "Dynamic Message Signs",
        "Electronic Arrow Boards",
        "Truck Mounted Attenuator (TMA)"
      ]
    },
    {
      title: "Road Safety",
      icon: <FiLifeBuoy className="text-3xl text-accent" />,
      items: [
        "Speed Breakers",
        "Wheel Stoppers",
        "Corner Guards",
        "Cable Protectors",
        "LED Traffic Signs"
      ]
    }
  ]

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-secondary/40 animate-gradient-shift"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16 px-4 py-8 rounded-xl bg-gray-900/70 backdrop-blur-sm border border-white/10 shadow-lg">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-md">
            Our <span className="text-accent drop-shadow-lg">Safety Products</span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            High-quality traffic management and personal protective equipment
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Product categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card-enhanced group rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-800/50 rounded-lg mr-4 group-hover:bg-accent/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg 
                      className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}