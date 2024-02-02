//import logo from './logo.svg';
import React from 'react';
import Products from './componenets/Products';
//import ProductForm from './componenets/ProductForm';
import NewProduct from './componenets/NewProduct';

const App =() => {
  const products = [
      {
        id: 'P1',
        title: 'Nirma',
        amount: 100,
        date: new Date(2021,8,10),
      },
      {
        id: 'P2',
        title: 'SurfExcel',
        amount: 200,
        date: new Date(2021,8,10),
      },
      {
        id: 'P3',
        title: 'Rin',
        amount: 300,
        date: new Date(2021,2,2),
      },
      {
        id: 'P4',
        title: 'Maggi',
        amount: 500,
        date: new Date(2021,12,28),
      },
  ];

  function printProductData(data)
  {
    console.log("I am inside APP.js");
    console.log(data);
  }
  return(
    <div>
      <NewProduct pranay={printProductData}/>
      <Products items={products}/>
    </div>
  );
}

export default App;
