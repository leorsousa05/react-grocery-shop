import React from 'react'
import MenuFoods from './components/MenuFoods/MenuFoods';
import MenuHeader from './components/MenuHeader/MenuHeader';
import { FoodsContextProvider } from './hooks/useFoods';
import { FoodsToCartProvider } from './hooks/useFoodsToCart';

function App() {
  return (
    <>
      <FoodsContextProvider>
        <FoodsToCartProvider>
          <MenuHeader />
          <MenuFoods />
        </FoodsToCartProvider>
      </FoodsContextProvider>
    </>
  );
}

export default App;
