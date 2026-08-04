import { useGetProductsQuery } from '../slices/productsApiSlice';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <h1 className='text-center mb-3'>Latest Arrivals</h1>
      {isLoading ? (
        <h2 className='text-center'>Loading...</h2>
      ) : error ? (
        <h3 className='text-center' style={{ color: 'var(--color-danger)' }}>
          {error?.data?.message || error.error}
        </h3>
      ) : (
        <div className='product-grid'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
