/* eslint-disable simple-import-sort/imports */
import { APIroutes } from '@/utils/AppConfig';
import ProductList from '@components/list';
import type { ProductModel } from '@components/products';
import { useEffect, useState } from 'react';

const Index = () => {
  const [products, setProducts] = useState([] as ProductModel[]);

  useEffect(() => {
    fetch(APIroutes.products.get)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
        }
      });
  }, []);

  return <ProductList products={products} />;
};

export default Index;
