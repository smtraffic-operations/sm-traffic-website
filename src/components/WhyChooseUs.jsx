export default function WhyChooseUs() {
  const features = [
    {
      title: "Proven Expertise",
      description: "8+ years of experience in traffic management across Qatar",
      icon: "🏆",
      bgImage: "/assets/images/expertise-bg.jpg"
    },
    {
      title: "Regulatory Compliance",
      description: "Full compliance with Ashghal, UDC, QD, and MOI regulations",
      icon: "📜",
      bgImage: "/assets/images/compliance-bg.jpg"
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies for each client's unique needs",
      icon: "🛠️",
      bgImage: "/assets/images/solutions-bg.jpg"
    },
    {
      title: "Innovation & Safety",
      description: "Latest technology prioritizing safety and efficiency",
      icon: "🔬",
      bgImage: "/assets/images/innovation-bg.jpg"
    }
  ]

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-secondary/40 animate-gradient-shift"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Improved heading section */}
        <div className="text-center mb-16 px-4 py-8 rounded-xl bg-gray-900/70 backdrop-blur-sm border border-white/10 shadow-lg">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-md">
            Why Choose <span className="text-accent drop-shadow-lg">SM Traffic Solutions</span>?
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering excellence in Qatar's traffic management sector
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden group"
            >
              {/* Background image with enhanced overlay */}
              <div className="absolute inset-0">
                <img
                  src={feature.bgImage}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/40"></div>
              </div>
              
              {/* Enhanced glass card */}
              <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
                <div className="glass-card rounded-xl p-6 w-full h-full flex flex-col justify-center items-center border border-white/20 group-hover:border-accent/50 transition-all duration-500 backdrop-blur-md">
                  <span className="text-5xl mb-4 drop-shadow-md">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{feature.title}</h3>
                  <p className="text-gray-200 drop-shadow-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}