import { productType } from "@/Types/product.type";
import ProductViews from "../../views/product";

const ProductPage = (props: { products: productType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductViews products={products} />
    </div>
  );
};
export default ProductPage;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
  const response = await res.json();
  //   console.log(response.data);
  return {
    props: {
      products: response.data,
    },
  };
}
