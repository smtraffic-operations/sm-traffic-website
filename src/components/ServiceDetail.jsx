import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function ServiceDetail({ service }) {
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
        
        {/* Rest of your existing ServiceDetail content */}
      </div>
    </div>
  )
}