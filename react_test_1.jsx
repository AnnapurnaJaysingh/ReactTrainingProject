import React, { useState } from 'react';

const plantsData = [
  { id: 1, name: 'Aloe Vera' },
  { id: 2, name: 'Snake Plant' },
  { id: 3, name: 'Peace Lily' },
];

function PlantShop() {
  const [cart, setCart] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState({});
  
  const handleAddToCart = (plant) => {
    setCart([...cart, plant]);
    setDisabledButtons({ ...disabledButtons, [plant.id]: true });
  };

  return (
    <div>
      <h2>🛒 Cart: {cart.length}</h2>
      <ul>
        {plantsData.map((plant) => (
          <li key={plant.id}>
            {plant.name}
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={disabledButtons[plant.id]}
            >
              {disabledButtons[plant.id] ? 'Added' : 'Add to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantShop;
