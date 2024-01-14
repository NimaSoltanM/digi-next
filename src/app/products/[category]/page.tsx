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
              className='fixed bottom-4 left-4 lg:hidden'
              variant='outline'>
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
              <Select id='sort'>
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
        </div>
        <div className='md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='outline'>In Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='outline'>In Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='outline'>In Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                alt='Product 3'
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
            <CardContent>
              <h3 className='font-semibold text-lg'>Product 3</h3>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                This is a short description of product 3.
              </p>
              <div className='flex items-center justify-between mt-2'>
                <span className='font-bold text-lg'>$39.99</span>
                <Badge variant='destructive'>Out of Stock</Badge>
              </div>
              <Button className='mt-4 w-full'>BUY NOW</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
