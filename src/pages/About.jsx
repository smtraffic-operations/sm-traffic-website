export default function About() {
   const clients = [
      { name: "Ashghal", logo: "/assets/images/clients/ashghal.png" },
      { name: "UDC", logo: "/assets/images/clients/udc.png" },
      { name: "QD", logo: "/assets/images/clients/qd.png" },
      { name: "MOI", logo: "/assets/images/clients/moi.png" }
   ]

   return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
         {/* Company Overview Section */}
         <div className="relative bg-gray-800 rounded-2xl overflow-hidden mb-24">
            <div className="absolute inset-0">
               <img
                  src="/assets/images/about/company-bg.jpg"
                  className="w-full h-full object-cover opacity-20"
                  alt="Company background"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 mix-blend-multiply"></div>
            </div>

            <div className="relative py-16 px-6 sm:px-12 lg:px-16">
               <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                  <div>
                     <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        About <span className="text-accent">SM Traffic Solutions</span>
                     </h2>
                     
                     {/* Logo added here */}
                     <div className="mt-4 flex justify-start">
                        <img
                           src="/assets/logo.png"
                           alt="SM Traffic Solutions"
                           className="h-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                     </div>

                     <div className="mt-6 h-1 w-20 bg-accent"></div>
                  </div>

                  <div className="mt-8 lg:mt-0">
                     <p className="text-lg text-gray-300">
                        Founded in Qatar with a vision to revolutionize traffic management, SM Traffic Solutions brings over 8 years of specialized expertise in creating safer, more efficient road networks.
                     </p>

                     <div className="mt-8 grid grid-cols-2 gap-6">
                        <div className="glass-card p-4 rounded-lg border border-white/10">
                           <h3 className="text-xl font-bold text-white">Our Mission</h3>
                           <p className="mt-2 text-gray-300 text-sm">
                              To deliver innovative traffic solutions that enhance safety and optimize flow across Qatar's growing infrastructure.
                           </p>
                        </div>

                        <div className="glass-card p-4 rounded-lg border border-white/10">
                           <h3 className="text-xl font-bold text-white">Our Vision</h3>
                           <p className="mt-2 text-gray-300 text-sm">
                              To be Qatar's most trusted partner for comprehensive traffic management and road safety solutions.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Stats Section */}
               <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="glass-card p-6 rounded-xl border border-white/10">
                     <p className="text-4xl font-bold text-accent">8+</p>
                     <p className="mt-2 text-gray-300">Years Experience</p>
                  </div>
                  <div className="glass-card p-6 rounded-xl border border-white/10">
                     <p className="text-4xl font-bold text-accent">500+</p>
                     <p className="mt-2 text-gray-300">Safety Audits</p>
                  </div>
                  <div className="glass-card p-6 rounded-xl border border-white/10">
                     <p className="text-4xl font-bold text-accent">100%</p>
                     <p className="mt-2 text-gray-300">Compliance</p>
                  </div>
                  <div className="glass-card p-6 rounded-xl border border-white/10">
                     <p className="text-4xl font-bold text-accent">24/7</p>
                     <p className="mt-2 text-gray-300">Support</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Clients Section (Existing) */}
         <div className="relative bg-gray-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
               <img
                  src="/assets/images/hero/hero-bg.jpg"
                  className="w-full h-full object-cover opacity-20"
                  alt="Background"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70 mix-blend-multiply"></div>
            </div>

            <div className="relative py-16 px-4 sm:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white">
                     Our <span className="text-accent">Prestigious</span> Clients
                  </h2>
                  <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                     Trusted by Qatar's leading organizations and government bodies
                  </p>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {clients.map((client, index) => (
                     <div
                        key={index}
                        className="glass-card rounded-xl p-4 flex justify-center items-center h-32 border border-white/20 hover:border-accent/50 transition-all duration-300"
                     >
                        <img
                           src={client.logo}
                           alt={client.name}
                           className="max-h-16 max-w-full object-contain"
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}