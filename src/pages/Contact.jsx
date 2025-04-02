import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Contact us for innovative traffic solutions in Qatar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="font-medium">+974 5599 6089</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium">info@smtrafficqatar.com</p>
                    <p className="font-medium">operations@smtrafficqatar.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-0.5 mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">Address</p>
                    <p className="font-medium">Office 214, Zone 56, Street 100</p>
                    <p className="font-medium">Building 43, Soug Nait, Doha – Qatar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday - Thursday</span>
                  <span className="font-medium">7:30 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}