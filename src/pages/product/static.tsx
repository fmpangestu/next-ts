import { productType } from "@/Types/product.type";
import ProductViews from "../../views/product";

const ProductPage = (props: { products: productType[] }) => {
  const { products } = props;
  return (
    <>
      <ProductViews products={products} />
    </>
  );
};

export default ProductPage;
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
