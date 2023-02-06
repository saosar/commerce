import React from 'react';
import './ShopList.css'
import { ShopContext } from '../ShopContext'

function ShopList() {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const { info } = React.useContext(ShopContext);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const uniqueCategories = [...new Set(info.map(item => item.category))];

  return (
    <div>
      <label htmlFor="categories">Seleccione una categoría:</label>
      <select id="categories" onChange={handleCategoryChange}>
        <option value="">Todas</option>
        {uniqueCategories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
      {/* SOLO MUESTRO LA API SI ESCRIBEN ALGO, VACIO NO */}
      {selectedCategory.length > 0 && (
      <ul>
        {info
          .filter(item => selectedCategory === '' || item.category === selectedCategory)
          .map(item => (
            <li key={item._id}>
              <p>Producto: {item.name}
              <br/> Categoría: {item.category}
              <br/> Precio: {item.price}</p>
            </li>
          ))}
      </ul>
      )}
    </div>
  );
}

export { ShopList };