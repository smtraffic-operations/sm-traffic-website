import ServiceDetailLayout from '@/components/ServiceDetailLayout'
import { FiShield, FiZap, FiBox } from 'react-icons/fi'

export default function BarriersPage() {
  const serviceData = {
    title: "Barrier Solutions",
    mainImage: "/assets/images/services/barriers/barrier.jpg",
    gallery: [
      "/assets/images/services/barriers/electronic-chevron.png",
      "/assets/images/services/barriers/plastic-barriers.jpeg",
      "/assets/images/services/barriers/concrete-barriers.jpeg",
      
    ],
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-white">WZTMG-Compliant Protection</h2>
        <p className='text-white'>
          Our barriers meet Qatar's Work Zone Traffic Management Guide requirements 
          for all project types.
        </p>

        <div className="my-8 grid md:grid-cols-3 gap-6 text-white">
          {[
            {
              icon: <FiBox className="text-2xl text-accent" />,
              title: "Plastic Barriers",
              specs: [
                "900mm height",
                "22kg weight",
                "Stackable design"
              ]
            },
            {
              icon: <FiShield className="text-2xl text-accent" />,
              title: "Concrete Barriers",
              specs: [
                "Jersey profile",
                "2000kg/m weight",
                "MOI-approved"
              ]
            },
            {
              icon: <FiZap className="text-2xl text-accent" />,
              title: "Electronic Chevrons",
              specs: [
                "Solar-powered",
                "48h battery backup",
                "Wireless control"
              ]
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                {item.icon}
                <h3 className="ml-2 font-bold">{item.title}</h3>
              </div>
              <ul className="space-y-2 mt-2">
                {item.specs.map((spec, j) => (
                  <li key={j} className="text-sm flex items-start">
                    <span className="text-accent mr-1">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
    features: [
      "Quick deployment systems",
      "Retroreflective markings",
      "Anti-climb designs",
      "Custom branding available"
    ]
  }

  return <ServiceDetailLayout service={serviceData} />
}