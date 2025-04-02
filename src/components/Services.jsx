import ServiceCard from './ServiceCard'

const services = [
  {
    title: "Traffic Management Operations",
    description: "Comprehensive solutions for work zones and events",
    image: "/assets/images/services/traffic-management.jpg"
  },
  {
    title: "Road Design & Diversion",
    description: "Expert planning for safe traffic flow during construction",
    image: "/assets/images/services/road-design.jpg"
  },
  {
    title: "Road Safety Audits",
    description: "Professional safety evaluations to minimize risks",
    image: "/assets/images/services/safety-audit.jpg"
  },
  {
    title: "Traffic Signages",
    description: "High-quality signage installation and maintenance",
    image: "/assets/images/services/traffic-signs.jpg"
  },
  {
    title: "Road Markings",
    description: "Durable and compliant road marking solutions",
    image: "/assets/images/services/road-markings.jpg"
  },
  {
    title: "Safety Products",
    description: "Premium safety equipment for traffic management",
    image: "/assets/images/services/safety-products.jpg"
  }
]

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  )
}