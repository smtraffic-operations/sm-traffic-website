import ServiceDetailLayout from '@/components/ServiceDetailLayout'
import Seo from '../../components/Seo' // NEW
import trafficImage from '/assets/images/services/traffic-management/team-onsite.jpg' // NEW


const serviceData = {
  title: "Traffic Management Team Services",
  mainImage: "/assets/images/services/traffic-management/team-onsite.jpg",
  content: (
    <div className="space-y-6">
      <div className="glass-card-enhanced rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Certified Professionals</h2>
        <p className="text-gray-300 mb-4">
          Our teams hold Qatari MOT certification with minimum 5 years experience
          in major infrastructure projects across Qatar.
        </p>
      </div>

      <div className="glass-card-enhanced rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Team Structure</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {['STMS', 'STMP', 'Operators'].map(role => (
            <div key={role} className="bg-gray-800/50 p-4 rounded-lg border border-white/10">
              <h4 className="font-bold text-accent">{role}</h4>
              <p className="text-sm mt-2 text-gray-300">
                {role === 'STMS' ? 'Site Traffic Management Supervisors' : 
                 role === 'STMP' ? 'Site Traffic Management Personnel' : 
                 'Equipment Operators'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  features: [
    "QCDD-certified personnel with regular training",
    "Bilingual Arabic/English teams",
    "24/7 shift availability",
    "Full PPE compliance for all operations"
  ],
  stats: [
    { value: "500+", label: "Team Members" },
    { value: "8+", label: "Years Experience" },
    { value: "100%", label: "Compliance" }
  ],
  gallery: [
    "/assets/images/services/traffic-management/audit-team.jpeg",
    "/assets/images/services/traffic-management/team-onsite2.jpg"
  ]
}

export default function TrafficManagement() {
  return (
    <> {/* NEW WRAPPER */}
      <Seo 
        title="Certified Traffic Management Teams in Qatar | 24/7 Availability"
        description="500+ QCDD-certified personnel for construction and event traffic control. Full compliance with WZTMG and QTCM standards."
        path="/services/traffic-management"
        image={trafficImage}
      />
      <ServiceDetailLayout service={serviceData} /> {/* UNCHANGED */}
    </>
  )
}