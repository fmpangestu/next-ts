import ProductViews from "../../views/product";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
  // const [products, setProducts] = useState([]);
  // console.log(products);

  //? dengan swr
  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  // useEffect(() => {
  //   fetch("/api/product").then((res) =>
  //     res.json().then((data) => setProducts(data.data))
  //   );
  // }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Product Page</h1>
      <ProductViews products={isLoading ? [] : data.data} />
    </>
  );
};

export default ProductPage;
