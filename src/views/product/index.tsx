import { productType } from "@/Types/product.type";
import productStyle from "./product.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductViews = ({ products }: { products: productType[] }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   });gk bu
  //   return () => clearTimeout(timer);
  // }, [products]);
  // if (isLoading) {
  //   return (
  //     <div className="px-4 py-5 lg:py-16 lg:px-24 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10 box-border">
  //       {Array.from({ length: 4 }).map((_, i) => (
  //         <div
  //           key={i}
  //           className="w-full bg-gray-300 animate-pulse rounded-lg mb-4"
  //         >
  //           <div className="h-48 bg-gray-900 rounded-t-lg"></div>
  //           <div className="px-3 py-2 w-full flex flex-col gap-2 mb-4 rounded-b-lg">
  //             <div className="h-6 bg-gray-400 rounded"></div>
  //             <div className="h-4 bg-gray-400 rounded w-3/4"></div>
  //             <div className="h-4 bg-gray-400 rounded w-1/2"></div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  //? ini aslinya bagus,, ya akan tetqapi karena ketika kita ingin untuk server, yang mana servr itu juga mengambil dari component views yang sama, ya pasti akan ke render

  return (
    <div className="px-4 py-5 lg:py-16 lg:px-24 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10 box-border">
      {products.length > 0 ? (
        <>
          {products.map((product: productType) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              {/* <img src={product.image} alt={product.name} width={"100%"} /> */}
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
              />
              <div
                className={`px-3 py-2 w-full flex flex-col gap-2  mb-4  rounded-b-lg ${productStyle.customShadow}`}
              >
                <h1 className="font-bold">{product.name}</h1>
                <p className="text-[14px] text-gray-400">{product.category}</p>
                <p className="text-base ">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </>
      ) : (
        Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-full bg-gray-300 animate-pulse rounded-lg mb-4"
          >
            <div className="h-48 bg-gray-900 rounded-t-lg"></div>
            <div className="px-3 py-2 w-full flex flex-col gap-2 mb-4 rounded-b-lg">
              <div className="h-6 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="h-4 bg-gray-400 rounded w-1/2"></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductViews;
