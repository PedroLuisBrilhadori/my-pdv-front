import type { ProductModel } from '@components/products';
import Product from '@components/products';

type ProductListProps = {
  products: ProductModel[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <nav aria-label="Main Nav" className="flex flex-col space-y-1">
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </nav>
  );
};

export default ProductList;
