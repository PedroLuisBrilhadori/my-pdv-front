import Link from 'next/link';

export type ProductModel = {
  id?: string;
  name: string;
  price: number;
};

const Product = ({ name, price }: ProductModel) => {
  return (
    <Link
      href=""
      className="group flex items-center rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black"
    >
      <span className="ml-3 text-sm font-medium"> {name} </span>

      <span className="ml-auto shrink-0 rounded-full bg-green-200 py-0.5 px-3 text-xs font-bold text-black group-hover:bg-gray-200 group-hover:text-gray-700">
        R${price}
      </span>
    </Link>
  );
};

export default Product;
