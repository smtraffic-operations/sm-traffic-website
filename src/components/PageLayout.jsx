export default function PageLayout({ title, subtitle, highlight, children }) {
   return (
     <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
       {/* Gradient background */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/20 to-secondary/40 animate-gradient-shift"></div>
       </div>
 
       <div className="relative max-w-7xl mx-auto">
         <div className="text-center mb-16 px-4 py-8 rounded-xl bg-gray-900/70 backdrop-blur-sm border border-white/10 shadow-lg">
           <h2 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-md">
             {title} <span className="text-accent drop-shadow-lg">{highlight}</span>
           </h2>
           {subtitle && (
             <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
               {subtitle}
             </p>
           )}
           <div className="mt-6 h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
         </div>
 
         {children}
       </div>
     </div>
   )
 }