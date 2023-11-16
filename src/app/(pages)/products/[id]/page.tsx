interface ProductsProps {
  params: {
    slug: string;
  }
}

export default function Product({ params }: ProductsProps) {
  return (
    <div>
      <h1>Product: {params.slug}</h1>
    </div>
  )
}