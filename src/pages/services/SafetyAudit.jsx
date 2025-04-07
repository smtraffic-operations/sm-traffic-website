import ServiceDetailLayout from '@/components/ServiceDetailLayout'
import { FiCheckCircle, FiAlertTriangle, FiFileText } from 'react-icons/fi'

export default function SafetyAuditPage() {
  const serviceData = {
    title: "Road Safety Audits",
    mainImage: "/assets/images/services/safety-audit/safety-gear.jpg",
    gallery: [
      "/assets/images/services/safety-audit/checklist.jpeg",
      "/assets/images/services/safety-audit/checklist2.jpeg"
    ],
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-white">Qatar RSA Standards Compliance</h2>
        <p className='text-white'>
          Our audits follow Qatar's Road Safety Audit Guidelines and international best practices 
          (ISO 39001).
        </p>

        <div className="my-8 grid md:grid-cols-3 gap-4 text-white ">
          {[
            { 
              icon: <FiAlertTriangle className="text-2xl text-accent" />,
              title: "5 Audit Stages",
              items: ["Concept", "Preliminary", "Detailed", "Pre-opening", "Post-construction"]
            },
            {
              icon: <FiFileText className="text-2xl text-accent" />,
              title: "Deliverables",
              items: ["Risk matrix", "Corrective plans", "Priority rankings"]
            }
          ].map((section, i) => (
            <div key={i} className="bg-gray-900/50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                {section.icon}
                <h3 className="ml-2 font-bold">{section.title}</h3>
              </div>
              <ul className="space-y-1">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start text-sm">
                    <FiCheckCircle className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
    features: [
      "500+ audits completed in Qatar",
      "Ashghal-approved audit team",
      "Digital reporting dashboard",
      "3-day standard turnaround"
    ]
  }

  return <ServiceDetailLayout service={serviceData} />
}