import { FiArrowRight } from 'react-icons/fi'

export default function HomeServices() {
  const services = [
    {
      title: "Traffic Management",
      icon: "🚦",
      highlights: ["Road closures", "Lane management", "Event traffic"],
      borderColor: "border-primary/30",
      hoverBorder: "hover:border-primary/60"
    },
    {
      title: "Road Safety",
      icon: "🛡️", 
      highlights: ["Audits", "Compliance", "Risk assessment"],
      borderColor: "border-secondary/30",
      hoverBorder: "hover:border-secondary/60"
    },
    {
      title: "Infrastructure",
      icon: "🛣️",
      highlights: ["Design", "Diversion plans", "Signage"],
      borderColor: "border-accent/30",
      hoverBorder: "hover:border-accent/60"
    }
  ]

  return (
    <div className="bg-gray-800/50 py-16 backdrop-blur-sm">
      {/* Gradient overlay matching WhyChooseUs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-900/50 to-secondary/20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl drop-shadow-md">
            Our <span className="text-accent">Core Services</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Specialized solutions for Qatar's traffic challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 backdrop-blur-md bg-gray-900/50 border ${service.borderColor} ${service.hoverBorder} transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
            >
              <div className="text-4xl mb-4 text-white">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.highlights.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="/services" 
                className="inline-flex items-center text-accent font-medium group"
              >
                Explore more
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}