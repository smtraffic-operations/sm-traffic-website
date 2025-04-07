import ServiceDetailLayout from '@/components/ServiceDetailLayout'

const serviceData = {
  title: "Road Marking Services",
  mainImage: "/assets/images/services/road-marking/thermoplastic-application.png",
  content: (
    <div className="glass-card-enhanced rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Precision Marking Solutions</h2>
      <p className="text-gray-300">
        Our road marking services comply with Qatar Construction Standards (QCS 2014)
        and Qatar Traffic Control Manual (QTCM) requirements.
      </p>
    </div>
  ),
  features: [
    "Thermoplastic markings (3+ years lifespan)",
    "Cold plastic applications for special needs",
    "Retroreflective bead technology",
    "Bilingual (Arabic/English) markings available"
  ],
  stats: [
    { value: "1000+", label: "KM Marked" },
    { value: "72h", label: "Cure Time" },
    { value: "5+", label: "Year Warranty" }
  ],
  gallery: [
    "/assets/images/services/road-marking/road-markings.jpg",
    "/assets/images/services/road-marking/road-markings2.jpeg"
  ]
}

export default function RoadMarking() {
  return <ServiceDetailLayout service={serviceData} />
}