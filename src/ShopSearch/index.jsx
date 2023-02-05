import React from 'react';
import './ShopSearch.css';
import { ShopContext } from '../ShopContext';

function ShopSearch() {
 // PARA GUARDAR DE MANERA LOCAL LO QUE ESCRIBIO EL USUARIO   ///USUARIO
  const {searchValue, setSearchValue} = React.useContext(ShopContext);
  const onSearchValueChange = (event) => {  /* fn que permite que llame actualizar esgtado*/ 
    console.log(event.target.value); /*busca en consola donde esta el valor y pongo con punto*/
    setSearchValue(event.target.value);
  };

  return (
   
    <input 
      className="ShopSearch" 
      placeholder="Buscar producto"
      // info={info}
      value={searchValue} 
      onChange={onSearchValueChange}  /* cuando input cambie ejecuta funcion*/

    />
  );
}

export { ShopSearch };