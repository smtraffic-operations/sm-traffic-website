export default function ServiceCard({ service }) {
  return (
    <div className="relative h-80 rounded-2xl overflow-hidden group">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/40"></div>
      </div>
      
      {/* Glass card content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className="glass-card rounded-xl p-6 w-full border border-white/20 group-hover:border-accent/50 transition-all duration-500 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{service.title}</h3>
          <p className="text-gray-200 drop-shadow-sm">{service.description}</p>
          <button className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg border border-white/30 hover:bg-accent/80 hover:border-accent/50 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}