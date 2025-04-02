export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="/assets/images/hero/hero-bg.jpg"
          alt="Traffic management in Qatar"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 mix-blend-multiply"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text content with animated border */}
        <div className="relative max-w-3xl rounded-2xl p-[2px] bg-gradient-to-r from-primary to-accent hover:opacity-80 transition-opacity duration-500 mb-12 lg:mb-0">
          <div className="rounded-2xl p-8 sm:p-10 bg-gray-900/70 backdrop-blur-sm">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Innovative Traffic Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-200 max-w-3xl">
              For a Safer Tomorrow in Qatar
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="inline-block bg-accent border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 text-center"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-md py-3 px-8 font-medium text-white hover:bg-white/30 transition-all duration-300 text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Company logo - clean version */}
        <div className="lg:ml-8 flex justify-center">
          <img
            src="/assets/logo.png"
            alt="SM Traffic Solutions"
            className="h-48 w-auto object-contain hover:scale-105 transition-transform duration-300 filter hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]"
          />
        </div>
      </div>
    </div>
  )
}