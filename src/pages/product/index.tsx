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
      <ProductViews products={isLoading ? [] : data.data} />
    </>
  );
};

export default ProductPage;
