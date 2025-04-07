import ServiceDetailLayout from '@/components/ServiceDetailLayout'

const serviceData = {
  title: "Traffic Diversion Plan (TDP) Design",
  mainImage: "/assets/images/services/tdp-design/blueprint.jpg", // Add appropriate image
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
    "/assets/images/services/tdp-design/sample-plan.jpg", // Add appropriate images
    "/assets/images/services/tdp-design/3d-model.png"
  ]
}

export default function TDPDesign() {
  return <ServiceDetailLayout service={serviceData} />
}