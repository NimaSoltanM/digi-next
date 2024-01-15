import { db } from '@/lib/db';

export default async function Page({
  params: { productName },
}: {
  params: { productName: string };
}) {
  const defaultProductName = productName.replace(/-/g, ' ');

  const product = await db.product.findFirst({
    where: {
      name: defaultProductName,
    },
  });

  if (!product) return <div>Product not found</div>;

  return <div>{product.name}</div>;
}
