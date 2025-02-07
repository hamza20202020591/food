import React from 'react';
    import './RestaurantList.css';

    const restaurants = [
      { id: 1, name: 'Delicious Burgers', cuisine: 'Burgers', rating: 4.5, image: 'https://images.unsplash.com/photo-1568901342037-24c7e8a4cbae?auto=format&fit=crop&w=400&q=80' },
      { id: 2, name: 'Spicy Tacos', cuisine: 'Mexican', rating: 4.2, image: 'https://images.unsplash.com/photo-1553909534-935429a2489f?auto=format&fit=crop&w=400&q=80' },
      { id: 3, name: 'Fresh Sushi', cuisine: 'Japanese', rating: 4.8, image: 'https://images.unsplash.com/photo-1613769049987-b31b641f2565?auto=format&fit=crop&w=400&q=80' },
    ];

    function RestaurantList() {
      return (
        <div className="restaurant-list">
          <h2>Popular Restaurants</h2>
          <ul className="restaurants">
            {restaurants.map(restaurant => (
              <li key={restaurant.id} className="restaurant-item">
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                <div className="restaurant-details">
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.cuisine}</p>
                  <div className="rating">Rating: {restaurant.rating}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default RestaurantList;
