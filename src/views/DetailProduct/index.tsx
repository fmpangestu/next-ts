import { productType } from "@/Types/product.type";
import productStyle from "./detail.module.scss";
import Link from "next/link";

const DetailProductPage = ({ product }: { product: productType }) => {
  return (
    <div className="container px-3 py-10 lg:px-32 lg:py-24">
      <Link
        href={"/product"}
        className="relative left-2 px-8 py-2 my-2 text-white bg-sky-500 rounded-lg"
      >
        Back
      </Link>
      <div className={`px-3 py-2 flex flex-wrap gap-2 `}>
        <img
          src={product.image && product.image}
          alt={product.name}
          width={"100%"}
          className={`h-[500px] object-cover rounded-lg ${productStyle.customShadow}`}
        />
        <h1 className="font-bold">{product.name}</h1>
        <p className="text-[14px] text-gray-400">{product.category}</p>
        <p className="text-base ">
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </div>
  );
};

export default DetailProductPage;
