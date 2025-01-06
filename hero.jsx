
import React from "react";
import amzon from "../images/amazon.png";
import flipkart from "../images/flipkart.png";
import shoes from "../images/hero-image.png"
const Herosection=()=>{
    return(
       <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque cumque facere quod odit, in dolor expedita id a porro. Sit numquam mollitia reiciendis ipsum suscipit autem? Quisquam, impedit magni.</p>
    
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secbutton">Categorty</button>
          </div>

          <div className="shoping">
           <p>also available here</p>
             <div className="brand-icons">
              <img src={amzon} alt="heo"/>
              <img src={flipkart} alt="heo"/>
             </div> 

          </div>
        </div>

        <div className="hero-image">
           <img src={shoes} alt="shoes"/>
        </div>
       </main>
    )
}
export default Herosection;