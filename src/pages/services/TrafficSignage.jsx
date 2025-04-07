import ServiceDetailLayout from '@/components/ServiceDetailLayout'

const serviceData = {
  title: "Traffic Signage Solutions",
  mainImage: "/assets/images/services/products/road-signs.jpg",
  content: (
    <div className="glass-card-enhanced rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Regulatory & Warning Signs</h2>
      <p className="text-gray-300">
        We manufacture, install, and maintain all traffic signs in compliance with
        Qatar Traffic Control Manual (QTCM) and Work Zone Traffic Management Guide (WZTMG).
      </p>
    </div>
  ),
  features: [
    "MUTCD-compliant with Qatari adaptations",
    "Retroreflective materials for visibility",
    "Bilingual (Arabic/English) signage",
    "48-hour replacement guarantee"
  ],
  stats: [
    { value: "5000+", label: "Signs Installed" },
    { value: "10+", label: "Year Lifespan" },
    { value: "48h", label: "Replacement Time" }
  ],
  gallery: [
    "/assets/images/services/products/electronic-chevron.png",
    "/assets/images/services/products/traffic-cones.png"
  ]
}

export default function TrafficSignage() {
  return <ServiceDetailLayout service={serviceData} />
}