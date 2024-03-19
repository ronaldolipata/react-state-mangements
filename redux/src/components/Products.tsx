import { useMemo, useState } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import initialProducts from '../data/products.json';

const Products = () => {
  const [products] = useState(initialProducts);
  const filterBy = useAppSelector((state) => state.filter.productName);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(filterBy.toLocaleLowerCase());
    });
  }, [products, filterBy]);

  return (
    <ul>
      {filteredProducts.map(({ id, name, cost }) => {
        return (
          <li key={id}>
            {name} @ {cost}
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
