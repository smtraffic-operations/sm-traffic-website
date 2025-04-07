import ContactForm from '../components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-secondary/40 animate-gradient-shift"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16 px-4 py-8 rounded-xl bg-gray-900/70 backdrop-blur-sm border border-white/10 shadow-lg">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-md">
            Get in <span className="text-accent drop-shadow-lg">Touch</span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Contact us for innovative traffic solutions in Qatar
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card-enhanced rounded-xl p-8 border border-white/10">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="glass-card-enhanced rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <FaMapMarkerAlt className="text-accent mr-3" />
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <FaPhone className="text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="font-medium text-white">+974 5599 6089</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="font-medium text-white">info@smtrafficqatar.com</p>
                    <p className="font-medium text-white">operations@smtrafficqatar.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="font-medium text-white">Office 214, Zone 56, Street 100</p>
                    <p className="font-medium text-white">Building 43, Soug Nait, Doha – Qatar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card-enhanced rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <FaClock className="text-accent mr-3" />
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday - Thursday</span>
                  <span className="font-medium text-white">7:30 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Friday</span>
                  <span className="font-medium text-white">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-medium text-white">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}