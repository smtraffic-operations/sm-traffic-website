import { Link } from 'react-router-dom'

const services = [
  {
    id: 'tma',
    title: 'TMA Services',
    description: 'Traffic Management Advisor solutions',
    icon: '🚧'
  },
  {
    id: 'traffic-management',
    title: 'Traffic Management Team',
    description: 'Certified traffic control personnel',
    icon: '👷'
  },
  {
    id: 'road-marking',
    title: 'Road Marking',
    description: 'Thermoplastic & cold plastic applications',
    icon: '🛣️'
  },
  {
    id: 'tdp-design',
    title: 'TDP Design',
    description: 'Traffic Design Plans for construction',
    icon: '📐'
  },
  {
    id: 'traffic-signage',
    title: 'Traffic Signage',
    description: 'Regulatory & warning signs',
    icon: '🪧'
  },
  {
    id: 'safety-audit',
    title: 'Road Safety Audit',
    description: 'Compliance & safety assessments',
    icon: '✅'
  },
  {
    id: 'barriers',
    title: 'Safety Barriers',
    description: 'Plastic & concrete barriers',
    icon: '🚧'
  },
  // {
  //   id: 'safety-products',
  //   title: 'Safety Products',
  //   description: 'Cones, chevrons, and equipment',
  //   icon: '⚠️'
  // }
]

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Link
          key={service.id}
          to={`/services/${service.id}`}
          className="group glass-card-enhanced rounded-xl p-8 hover:border-accent/50 transition-all"
        >
          <div className="text-4xl mb-4 group-hover:text-accent transition-colors">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-300">{service.description}</p>
          <div className="mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
            Learn more <span className="ml-2">→</span>
          </div>
        </Link>
      ))}
    </div>
  )
}