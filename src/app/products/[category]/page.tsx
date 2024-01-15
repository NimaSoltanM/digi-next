import { db } from '@/lib/db';
import ProductCard from './product-card';
import FilterSection from './filter-section';
import MobileFilterSection from './mobile-filter-section';

interface PageProps {
  params: { category: string };
}

export default async function Page({ params: { category } }: PageProps) {
  const products = await db.product.findMany({
    where: {
      category: {
        name: category,
      },
    },
  });

  return (
    <div key='1' className='container mx-auto px-4 md:px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start'>
        <MobileFilterSection />
        <FilterSection />
        <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {products.map((prod) => (
            <ProductCard product={prod} key={prod.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
