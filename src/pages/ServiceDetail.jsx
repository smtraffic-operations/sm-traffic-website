import PageLayout from '../components/PageLayout'

export default function ServiceDetail({ service }) {
  return (
    <PageLayout
      title={service.title}
      highlight={service.highlight}
      subtitle={service.subtitle}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card-enhanced rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Service Overview</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
          
          <div className="space-y-6">
            {service.features.map((feature, index) => (
              <div key={index} className="glass-card-enhanced rounded-xl overflow-hidden">
                {feature.image && (
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          {service.stats && (
            <div className="glass-card-enhanced rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="glass-card-enhanced rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Get This Service</h3>
            <p className="text-gray-300 mb-4">Contact us to discuss your specific requirements</p>
            <a 
              href="/contact" 
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}