import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ServiceDetailLayout({ service }) {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/services" 
          className="inline-flex items-center text-accent mb-8 hover:underline"
        >
          <FiArrowLeft className="mr-2" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">{service.title}</h1>
            <div className="prose prose-invert max-w-none">
              {service.content}
            </div>
            
            <div className="mt-12 glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-accent">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-gray-200">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <img 
              src={service.mainImage} 
              alt={service.title}
              className="rounded-xl shadow-lg w-full h-auto max-h-96 object-cover"
              loading="lazy"
            />
            {service.gallery?.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {service.gallery.map((img, i) => (
                  <img 
                    key={i}
                    src={img}
                    alt={`${service.title} example ${i+1}`}
                    className="rounded-lg h-40 w-full object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}