import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function FilterSection() {
  return (
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
  );
}
