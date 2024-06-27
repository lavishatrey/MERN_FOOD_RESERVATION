import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES AND OUR MENU</h1>
                <p>
Discover the culinary delights that our customers can't get enough of! From our rich and creamy Lobster Bisque to the perfectly grilled Ribeye Steak, and the heavenly Tiramisu for dessert, Lavish Eats offers an array of popular dishes that cater to diverse tastes. Each dish is crafted with the finest ingredients and utmost care, ensuring an unforgettable dining experience with every bite. Indulge in our bestsellers and experience the flavors that make Lavish Eats a favorite among food lovers.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
