import ServiceDetailLayout from '@/components/ServiceDetailLayout'
import Seo from '../../components/Seo' 
import tdpImage from '/assets/images/services/tdp-design/blueprint.avif' 

const serviceData = {
  title: "Traffic Diversion Plan (TDP) Design",
  mainImage: "/assets/images/services/tdp-design/sample-plan2.avif", 
  content: (
    <div className="glass-card-enhanced rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Compliant Traffic Planning</h2>
      <p className="text-gray-300">
        Our TDP designs meet all requirements of Qatar's Work Zone Traffic Management Guide (WZTMG),
        Qatar Traffic Control Manual (QTCM), and Qatar Highways Design Manual (QHDM).
      </p>
    </div>
  ),
  features: [
    "Ashghal and MOI approved designs",
    "3D modeling and visualization",
    "24-hour emergency service",
    "Full documentation for Road Opening Permits"
  ],
  stats: [
    { value: "200+", label: "Projects Designed" },
    { value: "100%", label: "Approval Rate" },
    { value: "24h", label: "Emergency Turnaround" }
  ],
  gallery: [
    "/assets/images/services/tdp-design/sample-plan.jpg", 
    "/assets/images/services/tdp-design/blueprint.avif"
  ]
}

export default function TDPDesign() {
  return (
    <> {/* NEW WRAPPER */}
      <Seo 
        title="Traffic Diversion Plan (TDP) Design in Qatar | 100% Approval Rate"
        description="Ashghal-approved TDP designs with 3D modeling. 200+ projects completed with 24-hour emergency service."
        path="/services/tdp-design"
        image={tdpImage}
      />
      <ServiceDetailLayout service={serviceData} /> 
    </>
  )
}