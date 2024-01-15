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

export default function MobileFilterSection() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='fixed bottom-4 right-4 lg:hidden' variant='default'>
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
        <DrawerFooter>
          <Button>Apply Filters</Button>
          <DrawerClose asChild>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
