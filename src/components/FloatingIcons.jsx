import React from 'react';
import { logos } from "../data/data.js";

const FloatingIcons = () => {
    return (
       <section className="w-full min-h-300 p-[10%] ">
           <div>
               <h2>A growing library of</h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {logos.map((image) => (
                       <img
                           key={image.id}
                           src={image.src}
                           alt={image.alt}
                           className="w-25 h-25 object-cover rounded-lg"
                       />
                   ))}
               </div>
           </div>
       </section>
    )
}
export default FloatingIcons
