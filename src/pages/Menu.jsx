import React from 'react';
    import './Menu.css';

    const menuItems = [
      { id: 1, name: 'Burger', description: 'Classic beef burger with cheese and veggies', price: 9.99, image: 'https://images.unsplash.com/photo-1550547660-d9450f8593ca?auto=format&fit=crop&w=400&q=60' },
      { id: 2, name: 'Pizza', description: 'Delicious pepperoni pizza with mozzarella cheese', price: 12.99, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=400&q=60' },
      { id: 3, name: 'Sushi', description: 'Fresh sushi platter with assorted rolls', price: 15.99, image: 'https://images.unsplash.com/photo-1613769049987-b31b641f2565?auto=format&fit=crop&w=400&q=60' },
    ];

    function Menu() {
      return (
        <div className="menu">
          <h2>Our Menu</h2>
          <ul className="menu-items">
            {menuItems.map(item => (
              <li key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-details">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default Menu;
