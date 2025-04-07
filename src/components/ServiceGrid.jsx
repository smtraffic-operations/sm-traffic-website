import { Link } from 'react-router-dom'

const services = [
  {
    id: 'traffic-management',
    title: 'Traffic Management',
    description: 'Professional traffic control and management solutions',
    icon: '🚦'
  },
  {
    id: 'road-marking',
    title: 'Road Marking',
    description: 'High-quality road marking and signage services',
    icon: '🛣️'
  },
  {
    id: 'safety-audit',
    title: 'Safety Audit',
    description: 'Comprehensive traffic safety assessments',
    icon: '📋'
  }
  // Add more services as needed
]

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {services.map((service) => (
        <Link 
          to={`/services/${service.id}`} 
          key={service.id}
          className="group"
        >
          <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-accent/50">
            <div className="p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-6 flex items-center text-accent group-hover:text-white transition-colors">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}