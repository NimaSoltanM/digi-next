import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { categoriesForProductsPage } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col min-h-[80vh]'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {categoriesForProductsPage.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <Image
                  alt={item.title}
                  className='h-70 w-full object-cover'
                  height='100'
                  src={`/assests/images/products/${item.imageUrl}.webp`}
                  style={{
                    aspectRatio: '100/100',
                    objectFit: 'cover',
                  }}
                  width='400'
                />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className='w-full' size='sm' asChild>
                  <Link href={`/products/${item.link}`}>Explore</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
