import ServiceDetailLayout from '@/components/ServiceDetailLayout'
import { FiShield, FiUsers, FiCheckCircle } from 'react-icons/fi'

const serviceData = {
  title: "Traffic Management Advice & Consultation",
  mainImage: "/assets/images/services/tma/onsite-consultation.jpg",
  content: (
    <div className="space-y-6">
      <div className="glass-card-enhanced rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Our Advisory Services</h3>
        <p className="text-gray-300 mb-4">
          We provide comprehensive traffic management consultation for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>Construction site traffic plans</li>
          <li>Road diversion strategies</li>
          <li>Special event traffic management</li>
          <li>Regulatory compliance audits</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card-enhanced rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Our Team</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Project Managers with 8+ years experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Certified STMS (Site Traffic Management Supervisors)</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Bilingual Arabic/English consultants</span>
            </li>
          </ul>
        </div>

        <div className="glass-card-enhanced rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">Compliance Standards</h3>
          <div className="flex flex-wrap gap-2">
            {['WZTMG', 'QTCM', 'Ashghal', 'UDC'].map(standard => (
              <span key={standard} className="px-3 py-1 bg-gray-400 rounded-full text-sm">
                {standard} Approved
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  features: [
    "Project Management of temporary traffic schemes",
    "On-Site Consultation during critical phases",
    "Regulatory Compliance with Qatari standards",
    "Bilingual Arabic/English support"
  ],
  gallery: [
    "/assets/images/services/tma/project-management.jpg",
    "/assets/images/services/tma/consultation.jpg" 
  ]
}

export default function TMA() {
  return <ServiceDetailLayout service={serviceData} />
}