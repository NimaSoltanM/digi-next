/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MSlpmRqAMfN
 */
import { Button } from '@/components/ui/button';
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerContent,
  Drawer,
} from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div key='1' className='container mx-auto px-4 md:px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start'>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              className='fixed bottom-4 right-4 lg:hidden'
              variant='default'>
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent className='lg:hidden'>
            <DrawerHeader>
              <DrawerTitle>Product Filters</DrawerTitle>
            </DrawerHeader>
            <div className='space-y-4 px-4'>
              <div>
                <Label htmlFor='sort'>Sort by</Label>
                <Select id='sort'>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='price-asc'>
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value='price-desc'>
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value='name-asc'>Name: A to Z</SelectItem>
                    <SelectItem value='name-desc'>Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor='filter'>Filter by price</Label>
                <Select id='filter'>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='under-50'>Under $50</SelectItem>
                    <SelectItem value='50-100'>$50 - $100</SelectItem>
                    <SelectItem value='100-200'>$100 - $200</SelectItem>
                    <SelectItem value='200-plus'>Over $200</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor='availability'>Availability</Label>
                <Select id='availability'>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='in-stock'>In Stock</SelectItem>
                    <SelectItem value='out-of-stock'>Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DrawerFooter>
              <Button>Apply Filters</Button>
              <DrawerClose asChild>
                <Button variant='outline'>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <div className='hidden lg:block sticky top-10'>
          <h1 className='text-2xl font-bold mb-4'>Products</h1>
          <div className='space-y-4'>
            <div>
              <Label htmlFor='sort'>Sort by</Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='price-asc'>Price: Low to High</SelectItem>
                  <SelectItem value='price-desc'>Price: High to Low</SelectItem>
                  <SelectItem value='name-asc'>Name: A to Z</SelectItem>
                  <SelectItem value='name-desc'>Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor='filter'>Filter by price</Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='under-50'>Under $50</SelectItem>
                  <SelectItem value='50-100'>$50 - $100</SelectItem>
                  <SelectItem value='100-200'>$100 - $200</SelectItem>
                  <SelectItem value='200-plus'>Over $200</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor='availability'>Availability</Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='in-stock'>In Stock</SelectItem>
                  <SelectItem value='out-of-stock'>Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <Card>
            <CardHeader>
              <img
                alt='Product 1'
                className='w-full h-48 object-cover'
                height='200'
                src='/placeholder.svg'
                style={{
                  aspectRatio: '200/200',
                  objectFit: 'cover',
                }}
                width='200'
              />
            </CardHeader>
            <CardContent className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
              <h3 className='font-semibold text-lg mb-2'>Product 1</h3>
              <div className='flex items-center justify-between mb-2'>
                <span className='font-bold text-lg'>$49.99</span>
                <Badge variant='secondary'>In Stock</Badge>
              </div>
              <div className='flex items-center gap-0.5 mb-4'>
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
              </div>
              <Button className='w-full py-2 text-white bg-primary rounded-md hover:bg-primary-dark'>
                BUY NOW
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 1'
                className='w-full h-48 object-cover'
                height='200'
                src='/placeholder.svg'
                style={{
                  aspectRatio: '200/200',
                  objectFit: 'cover',
                }}
                width='200'
              />
            </CardHeader>
            <CardContent className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
              <h3 className='font-semibold text-lg mb-2'>Product 1</h3>
              <div className='flex items-center justify-between mb-2'>
                <span className='font-bold text-lg'>$49.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <div className='flex items-center gap-0.5 mb-4'>
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-primary' />
                <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
                <StarIcon className='w-5 h-5 fill-muted stroke-muted-foreground' />
              </div>
              <Button className='w-full py-2 text-white bg-primary rounded-md hover:bg-primary-dark'>
                BUY NOW
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
