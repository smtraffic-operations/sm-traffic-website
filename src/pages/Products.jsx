import { 
   FaShieldAlt as FiShield, 
   FaExclamationTriangle as FiAlertTriangle, 
   FaHardHat as FiHardHat, 
   FaLifeRing as FiLifeBuoy 
 } from 'react-icons/fa';
 
 export default function Products() {
   const productCategories = [
     {
       title: "Safety Wear",
       icon: <FiShield className="text-3xl" />,
       items: [
         "Reflective Safety Coverall",
         "Safety Vest",
         "Winter Safety Jacket",
         "Rain Coat",
         "Safety Shoes (Workers & Engineers)",
         "Safety Helmets"
       ]
     },
     {
       title: "Protective Gear",
       icon: <FiHardHat className="text-3xl" />,
       items: [
         "Double Side Dotted Gloves",
         "Leather Gloves",
         "Nitrile Safety Gloves",
         "Hearing Protection",
         "Dust Mask"
       ]
     },
     {
       title: "Traffic Equipment",
       icon: <FiAlertTriangle className="text-3xl" />,
       items: [
         "PVC Expandable Barrier",
         "Expandable Metal Barrier",
         "Dynamic Message Signs",
         "Electronic Arrow Boards",
         "Truck Mounted Attenuator (TMA)"
       ]
     },
     {
       title: "Road Safety",
       icon: <FiLifeBuoy className="text-3xl" />,
       items: [
         "Speed Breakers",
         "Wheel Stoppers",
         "Corner Guards",
         "Cable Protectors",
         "LED Traffic Signs"
       ]
     }
   ]
 
   return (
     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
           Our <span className="text-primary">Safety Products</span>
         </h2>
         <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
           High-quality traffic management and safety equipment
         </p>
       </div>
 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {productCategories.map((category, index) => (
           <div 
             key={index}
             className="glass-card rounded-2xl p-6 border border-white/20 hover:border-accent/50 transition-all duration-300"
           >
             <div className="flex items-center mb-4">
               <div className="p-3 bg-primary/10 rounded-lg mr-4 text-primary">
                 {category.icon}
               </div>
               <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
             </div>
             <ul className="space-y-2">
               {category.items.map((item, itemIndex) => (
                 <li key={itemIndex} className="flex items-start">
                   <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                   <span className="text-gray-700">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>
     </div>
   )
 }